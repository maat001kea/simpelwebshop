import React from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-subgrid" style={{ gridColumn: "full-bleed" }}>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center py-4 px-4 sm:px-0" style={{ gridColumn: "content" }}>
        {/* Left: Logo + Product */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 w-full sm:w-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center text-orange-500 text-4xl sm:text-4xl font-bold whitespace-nowrap">
            <span>B</span>
            <span className="text-lg sm:text-x2 font-semibold ml-1">uzz</span>
            <span>B</span>
            <span className="text-lg sm:text-x2 font-semibold ml-1">asket</span>
          </Link>

          {/* Product link */}
          <Link href="/products" className="text-xl sm:text-3xl font-bold text-gray-900">
            Product
          </Link>
        </div>

        {/* Right: Cart */}
        <div className="mt-2 sm:mt-0 text-orange-500  sm:text-xl">
          <Link href="/payment">
            <IoCartOutline className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
