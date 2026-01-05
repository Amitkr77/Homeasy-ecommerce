import jwt from "jsonwebtoken";

const verifyAdmin = (req) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { error: "Unauthorized: No token provided" };
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return { error: "Access denied: Admin privileges required" };
    }

    // optionally return user info
    return { success: true, user: decoded };
  } catch (error) {
    return { error: "Invalid or expired token" };
  }
};

export default verifyAdmin;
