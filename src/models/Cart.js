const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  variantSku: {
    type: String, // SKU of the selected variant (null if no variants)
    default: null,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
  priceAtAdd: {
    type: Number,
    required: true, // Snapshot of price at add time (base or variant price)
  },
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
    unique: true, // One cart per user
  },
  items: [cartItemSchema],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Virtual for total items count
cartSchema.virtual('totalItems').get(function() {
  return this.items.reduce((sum, item) => sum + item.quantity, 0);
});

// Virtual for subtotal
cartSchema.virtual('subtotal').get(function() {
  return this.items.reduce((sum, item) => sum + (item.priceAtAdd * item.quantity), 0);
});

// Ensure unique index on user
cartSchema.index({ user: 1 });

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
module.exports = Cart;