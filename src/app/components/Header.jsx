"use client";

import React from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "@/app/store/cartStore";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-subgrid" style={{ gridColumn: "full-bleed" }}>
      <div className="flex flex-wrap sm:flex-wrap justify-between items-center py-4 px-4 sm:px-0" style={{ gridColumn: "content" }}>
        {/* Left: Logo + Product */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 w-full sm:w-auto">
          <Link href="/" className="flex items-center text-orange-500 text-5xl sm:text-6xl font-bold whitespace-nowrap">
            <span>B</span>
            <span className="text-2xl sm:text-3xl font-semibold ml-0">uzz</span>
            <span>B</span>
            <span className="text-2xl sm:text-3xl font-semibold ml-0">asket</span>
          </Link>

          <Link href="/products" className="text-xl sm:text-3xl font-bold text-gray-900">
            Product
          </Link>
        </div>

        {/* Right: Cart */}
        <div className="mt-2 sm:mt-0 text-orange-500 text-4xl sm:text-5xl relative">
          <Link href="/payment">
            <IoCartOutline className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
            <CartBadge />
          </Link>
        </div>
      </div>
    </header>
  );
};

// Badge-komponent: Viser antal varer i kurven som rød cirkel
const CartBadge = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) return null; // Vis ikke badge hvis tom

  return <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>;
};

export default Header;
