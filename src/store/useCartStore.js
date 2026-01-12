import { create } from 'zustand';
import { devtools } from 'zustand/middleware'; 

const useCartStore = create(devtools((set, get) => ({
  items: [],
  totalItems: 0,
  subtotal: 0,
  isLoading: false,

  // Fetch cart from API
  fetchCart: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/cart', { method: 'GET', credentials: 'include' }); // Include cookies/JWT
      if (res.ok) {
        const { data } = await res.json();
        set({
          items: data.items || [],
          totalItems: data.totalItems || 0,
          subtotal: data.subtotal || 0,
        });
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  // Add item (optimistic update, then sync)
  addItem: async (productId, variantSku = null, quantity = 1) => {
    const { items, updateLocal } = get();
    const existingIndex = items.findIndex(item => 
      item.product._id === productId && item.variantSku === variantSku
    );
    let newItems;
    if (existingIndex > -1) {
      newItems = [...items];
      newItems[existingIndex].quantity += quantity;
    } else {
      // Fetch product for price/stock (or pass as arg)
      const res = await fetch(`/api/products/${productId}`);
      const product = await res.json();
      const price = variantSku ? product.variants.find(v => v.sku === variantSku)?.price : product.basePrice;
      newItems = [...items, { product: { _id: productId }, variantSku, quantity, price }];
    }
    updateLocal(newItems);

    // Sync with API
    await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, variantSku, quantity }),
      credentials: 'include',
    });
  },

  // Update quantity
  updateQuantity: async (itemId, quantity) => {
    const { items, updateLocal } = get();
    const newItems = items.map(item => 
      item._id === itemId ? { ...item, quantity } : item
    );
    updateLocal(newItems);

    await fetch('/api/cart', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, quantity }),
      credentials: 'include',
    });
  },

  // Remove item
  removeItem: async (itemId) => {
    const { items, updateLocal } = get();
    const newItems = items.filter(item => item._id !== itemId);
    updateLocal(newItems);

    await fetch('/api/cart', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId }),
      credentials: 'include',
    });
  },

  // Local update helper
  updateLocal: (newItems) => {
    const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    set({ items: newItems, totalItems, subtotal });
  },

  // Clear cart (after order)
  clearCart: () => set({ items: [], totalItems: 0, subtotal: 0 }),
})));

export default useCartStore;