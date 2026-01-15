"use client";
import { useEffect } from "react";
import useCartStore from "@/store/useCartStore";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Minus,
  Plus,
  ChevronLeft,
  CreditCard,
  AlertTriangle,
  Loader2,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    totalItems,
    subtotal,
    isLoading,
    error,
    removeItem,
    updateQuantity,
    fetchCart,
    applyDiscount,
  } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleQuantityChange = (itemId, newQty) => {
    if (newQty < 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQty);
    }
  };

  const handleDiscountApply = (code) => {
    if (code.trim()) {
      applyDiscount(code.trim());
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-[#19a2e6]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Cart Error</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={fetchCart}
          className="px-6 py-2 bg-[#19a2e6] text-white rounded-lg font-bold hover:bg-[#1487c0] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  const hasItems = totalItems > 0;
  // console.log(items);

  return (
    <div
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-40 bg-white">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap gap-2 px-4 pb-6 pt-2 text-sm mb-6">
              <Link
                href="/products"
                className="text-[#4e7f97] hover:underline font-medium"
              >
                Shop
              </Link>
              <span className="text-[#d0dfe7]">/</span>
              <span className="text-[#0e171b] font-semibold">Cart</span>
            </nav>

            <h2 className="text-[#0e171b] tracking-tight text-4xl md:text-4xl font-bold leading-tight px-4 mb-8">
              Your Cart ({totalItems} items)
            </h2>

            {!hasItems ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500 mb-4">
                  Your cart is empty.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#19a2e6] text-white rounded-lg font-bold hover:bg-[#1487c0] transition-colors"
                >
                  <ChevronLeft size={20} />
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 bg-slate-50 px-4 py-4 rounded-xl border border-[#e7eff3] group"
                    >
                      <div className="relative shrink-0">
                        <img
                          src={item.product.mainImage || "/placeholder.jpg"}
                          alt={item.product.name || "Product Image"}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.slug}`}
                          className="block hover:text-[#19a2e6] transition-colors"
                        >
                          <p className="text-[#0e171b] text-base font-medium leading-normal line-clamp-1 mb-1">
                            {item.product.name}
                          </p>
                        </Link>
                        <p className="text-[#4e7f97] text-sm font-normal leading-normal line-clamp-2">
                          {item.product.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-right">
                        <p className="text-[#0e171b] text-base font-normal leading-normal">
                          ₹{item.priceAtAdd.toFixed(0)}
                        </p>
                        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-[#d0dfe7]">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product._id,
                                item.quantity - 1
                              )
                            }
                            className="p-1 text-[#4e7f97] hover:text-[#19a2e6] transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product._id,
                                item.quantity + 1
                              )
                            }
                            className="p-1 text-[#4e7f97] hover:text-[#19a2e6] transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product._id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discount Code */}
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 mb-6">
                  <input
                    placeholder="Discount code"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border border-[#d0dfe7] bg-slate-50 focus:border-[#d0dfe7] h-14 placeholder:text-[#4e7f97] pl-3 placeholder:pl-1 text-base font-normal leading-normal tracking-[0.015em]"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleDiscountApply(e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                  <button
                    onClick={() =>
                      handleDiscountApply(
                        document.querySelector(
                          "input[placeholder='Discount code']"
                        )?.value
                      )
                    }
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-[#e7eff3] text-[#0e171b] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d0dfe7] transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {/* Order Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                  <div className="lg:col-span-2" /> {/* Spacer for symmetry */}
                  <div className="lg:col-span-1 bg-white rounded-xl border border-[#e7eff3] p-6 shadow-sm">
                    <h3 className="text-[#0e171b] text-lg font-bold leading-tight mb-6">
                      Order Summary
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-[#4e7f97] text-sm font-normal">
                          Subtotal
                        </span>
                        <span className="text-[#0e171b] text-sm font-normal">
                          ₹{subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e7f97] text-sm font-normal">
                          Shipping
                        </span>
                        <span className="text-[#0e171b] text-sm font-normal">
                          Calculated at next step
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e7f97] text-sm font-normal">
                          Estimated taxes
                        </span>
                        <span className="text-[#0e171b] text-sm font-normal">
                          Calculated at next step
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6 pt-3 border-t border-[#e7eff3]">
                      <span className="text-[#4e7f97] text-sm font-normal">
                        Total
                      </span>
                      <span className="text-[#0e171b] text-lg font-bold">
                        ₹{subtotal.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href="/checkout"
                      className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-[#19a2e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1487c0] transition-all active:scale-[0.98]"
                    >
                      <CreditCard size={20} className="mr-2" />
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
