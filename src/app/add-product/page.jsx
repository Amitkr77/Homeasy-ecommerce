import React from "react";
import {
  ChevronRight,
  BookText as Description,
  Image,
  CloudUpload,
  Eye,
  Trash2,
  DollarSign,
  Tag,
  Plus,
  Lightbulb,
  Save,
  X,
  List,
  Link,
  Bold,
  Italic,
  Underline,
  Package,
  Globe,
  Truck,
  Shield,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function AddNewProductPage() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-text-main dark:text-slate-100 font-display min-h-screen flex flex-col">
      <div className="flex flex-1">
        <main className="flex-1 w-full max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-10">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <nav className="flex items-center gap-2 text-sm font-medium text-text-muted mb-2">
                <a href="#" className="hover:text-primary transition-colors">
                  Dashboard
                </a>
                <ChevronRight className="w-4 h-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  Products
                </a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-text-main dark:text-white">Add New</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main dark:text-white">
                Add New Product
              </h1>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center justify-center rounded-lg h-10 px-6 border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-main dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Cancel
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-primary/20">
                <Save className="w-4.5 h-4.5" />
                Save Product
              </button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* General Information */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Description className="w-5 h-5 text-primary" />
                  General Information
                </h3>
                <div className="space-y-6">
                  <label className="block">
                    <span className="block text-base font-medium mb-2">
                      Product Name
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., Homeasy Smart Thermostat"
                      className="w-full rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white placeholder:text-text-muted transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-base font-medium mb-2">
                      Short Description
                    </span>
                    <input
                      type="text"
                      placeholder="Brief summary shown under product title (e.g., Control your home's temperature from anywhere...)"
                      className="w-full rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white placeholder:text-text-muted transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-base font-medium mb-2">
                      Full Description
                    </span>
                    <div className="rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 overflow-hidden">
                      <textarea
                        placeholder="Enter detailed product description..."
                        className="w-full bg-transparent p-4 min-h-[100px] text-base resize-none focus:outline-none dark:text-white placeholder:text-text-muted"
                      />
                    </div>
                  </label>
                </div>
              </section>

              {/* Media */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Image className="w-5 h-5 text-primary" />
                  Media
                </h3>

                <label className="block cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="border-2 border-dashed border-border-light dark:border-border-dark hover:border-primary rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all bg-slate-50/50 dark:bg-background-dark/30">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <CloudUpload className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-medium text-lg">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="group relative aspect-square rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRoGXwadMUIWxDCcvVYSa_n1MTaQkLIn180J5a3Tg20zVQ_Ybb1Y_LkMtRAfy1zOQenTf8HuSp5VWEKAcJKsET7cCGlv0bxImK9HS-wVy-jEeCk2HQX4Uqe0Vdvm3nEc7HGqNEHZKAwQAWkbAV3XlO5bGiDcUHxz0rGV9GqDyIsIFeKZDlL9yOLuPGMK7lsN8MZBMe7usQIWodj4bxnY1RG8QQn-MWWuxi5ViWEsBm_v2VKA9tkUZY1uXlXmfw4ykonfIml-er6ebg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="text-white hover:text-primary transition-colors">
                        <Eye className="w-7 h-7" />
                      </button>
                      <button className="text-white hover:text-red-400 transition-colors">
                        <Trash2 className="w-7 h-7" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      MAIN
                    </div>
                  </div>

                  <div className="relative aspect-square rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                </div>
              </section>

              {/* Pricing & Inventory */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Pricing &amp; Inventory
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Base Price
                    </span>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                        ₹
                      </span>
                      <input
                        type="number"
                        placeholder="0.00"
                        step="0.01"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white transition-colors"
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Compare at Price (Original)
                    </span>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                        ₹
                      </span>
                      <input
                        type="number"
                        placeholder="0.00"
                        step="0.01"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white transition-colors"
                      />
                    </div>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border-light dark:border-border-dark">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">SKU</span>
                    <input
                      type="text"
                      placeholder="S-001"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Barcode (ISBN/UPC)
                    </span>
                    <input
                      type="text"
                      placeholder="0000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Quantity in Stock
                    </span>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white transition-colors"
                    />
                  </label>
                </div>
              </section>

              {/* Variants */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary" />
                    Variants
                  </h3>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-slate-300 rounded-full peer dark:bg-slate-700 peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                    <span className="ml-3 text-sm font-medium">Enabled</span>
                  </label>
                </div>

                <div className="flex gap-4 items-end mb-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-text-muted mb-1">
                      Option Name
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white">
                      <option>Color</option>
                      <option>Size</option>
                      <option>Material</option>
                    </select>
                  </div>
                  <div className="flex-[2]">
                    <label className="block text-sm font-medium text-text-muted mb-1">
                      Option Values
                    </label>
                    <input
                      type="text"
                      placeholder="Separate values with comma (e.g. Red, Blue, Green)"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </div>
                  <button className="h-11 px-5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border-light dark:border-border-dark">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-background-dark/50 text-text-muted uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3 font-medium">Variant</th>
                        <th className="px-6 py-3 font-medium">Price</th>
                        <th className="px-6 py-3 font-medium">SKU</th>
                        <th className="px-6 py-3 font-medium">Inventory</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                      <tr>
                        <td className="px-6 py-4">Color: Matte Black</td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            defaultValue="₹199.00"
                            className="w-28 px-3 py-2 text-sm border border-border-light dark:border-border-dark rounded bg-transparent focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            defaultValue="SKU-MB"
                            className="w-28 px-3 py-2 text-sm border border-border-light dark:border-border-dark rounded bg-transparent focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            defaultValue="45"
                            className="w-20 px-3 py-2 text-sm border border-border-light dark:border-border-dark rounded bg-transparent focus:border-primary focus:outline-none"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Color: Glacier White</td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            defaultValue="₹199.00"
                            className="w-28 px-3 py-2 text-sm border border-border-light dark:border-border-dark rounded bg-transparent focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            defaultValue="SKU-GW"
                            className="w-28 px-3 py-2 text-sm border border-border-light dark:border-border-dark rounded bg-transparent focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            defaultValue="12"
                            className="w-20 px-3 py-2 text-sm border border-border-light dark:border-border-dark rounded bg-transparent focus:border-primary focus:outline-none"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Specifications */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Dimensions
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 4.5 x 4.5 x 1.2 in"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Weight
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 0.5 lbs"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Power
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 24V AC"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      WiFi Standard
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 802.11 b/g/n"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Warranty
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 2 years"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Compatibility
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., Alexa, Google Home, Apple HomeKit"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                </div>
              </section>

              {/* Shipping & Warranty Info */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Shipping &amp; Customer Assurance
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Package Weight (lbs)
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.5"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Package Dimensions (in)
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 6 x 6 x 2"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Warranty Display Text
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 2 Year Warranty"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Free Shipping
                    </span>
                    <div className="flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="relative w-11 h-6 bg-slate-300 rounded-full peer dark:bg-slate-700 peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                      <span className="ml-3 text-sm">
                        Show "Free Shipping" badge
                      </span>
                    </div>
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Return Policy
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 30 Day Returns"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Support Info
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., 24/7 Support"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                </div>
              </section>

              {/* SEO Settings */}
              <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Search Engine Optimization (SEO)
                </h3>
                <div className="space-y-6">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Meta Title
                    </span>
                    <input
                      type="text"
                      placeholder="Homeasy Smart Thermostat - WiFi Enabled"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Meta Description
                    </span>
                    <textarea
                      rows={4}
                      placeholder="Control your home temperature remotely with energy-saving features..."
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      URL Handle
                    </span>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-border-light dark:border-border-dark bg-slate-100 dark:bg-slate-800 text-text-muted">
                        yourstore.com/products/
                      </span>
                      <input
                        type="text"
                        placeholder="homeasy-smart-thermostat"
                        className="flex-1 rounded-r-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 px-4 py-3 focus:border-primary focus:outline-none dark:text-white"
                      />
                    </div>
                  </label>
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="flex flex-col gap-8">
              {/* Status */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Status</h3>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white">
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Archived</option>
                  </select>
                  <ChevronRight className="w-5 h-5 absolute right-4 top-4 text-text-muted pointer-events-none rotate-90" />
                </div>
                <div className="mt-4 space-y-2 text-sm text-text-muted">
                  <div className="flex justify-between">
                    <span>Visibility</span>
                    <span className="text-primary font-medium">Public</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Publish Date</span>
                    <span className="text-text-main dark:text-slate-300">
                      Immediately
                    </span>
                  </div>
                </div>
              </div>

              {/* Organization */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Organization</h3>
                <div className="space-y-5">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Category
                    </span>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 px-4 py-3 focus:border-primary focus:outline-none dark:text-white">
                        <option value="" disabled selected>
                          Select Category...
                        </option>
                        <option>Smart Lighting</option>
                        <option>Climate Control</option>
                        <option>Security &amp; Cameras</option>
                        <option>Hubs &amp; Sensors</option>
                      </select>
                      <ChevronRight className="w-5 h-5 absolute right-4 top-4 text-text-muted pointer-events-none rotate-90" />
                    </div>
                  </label>

                  <label className="block">
                    <span className="block text-sm font-medium mb-2">
                      Brand
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., Homeasy, Nest, Philips Hue"
                      className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus:border-primary focus:outline-none dark:text-white"
                    />
                  </label>

                  <div>
                    <span className="block text-sm font-medium mb-2">Tags</span>
                    <div className="flex flex-wrap gap-2 p-3 min-h-[56px] rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 focus-within:border-primary transition-colors">
                      {["WiFi", "Energy Efficient", "Smart Home"].map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          {tag}
                          <button className="hover:text-red-500 transition-colors">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      ))}
                      <input
                        type="text"
                        placeholder="Add tag..."
                        className="flex-1 bg-transparent text-sm outline-none dark:text-white min-w-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="bg-gradient-to-br from-[#19a1e6] to-[#0d7ab5] rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-white/80" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Pro Tip</h4>
                    <p className="text-sm leading-relaxed opacity-90">
                      Use high-quality images, detailed specifications, and
                      accurate pricing to increase conversion rates by up to
                      30%.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </section>
  );
}
