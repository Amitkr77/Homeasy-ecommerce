// pages/api/products/[id].js
import Product from "@/models/Product";
import { dbConnect } from "@/lib/dbConnect";
import verifyAdmin from "@/lib/adminAuth";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  const isObjectId = mongoose.Types.ObjectId.isValid(id);

  if (req.method === "GET") {
    try {
      const product = isObjectId
        ? await Product.findById(id).select("-__v").lean()
        : await Product.findOne({ urlHandle: id }).select("-__v").lean();

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(500)
        .json({ success: false, error: "Failed to fetch product" });
    }
  }

  /* ---------------- ADMIN METHODS ---------------- */

  if (req.method === "PUT" || req.method === "DELETE") {
    // Admin actions should ONLY allow ObjectId
    if (!isObjectId) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid product ID" });
    }

    const adminCheck = await verifyAdmin(req);
    if (adminCheck.error) {
      return res.status(adminCheck.status || 401).json(adminCheck);
    }

    try {
      if (req.method === "PUT") {
        const updatedProduct = await Product.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
        ).select("-__v");

        if (!updatedProduct) {
          return res.status(404).json({ success: false, message: "Product not found" });
        }

        return res.status(200).json({ success: true, data: updatedProduct });
      }

      if (req.method === "DELETE") {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
          return res.status(404).json({ success: false, message: "Product not found" });
        }

        return res
          .status(200)
          .json({ success: true, message: "Product deleted successfully" });
      }
    } catch (error) {
      console.error("Admin product error:", error);
      return res
        .status(500)
        .json({ success: false, error: "Operation failed" });
    }
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}
