"use client";

import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";

const CardBox = () => {
  const cart = useCartStore((state) => state.cart);

  // Udregn totalpris
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-32">
      <div className="border-2 border-gray-300 rounded-lg p-6 mb-4 bg-white shadow-md">
        {/* Overskrift */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Betaling</h1>

        {/* Hvis kurven er tom */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Kurven er tom.</p>
        ) : (
          <>
            {/* Liste over produkter */}
            <ul className="text-gray-800 divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="py-2 flex justify-between">
                  <div>
                    <span className="font-medium">{item.title}</span> x {item.quantity}
                  </div>
                  <div>{item.price * item.quantity} kr</div>
                </li>
              ))}
            </ul>

            {/* Totalpris */}
            <div className="mt-4 font-bold text-right">Total: {totalPrice} kr</div>

            {/* Betal knap */}
            <div className="mt-6 text-center">
              <Link href="/checkout" className="bg-[#F27F3D] text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out inline-block">
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
