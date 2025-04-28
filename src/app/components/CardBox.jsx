"use client";

import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";

const CardBox = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  // Udregn totalpris
  const totalPrice = cart
    .reduce((sum, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0);
      return sum + itemTotal;
    }, 0)
    .toFixed(2);

  return (
    <div className="mt-20 flex justify-center px-4">
      <div className="border-2 border-gray-300 rounded-2xl p-10 bg-white shadow-2xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Betaling</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Kurven er tom.</p>
        ) : (
          <>
            <ul className="text-gray-800 divide-y divide-gray-300">
              {cart.map((item) => (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.title}</span> x {item.quantity}
                  </div>
                  <div className="font-semibold">${(item.price * item.quantity).toFixed(2)} </div>
                </li>
              ))}
            </ul>

            {/* Totalpris */}
            <div className="mt-8 font-bold text-right text-2xl">Total: ${totalPrice} </div>

            {/* Knapper */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-6">
              {/* Fjern alt-knap */}
              <button onClick={clearCart} className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">
                Tøm kurv
              </button>

              {/* Betal knap */}
              <Link href="/payment" className="bg-[#F27F3D] text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">
                Betal nu
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardBox;
