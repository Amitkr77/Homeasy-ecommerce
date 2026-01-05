import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();

    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Check for existing user (case-insensitive)
    const existingUser = await User.findOne({
      email: { $regex: `^${normalizedEmail}$`, $options: "i" },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "A user with this email already exists" });
    }

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: password,
    });

    // Safe response (no password)
    return res.status(201).json({message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || "user",
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("User registration error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
