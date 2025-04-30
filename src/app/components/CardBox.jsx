"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";
import { IoTrashOutline } from "react-icons/io5";

const CardBox = () => {
  const [loadingId, setLoadingId] = useState(null); // For spinner på + knap
  const [paying, setPaying] = useState(false); // For spinner på "Betal nu"

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQty = useCartStore((state) => state.updateQty);

  // Udregn totalpris
  const totalPrice = cart
    .reduce((sum, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0);
      return sum + itemTotal;
    }, 0)
    .toFixed(2);

  // Tilføj én mere af produktet med rabatpris
  const handleAdd = (item) => {
    setLoadingId(item.id);

    // ✅ Beregn rabatpris
    const discountAmount = (item.price * item.discountPercentage) / 100;
    const discountedPrice = item.price - discountAmount;

    setTimeout(() => {
      addToCart({
        id: item.id,
        title: item.title,
        price: parseFloat(discountedPrice.toFixed(2)), // 👈 brug rabatpris
        quantity: 1,
        discountPercentage: item.discountPercentage, // behøver denne for flere tilføjelser
      });
      setLoadingId(null);
    }, 400);
  };

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      window.location.href = "/payment";
    }, 700);
  };

  return (
    <div className="sticky top-38 mt-30 flex justify-center px-4">
      <div className="border-2 border-gray-300 rounded-2xl p-10 bg-white shadow-2xl max-w-6xl w-full">
        <h1 className="text-4xl font-semibold text-gray-600 mb-8 text-center">Betaling</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Kurven er tom.</p>
        ) : (
          <>
            <ul className="text-gray-800 divide-y divide-gray-300">
              {cart.map((item) => (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium">{item.title}</span>

                    {/* + / - knapper */}
                    <div className="flex items-center mt-2 border-2 border-yellow-400 rounded-full px-4 py-1 gap-4 w-36 justify-center">
                      {item.quantity > 1 ? (
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} className="text-xl text-gray-700 font-bold">
                          -
                        </button>
                      ) : (
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          <IoTrashOutline size={20} />
                        </button>
                      )}
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button onClick={() => handleAdd(item)} className="text-xl text-gray-700 font-bold" disabled={loadingId === item.id}>
                        {loadingId === item.id ? <div className="w-4 h-4 border-2 border-gray-700 border-t-transparent rounded-full animate-spin" /> : "+"}
                      </button>
                    </div>
                  </div>

                  {/* Pris pr. produkt */}
                  <div className="font-semibold whitespace-nowrap">{(item.price * item.quantity).toFixed(2)} kr</div>
                </li>
              ))}
            </ul>

            {/* Totalpris */}
            <div className="mt-8 font-bold text-right text-2xl">Total: {totalPrice} kr</div>

            {/* Betal nu knap */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-6">
              <button onClick={handlePay} disabled={paying} className="bg-[#F27F3D] text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out flex items-center gap-2">
                {paying ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Betal nu"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardBox;
