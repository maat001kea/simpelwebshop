"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/app/store/cartStore";

// Komponent til én produkts +/– og "Læg i kurv" funktionalitet
const SingleButton = ({ product }) => {
  const [loading, setLoading] = useState(false); // Spinner under tilføjelse
  const [quantity, setQuantity] = useState(0); // Antal vist i UI

  // Hent funktioner og data fra zustand-cart store
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQty = useCartStore((state) => state.updateQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  // Hvis produktet ikke findes, vis ikke noget
  if (!product) return null;

  // Lyt til ændringer i cart og opdatér local quantity
  useEffect(() => {
    const cartItem = cart.find((item) => item.id === product.id);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cart, product]);

  // ➕ Tilføj en mere eller ny vare til kurven
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

  // ➖ Træk en fra – eller fjern helt hvis quantity = 1
  const handleRemove = () => {
    if (quantity > 1) {
      updateQty(product.id, quantity - 1);
    } else if (quantity === 1) {
      removeFromCart(product.id);
    }
  };

  // ▶️ Læg i kurv med spinner
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
    }, 500); // Simuler 500ms "ventetid"
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* +/- knapper */}
      <div className="flex items-center gap-4">
        {/* – knap */}
        <button onClick={handleRemove} disabled={quantity === 0} className={`text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 ${quantity === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
          –
        </button>

        {/* Antal visning */}
        <span className="text-lg font-semibold">{quantity}</span>

        {/* + knap */}
        <button onClick={handleAdd} disabled={quantity >= 99} className={`text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 ${quantity >= 99 ? "opacity-50 cursor-not-allowed" : ""}`}>
          +
        </button>
      </div>

      {/* Læg i kurv knap med loading spinner */}
      <button onClick={handleAddToCart} disabled={loading} className="flex items-center justify-center gap-2 bg-[#F27F3D] rounded-lg text-white font-bold py-2 px-6 hover:bg-orange-600 transition duration-300 ease-in-out mt-4 min-w-[180px]">
        {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent border-solid rounded-full animate-spin" /> : "Læg i kurv"}
      </button>
    </div>
  );
};

export default SingleButton;
