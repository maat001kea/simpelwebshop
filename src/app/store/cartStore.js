"use client";

import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // Tilføj produkt til kurven
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // Hvis produkt allerede findes, opdater quantity
        return {
          cart: state.cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item)),
        };
      }

      // Hvis ikke findes, tilføj som nyt produkt
      return {
        cart: [...state.cart, { ...product, quantity: product.quantity || 1 }],
      };
    }),

  // Opdater antallet på et bestemt produkt
  updateQty: (id, newQty) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)),
    })),

  // Fjern et produkt helt fra kurven
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // Tøm hele kurven
  clearCart: () => set({ cart: [] }),
}));
