"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/app/store/cartStore";

// Komponent til knapperne for et enkelt produkt
const SingleButton = ({ product }) => {
  // State til at vise loading/spinner under "Læg i kurv"
  const [loading, setLoading] = useState(false);

  // Zustand funktioner og state
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQty = useCartStore((state) => state.updateQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  // Lokal state til at vise nuværende antal
  const [quantity, setQuantity] = useState(0);

  // Når kurven eller produktet ændrer sig, opdatér antal
  useEffect(() => {
    if (product) {
      const cartItem = cart.find((item) => item.id === product.id);
      setQuantity(cartItem ? cartItem.quantity : 0);
    }
  }, [cart, product]);

  // Hvis produktet ikke er defineret, vis ikke noget
  if (!product) return null;

  // Tilføj 1 til eksisterende produkt eller tilføj nyt
  const handleAdd = () => {
    if (quantity > 0) {
      updateQty(product.id, quantity + 1);
    } else {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    }
  };

  // Træk 1 fra – eller fjern produktet helt hvis 1 tilbage
  const handleRemove = () => {
    if (quantity > 1) {
      updateQty(product.id, quantity - 1);
    } else if (quantity === 1) {
      removeFromCart(product.id);
    }
  };

  // Bruges af "Læg i kurv"-knappen – viser spinner imens
  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
      setLoading(false);
    }, 500); // Kunstig forsinkelse for at vise spinner
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Plus / Minus sektionen */}
      <div className="flex items-center gap-4">
        {/* – knap, bliver grået ud hvis antal = 0 */}
        <button onClick={handleRemove} disabled={quantity === 0} className={`text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 ${quantity === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
          –
        </button>

        {/* Viser aktuelt antal */}
        <span className="text-lg font-semibold">{quantity}</span>

        {/* + knap, deaktiveret ved 99 stk */}
        <button onClick={handleAdd} disabled={quantity >= 99} className={`text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 ${quantity >= 99 ? "opacity-50 cursor-not-allowed" : ""}`}>
          +
        </button>
      </div>

      {/* Læg i kurv-knap med spinner ved loading */}
      <button onClick={handleAddToCart} disabled={loading} className="flex items-center justify-center gap-2 bg-[#F27F3D] rounded-lg text-white font-bold py-2 px-6 hover:bg-orange-600 transition duration-300 ease-in-out mt-4 min-w-[180px]">
        {/* Spinner vises hvis loading er true */}
        {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div> : "Læg i kurv"}
      </button>
    </div>
  );
};

export default SingleButton;
