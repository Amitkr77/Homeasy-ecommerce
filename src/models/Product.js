const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // General Information
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [500, 'Short description cannot exceed 500 characters']
  },
  fullDescription: {
    type: String,
    required: [true, 'Full description is required'],
    trim: true
  },

  // Media
  images: [{
    url: {
      type: String,
      required: true
    },
    isMain: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: ''
    }
  }],
  mainImage: {
    type: String,
    default: null
  },

  // Pricing & Inventory
  basePrice: {
    type: Number,
    required: [true, 'Base price is required'],
    min: [0, 'Price cannot be negative']
  },
  compareAtPrice: {
    type: Number,
    min: [0, 'Compare at price cannot be negative'],
    default: 0
  },
  sku: {
    type: String,
    required: [true, 'SKU is required'],
    unique: true,
    trim: true,
    uppercase: true
  },
  barcode: {
    type: String,
    trim: true,
    default: ''
  },
  quantityInStock: {
    type: Number,
    min: [0, 'Quantity cannot be negative'],
    default: 0
  },

  // Variants
  variantsEnabled: {
    type: Boolean,
    default: true
  },
  variantOptions: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    values: [{
      type: String,
      required: true,
      trim: true
    }]
  }],
  variants: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Variant price cannot be negative']
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      trim: true,
      uppercase: true
    },
    inventory: {
      type: Number,
      required: true,
      min: [0, 'Variant inventory cannot be negative'],
      default: 0
    }
  }],

  // Specifications
  dimensions: {
    type: String,
    trim: true,
    default: ''
  },
  weight: {
    type: String,
    trim: true,
    default: ''
  },
  power: {
    type: String,
    trim: true,
    default: ''
  },
  wifiStandard: {
    type: String,
    trim: true,
    default: ''
  },
  warranty: {
    type: String,
    trim: true,
    default: ''
  },
  compatibility: {
    type: String,
    trim: true,
    default: ''
  },

  // Shipping & Customer Assurance
  packageWeight: {
    type: Number,
    min: [0, 'Package weight cannot be negative'],
    default: 0
  },
  packageDimensions: {
    type: String,
    trim: true,
    default: ''
  },
  warrantyDisplayText: {
    type: String,
    trim: true,
    default: ''
  },
  freeShipping: {
    type: Boolean,
    default: false
  },
  returnPolicy: {
    type: String,
    trim: true,
    default: ''
  },
  supportInfo: {
    type: String,
    trim: true,
    default: ''
  },

  // SEO Settings
  metaTitle: {
    type: String,
    trim: true,
    maxlength: [60, 'Meta title cannot exceed 60 characters'],
    default: ''
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: [160, 'Meta description cannot exceed 160 characters'],
    default: ''
  },
  urlHandle: {
    type: String,
    required: [true, 'URL handle is required'],
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9-]+$/, 'URL handle can only contain lowercase letters, numbers, and hyphens']
  },

  // Organization & Status
  status: {
    type: String,
    enum: ['Active', 'Draft', 'Archived'],
    default: 'Draft'
  },
  visibility: {
    type: String,
    enum: ['Public', 'Private'],
    default: 'Public'
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  brand: {
    type: String,
    trim: true,
    default: ''
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for full URL if needed (example)
// productSchema.virtual('mainImageUrl').get(function() {
//   return this.mainImage ? `${process.env.BASE_URL}/images/${this.mainImage}` : null;
// });

// Index for better query performance
// productSchema.index({ sku: 1 });
productSchema.index({ category: 1 });
productSchema.index({ tags: 1 });
productSchema.index({ status: 1 });

// productSchema.pre('save', function (next) {
//   // Only generate if SKU is empty and this is a new document
//   if (this.isNew && !this.sku) {
//     this.sku = 'PROD-' + Date.now().toString(36).toUpperCase() +
//                Math.random().toString(36).substr(2, 6).toUpperCase();
//   }
//   next();
// });
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;