"use client";

import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";

const CardBox = () => {
  const cart = useCartStore((state) => state.cart);

  // Udregn totalpris
  const totalPrice = cart
    .reduce((sum, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0); // Beskyt mod NaN
      return sum + itemTotal;
    }, 0)
    .toFixed(2); // Formatér til 2 decimaler

  return (
    <div className="mt-32">
      <div className="border-2 border-gray-300 rounded-lg p-6 mb-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Betaling</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Kurven er tom.</p>
        ) : (
          <>
            <ul className="text-gray-800 divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="py-2 flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.title}</span> x {item.quantity}
                  </div>
                  <div className="font-semibold">{(item.price * item.quantity).toFixed(2)} Kr</div>
                </li>
              ))}
            </ul>

            {/* Totalpris */}
            <div className="mt-6 font-bold text-right text-xl">Total: {totalPrice} kr</div>

            {/* Betal knap */}
            <div className="mt-8 text-center">
              <Link href="/payment" className="bg-[#F27F3D] text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out inline-block">
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
