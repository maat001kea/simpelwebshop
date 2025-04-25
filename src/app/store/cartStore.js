"use client"; // Sørger for at filen kører på klienten (browseren)

import { create } from "zustand";

// Zustand store til at gemme og styre kurv-indholdet
export const useCartStore = create((set) => ({
  cart: [], // Start med en tom kurv

  // Funktion til at tilføje et produkt til kurven
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      // Hvis produktet allerede er i kurven → opdater quantity
      if (existingItem) {
        return {
          cart: state.cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      } else {
        // Ellers tilføj produktet med quantity = 1
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),

  // Funktion til at fjerne ét stk. af et produkt
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0); // Fjern produkter med 0 stk.

      return { cart: updatedCart };
    }),
}));
