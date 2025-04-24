import React from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="grid grid-cols-subgrid" style={{ gridColumn: "full-bleed" }}>
      <div className="grid grid-cols-[auto_1fr_auto] items-center py-4" style={{ gridColumn: "content" }}>
        {/* Left: Logo */}
        <div className="flex items-center text-orange-500 text-4xl font-bold whitespace-nowrap">
          <span>B</span>
          <span className="text-orange-500 text-x4 font-semibold">uzz</span>
          <span className="flex items-center text-orange-500 text-4xl font-bold whitespace-nowrap">B</span>
          <span className="text-orange-500 text-x4 font-semibold">asket</span>
        </div>

        {/* Center: Product */}
        <div className="flex justify-center">
          <span className="text-3xl font-bold text-gray-900">Product</span>
        </div>

        {/* Right: Cart */}
        <div className="flex justify-end text-orange-500 text-3xl ">
          <Link href="/cart">
            <IoCartOutline className="hover:scale-110 transition-transform duration-200 cursor-pointer text-5xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
