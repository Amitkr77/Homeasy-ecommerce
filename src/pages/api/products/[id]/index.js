// app/api/products/[id]/route.js
import Product from "@/models/Product";
import { dbConnect } from "@/lib/dbConnect";
import  verifyAdmin  from "@/lib/adminAuth";

await dbConnect();

/**
 * GET: Fetch single product by ID (Public)
 */
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid product ID" }),
        { status: 400 }
      );
    }

    const product = await Product.findById(id).select("-__v").lean();

    if (!product) {
      return new Response(
        JSON.stringify({ success: false, message: "Product not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ success: true, data: product }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to fetch product" }),
      { status: 500 }
    );
  }
}

/**
 * PUT: Update product (Admin only)
 */
export async function PUT(request, { params }) {
  const adminCheck = await verifyAdmin(request);
  if (adminCheck.error) return adminCheck.error;

  try {
    const { id } = params;
    const body = await request.json();

    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!updatedProduct) {
      return new Response(
        JSON.stringify({ success: false, message: "Product not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: updatedProduct }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return new Response(JSON.stringify({ success: false, error: errors.join(", ") }), {
        status: 400,
      });
    }

    if (error.code === 11000) {
      return new Response(
        JSON.stringify({ success: false, error: "Duplicate SKU or URL handle" }),
        { status: 409 }
      );
    }

    return new Response(
      JSON.stringify({ success: false, error: "Failed to update product" }),
      { status: 500 }
    );
  }
}

/**
 * DELETE: Delete product (Admin only)
 */
export async function DELETE(request, { params }) {
  const adminCheck = await verifyAdmin(request);
  if (adminCheck.error) return adminCheck.error;

  try {
    const { id } = params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return new Response(
        JSON.stringify({ success: false, message: "Product not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Product deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to delete product" }),
      { status: 500 }
    );
  }
}