import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [], //initial value

  addToCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
    console.log("add button clicked");
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
    console.log("clik remmbied");
  },

  clearCart: () => {
    set({ cart: [] });
    console.log("clear cart");
  },
}));
