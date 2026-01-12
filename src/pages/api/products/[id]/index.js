// pages/api/products/[id].js (Pages Router style)
import Product from "@/models/Product";
import { dbConnect } from "@/lib/dbConnect";
import verifyAdmin from "@/lib/adminAuth";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  // Validate ID
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, error: "Invalid product ID" });
  }

  if (req.method === "GET") {
    try {
      const product = await Product.findById(id).select("-__v").lean();

      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      return res.status(200).json({ success: true, data: product });
    } catch (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ success: false, error: "Failed to fetch product" });
    }
  }

  if (req.method === "PUT") {
    const adminCheck = await verifyAdmin(req);
    if (adminCheck.error) {
      return res.status(adminCheck.status || 401).json(adminCheck);
    }

    try {
      const body = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true }
      ).select("-__v");

      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      return res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      console.error("Error updating product:", error);

      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((e) => e.message);
        return res.status(400).json({ success: false, error: errors.join(", ") });
      }

      if (error.code === 11000) {
        return res.status(409).json({ success: false, error: "Duplicate SKU or URL handle" });
      }

      return res.status(500).json({ success: false, error: "Failed to update product" });
    }
  }

  if (req.method === "DELETE") {
    const adminCheck = await verifyAdmin(req);
    if (adminCheck.error) {
      return res.status(adminCheck.status || 401).json(adminCheck);
    }

    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ success: false, error: "Failed to delete product" });
    }
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}