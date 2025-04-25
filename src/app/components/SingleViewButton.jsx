"use client";

import { useCartStore } from "@/app/store/cartStore";

const SingleButton = ({ product }) => {
  // Hent funktioner og state fra Zustand
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  if (!product) return null; // Hvis der ikke er noget produkt, vis ikke knappen

  // Find ud af om produktet allerede er i kurven
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0; // Vis 0 hvis den ikke er tilføjet

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Antal-justering med + / – */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => removeFromCart(product.id)}
          className={`text-xl px-2 ${quantity === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={quantity === 0} // Deaktiver – hvis antal er 0
        >
          –
        </button>
        <span>{quantity}</span>
        <button onClick={() => addToCart(product)} className="text-xl px-2">
          +
        </button>
      </div>

      {/* “Læg i kurv” knap */}
      <button onClick={() => addToCart(product)} className="bg-[#F27F3D] rounded-lg text-white font-bold py-2 px-4 hover:bg-orange-600 transition duration-300 ease-in-out">
        Læg i kurv
      </button>
    </div>
  );
};

export default SingleButton;
