"use client"; // Sørger for at denne komponent kun kører på klienten

import { useCartStore } from "@/app/store/cartStore"; // Henter Zustand store
import Link from "next/link"; // Next.js Link til navigation
import { IoTrashOutline } from "react-icons/io5"; // Skraldespand ikon fra react-icons

const CardBox = () => {
  // Henter funktioner fra zustand store

  const cart = useCartStore((state) => state.cart);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQty = useCartStore((state) => state.updateQty); // Opdater antal direkte

  // Udregner den samlede pris baseret på alle produkter i kurven
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0).toFixed(2);

  console.log(cart);

  return (
    <div className="sticky top-38 mt-30 flex justify-center px-4">
      <div className="border-2 border-gray-300 rounded-2xl p-10 bg-white shadow-2xl max-w-6xl w-full">
        {/* Overskrift */}
        <h1 className="text-4xl font-semibold text-gray-600 mb-8 text-center">Betaling</h1>

        {/* Hvis kurven er tom, vis besked */}
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Kurven er tom.</p>
        ) : (
          <>
            {/* Liste over produkter i kurven */}
            <ul className="text-gray-800 divide-y divide-gray-300">
              {cart.map((item) => (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    {/* Produktnavn */}
                    <span className="font-medium">{item.title}</span>

                    {/* + / - knapper */}
                    <div className="flex items-center mt-2 border-2 border-yellow-400 rounded-full px-4 py-1 gap-4 w-36 justify-center">
                      {/* Minus-knap eller skraldespand baseret på antal */}
                      {item.quantity > 1 ? (
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} className="text-xl text-gray-700 font-bold">
                          -
                        </button>
                      ) : (
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={20} />
                        </button>
                      )}

                      {/* Antal varer */}
                      <span className="text-lg font-semibold">{item.quantity}</span>

                      {/* Plus-knap til at tilføje 1 stk */}
                      <button
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            title: item.title,
                            price: item.price,
                            quantity: 1, // Tilføjer én mere
                          })
                        }
                        className="text-xl text-gray-700 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Viser total pris for denne vare */}
                  <div className="font-semibold whitespace-nowrap">${(item.price * item.quantity).toFixed(2)} </div>
                </li>
              ))}
            </ul>

            {/* Viser samlet pris for hele kurven */}
            <div className="mt-8 font-bold text-right text-2xl">Total: ${totalPrice} </div>

            {/* Betal knap */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-6">
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
