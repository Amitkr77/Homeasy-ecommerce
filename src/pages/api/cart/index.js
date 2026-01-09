import { dbConnect } from "@/lib/dbConnect";
import Cart from "@/models/Cart";
import Order from "@/models/Order"; // Not used here, but for ref
import Product from "@/models/Product";
import getCurrentUser from "@/lib/UserAuth"; // Implement this: similar to verifyAdmin, returns { userId, error }

export default async function handler(req, res) {
  const method = req.method;
  console.log(method, "Cart API is working");
  await dbConnect();

  const auth = await getCurrentUser(req);
  if (auth.error) return res.status(401).json({ success: false, error: auth.error });

  const userId = auth.userId;

  if (method === "GET") {
    try {
      let cart = await Cart.findOne({ user: userId }).populate('items.product');
      if (!cart) {
        cart = await Cart.create({ user: userId, items: [] });
      }
      return res.status(200).json({
        success: true,
        data: cart,
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
      return res.status(500).json({ success: false, error: "Failed to fetch cart" });
    }
  }

  if (method === "POST") { // Add item: body = { productId, variantSku?, quantity: 1 }
    try {
      const { productId, variantSku, quantity = 1 } = await req.body

      // Validate product and stock
      const product = await Product.findById(productId);
      if (!product) return res.status(404).json({ success: false, error: "Product not found" });

      let price = product.basePrice;
      let stock = product.quantityInStock;
      if (variantSku && product.variantsEnabled) {
        const variant = product.variants.find(v => v.sku === variantSku);
        if (!variant) return res.status(400).json({ success: false, error: "Variant not found" });
        price = variant.price;
        stock = variant.inventory;
      }
      if (stock < quantity) return res.status(400).json({ success: false, error: "Insufficient stock" });

      // Update stock
      if (variantSku && product.variantsEnabled) {
        product.variants.id(variantSku).inventory -= quantity; // Mongoose subdoc update
      } else {
        product.quantityInStock -= quantity;
      }
      await product.save();

      // Upsert cart item
      let cart = await Cart.findOne({ user: userId });
      if (!cart) cart = await Cart.create({ user: userId, items: [] });

      const existingItemIndex = cart.items.findIndex(item =>
        item.product.toString() === productId && item.variantSku === variantSku
      );
      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, variantSku, quantity, priceAtAdd: price });
      }
      cart.updatedAt = new Date();
      await cart.save();

      await cart.populate('items.product'); // For response
      return res.status(200).json({ success: true, data: cart });
    } catch (error) {
      console.error("Error adding to cart:", error);
      return res.status(500).json({ success: false, error: "Failed to add to cart" });
    }
  }

  if (method === "PUT") { // Update quantity: body = { itemId, quantity }
    try {
      const { itemId, quantity } = await req.body; // itemId is the _id of cart item
      if (quantity < 1) return res.status(400).json({ success: false, error: "Quantity must be at least 1" });

      const cart = await Cart.findOne({ user: userId });
      if (!cart) return res.status(404).json({ success: false, error: "Cart not found" });

      const item = cart.items.id(itemId);
      if (!item) return res.status(404).json({ success: false, error: "Item not found" });

      // Stock check (simplified; add full validation as in POST)
      const product = await Product.findById(item.product);
      let stock = product.quantityInStock;
      if (item.variantSku) {
        const variant = product.variants.find(v => v.sku === item.variantSku);
        stock = variant ? variant.inventory : 0;
      }
      const delta = quantity - item.quantity;
      if (stock < delta) return res.status(400).json({ success: false, error: "Insufficient stock" });

      // Update stock
      if (item.variantSku && product.variantsEnabled) {
        product.variants.id(item.variantSku).inventory -= delta;
      } else {
        product.quantityInStock -= delta;
      }
      await product.save();

      item.quantity = quantity;
      cart.updatedAt = new Date();
      await cart.save();

      await cart.populate('items.product');
      return res.status(200).json({ success: true, data: cart });
    } catch (error) {
      console.error("Error updating cart:", error);
      return res.status(500).json({ success: false, error: "Failed to update cart" });
    }
  }

  if (method === "DELETE") { // Remove item: body = { itemId }
    try {
      const { itemId } = await req.body;
      const cart = await Cart.findOne({ user: userId });
      if (!cart) return res.status(404).json({ success: false, error: "Cart not found" });

      const item = cart.items.id(itemId);
      if (!item) return res.status(404).json({ success: false, error: "Item not found" });

      // Restore stock (simplified)
      const product = await Product.findById(item.product);
      if (item.variantSku && product.variantsEnabled) {
        const variant = product.variants.find(v => v.sku === item.variantSku);
        if (variant) variant.inventory += item.quantity;
      } else {
        product.quantityInStock += item.quantity;
      }
      await product.save();

      cart.items.pull(itemId);
      cart.updatedAt = new Date();
      await cart.save();

      await cart.populate('items.product');
      return res.status(200).json({ success: true, data: cart });
    } catch (error) {
      console.error("Error removing from cart:", error);
      return res.status(500).json({ success: false, error: "Failed to remove from cart" });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  return res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
}