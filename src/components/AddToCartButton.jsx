"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/store/useCartStore";

export default function AddToCartButton({ product, selectedVariant = null }) {
  const router = useRouter();
  const { addItem, items, isLoading } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [localLoading, setLocalLoading] = useState(false);

  const maxStock = product.quantityInStock || 999;
  const isOutOfStock = maxStock === 0;

  // Check if product (or variant) is already in cart
  const isInCart = items.some(
    (item) =>
      item.id === product._id &&
      (!selectedVariant || item.sku === selectedVariant.sku)
  );

  const handleQuantityChange = (delta) => {
    const newQty = Math.max(1, Math.min(maxStock, quantity + delta));
    setQuantity(newQty);
  };

  const handleAdd = async () => {
    if (quantity > maxStock) {
      toast.error(`Only ${maxStock} items available.`, {
        duration: 3000,
        position: "bottom-center",
      });
      return;
    }

    setLocalLoading(true);
    try {
      await addItem(product._id, selectedVariant?.sku || null, quantity);
      toast.success(
        `${quantity} x ${product.name} added to cart!`,
        {
          duration: 3000,
          position: "bottom-center",
          style: {
            background: "#10b981",
            color: "#fff",
          },
        }
      );
      setQuantity(1); // Reset quantity after success
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error("Failed to add item to cart. Please try again.", {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      });
    } finally {
      setLocalLoading(false);
    }
  };

  const handleViewCart = () => {
    router.push("/cart");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        {/* Quantity Selector */}
        <div className="flex items-center bg-background rounded-md border border-input focus-within:border-ring">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1 || isOutOfStock || isInCart}
            className="rounded-l-md hover:bg-accent/50"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            min="1"
            max={maxStock}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Math.min(maxStock, parseInt(e.target.value) || 1)))
            }
            className="w-16 h-10 mx-0 border-0 text-center bg-transparent focus-visible:ring-0 focus-visible:border-0"
            disabled={isOutOfStock || isInCart}
            aria-label="Quantity"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= maxStock || isOutOfStock || isInCart}
            className="rounded-r-md hover:bg-accent/50"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart or View Cart Button */}
        {isInCart ? (
          <Button
            onClick={handleViewCart}
            variant="outline"
            className="flex-1 h-10 font-semibold border-[#19a2e6] text-[#19a2e6] hover:bg-[#19a2e6]/5 hover:border-[#19a2e6]/50 transition-all"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Go to Cart
            <ArrowRight className="ml-auto h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleAdd}
            disabled={isLoading || localLoading || isOutOfStock}
            className="flex-1 font-semibold shadow-md hover:shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50"
            size="lg"
          >
            {isLoading || localLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : isOutOfStock ? (
              <>
                <AlertCircle className="mr-2 h-4 w-4" />
                Out of Stock
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4 text-white" />
                
              </>
            )}
          </Button>
        )}
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          bottom: 20,
        }}
      />
    </>
  );
}