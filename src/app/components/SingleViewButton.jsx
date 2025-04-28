"use client";

import { useCartStore } from "@/app/store/cartStore";

const SingleButton = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  if (!product) return null;

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Funktion til at lægge 1 til
  const handleAddOne = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1, // ✅ quantity skal med
    });
  };

  // Funktion til at lægge til kurven fra knap
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1, // ✅ quantity skal med
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* + / - Knapper */}
      <div className="flex items-center gap-4">
        <button onClick={() => removeFromCart(product.id)} className={`text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 ${quantity === 0 ? "opacity-50 cursor-not-allowed" : ""}`} disabled={quantity === 0}>
          –
        </button>

        <span className="text-lg font-semibold">{quantity}</span>

        <button onClick={handleAddOne} className="text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
          +
        </button>
      </div>

      {/* Læg i kurv-knap */}
      <button onClick={handleAddToCart} className="bg-[#F27F3D] rounded-lg text-white font-bold py-2 px-6 hover:bg-orange-600 transition duration-300 ease-in-out mt-4">
        Læg i kurv
      </button>
    </div>
  );
};

export default SingleButton;
