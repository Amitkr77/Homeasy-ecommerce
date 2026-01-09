import { dbConnect } from "@/lib/dbConnect";
import Order from "@/models/Order";
import Cart from "@/models/Cart";
import getCurrentUser from "@/lib/UserAuth";

export default async function handler(req, res) {
  const method = req.method;
  console.log(method, "Orders API is working");
  await dbConnect();

  const auth = await getCurrentUser(req);
  if (auth.error) return res.status(401).json({ success: false, error: auth.error });

  const userId = auth.userId;

  if (method === "POST") { // Create order: body = { shippingAddress, paymentMethod, tax?, shipping? }
    try {
      const { shippingAddress, paymentMethod, tax = 0, shipping = 0 } = await req.body;

      // Fetch and validate cart
      const cart = await Cart.findOne({ user: userId }).populate('items.product');
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ success: false, error: "Cart is empty" });
      }

      // Calculate totals
      const subtotal = cart.subtotal;
      const total = subtotal + tax + shipping;

      // Create order
      const order = await Order.create({
        user: userId,
        items: cart.items.map(item => ({
          product: item.product._id,
          variantSku: item.variantSku,
          quantity: item.quantity,
          price: item.priceAtAdd,
        })),
        subtotal,
        tax,
        shipping,
        total,
        shippingAddress,
        paymentMethod,
        status: 'Pending', 
      });

      // Clear cart
      await Cart.findOneAndUpdate({ user: userId }, { items: [] });

      await order.populate('items.product');
      return res.status(201).json({ success: true, data: order });
    } catch (error) {
      console.error("Error creating order:", error);
      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map(e => e.message);
        return res.status(400).json({ success: false, error: errors.join(", ") });
      }
      return res.status(500).json({ success: false, error: "Failed to create order" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
}