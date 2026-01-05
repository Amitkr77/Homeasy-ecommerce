// app/api/products/route.js
import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";
import verifyAdmin from "@/lib/adminAuth";

export default async function handler(req, res) {
    const method = req.method;
    console.log(method, "Product API is working");

    await dbConnect();

    if (method === "GET") {
        try {
            const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
            const status = searchParams.get("status");
            const category = searchParams.get("category");
            const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
            const limit = Math.min(50, parseInt(searchParams.get("limit") || "10"));

            const query = {};
            if (status) query.status = status;
            if (category) query.category = category;

            const [products, total] = await Promise.all([
                Product.find(query)
                    .select("-__v")
                    .sort({ createdAt: -1 })
                    .skip((page - 1) * limit)
                    .limit(limit)
                    .lean(),
                Product.countDocuments(query),
            ]);

            return res.status(200).json({
                success: true,
                data: products,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit),
                },
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            return res.status(500).json({ success: false, error: "Failed to fetch products" });
        }
    }

    if (method === "POST") {
        const adminCheck = await verifyAdmin(req);
        if (adminCheck.error)
            return res.status(403).json({ success: false, error: adminCheck.error });

        try {
            const body = await req.body;

            // Ensure no variant has a null sku
            if (body.variants) {
                for (const variant of body.variants) {
                    if (!variant.sku || variant.sku === null || variant.sku.trim() === '') {
                        return res.status(400).json({ success: false, error: "Each variant must have a valid SKU" });
                    }
                }
            }

            // Check for duplicates before creating
            const duplicateSKU = await Product.findOne({ sku: body.sku });
            const duplicateUrlHandle = await Product.findOne({ urlHandle: body.urlHandle });

            if (duplicateSKU) {
                return res.status(409).json({ success: false, error: "SKU already exists" });
            }

            if (duplicateUrlHandle) {
                return res.status(409).json({ success: false, error: "URL handle already exists" });
            }

            if (body.variants && body.variants.length > 0) {
                for (const variant of body.variants) {
                    const existingVariant = await Product.findOne({ "variants.sku": variant.sku });
                    if (existingVariant) {
                        return res.status(409).json({ success: false, error: `Variant SKU ${variant.sku} already exists in another product` });
                    }
                }
            }

            // Check if variants have unique SKUs
            if (body.variants) {
                const variantSKUs = new Set();
                for (const variant of body.variants) {
                    if (variantSKUs.has(variant.sku)) {
                        return res.status(400).json({ success: false, error: "Variant SKUs must be unique" });
                    }
                    variantSKUs.add(variant.sku);
                }
            }



            // Create the product
            const product = await Product.create(body);

            return res.status(201).json({ success: true, data: product });
        } catch (error) {
            console.error("Error creating product:", error);

            if (error.name === "ValidationError") {
                const errors = Object.values(error.errors).map((e) => e.message);
                return res.status(400).json({ success: false, error: errors.join(", ") });
            }

            if (error.code === 11000) {
                const errorMessage = error.message.includes('variants.sku')
                    ? "Duplicate variant SKU"
                    : "Duplicate SKU or URL handle";
                return res.status(409).json({ success: false, error: errorMessage });
            }

            return res.status(500).json({ success: false, error: "Failed to create product" });
        }
    }


    // Method not allowed
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
}
