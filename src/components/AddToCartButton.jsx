"use client";
import { useState } from "react";
import useCartStore from "@/store/useCartStore";

export default function AddToCartButton({ product, selectedVariant = null }) {
  const { addItem, isLoading } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(product._id, selectedVariant?.sku, quantity);
    setQuantity(1); 
  };

  return (
    <div className="flex gap-2">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        className="w-16 p-1 border rounded"
      />
      <button
        onClick={handleAdd}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Adding..." : `Add to Cart - ₹${product.basePrice}`}
      </button>
    </div>
  );
}
