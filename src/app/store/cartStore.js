"use client";

import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // Tilføj til kurven
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  // Opdater antal
  updateQty: (id, newQty) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)),
    })),

  // Fjern produkt helt fra kurv
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // Tøm hele kurven
  clearCart: () => set({ cart: [] }),
}));
