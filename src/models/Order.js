const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  variantSku: {
    type: String,
    default: null,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
  price: {
    type: Number,
    required: true, // Final price (from cart snapshot)
  },
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [orderItemSchema],
  subtotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    default: 0,
  },
  shipping: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  shippingAddress: {
    type: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true, // e.g., 'credit_card', 'paypal'
  },
  paymentId: {
    type: String, // External payment gateway ID
    default: null,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Index for user queries
orderSchema.index({ user: 1 });
orderSchema.index({ status: 1 });

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
module.exports = Order;