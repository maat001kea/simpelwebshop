import React from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="grid grid-cols-subgrid" style={{ gridColumn: "full-bleed" }}>
      <div className="flex justify-between items-center py-4" style={{ gridColumn: "content" }}>
        {/* Left: Logo */}
        <div className="flex gap-10 items-baseline">
          <div className="flex items-center text-orange-500 text-4xl font-bold whitespace-nowrap">
            <Link className="flex items-center" href="/">
              <span>B</span>
              <span className="text-orange-500 text-x4 font-semibold">uzz</span>
              <span className="flex items-center text-orange-500 text-4xl font-bold whitespace-nowrap">B</span>
              <span className="text-orange-500 text-x4 font-semibold">asket</span>
            </Link>
          </div>

          {/* Center: Product */}
          <div className="flex justify-center">
            <Link href="/products">
              <span className="text-3xl font-bold text-gray-900">Product</span>
            </Link>
          </div>
        </div>

        {/* Right: Cart */}
        <div className="flex justify-end text-orange-500 text-3xl ">
          <Link href="/payment">
            <IoCartOutline className="hover:scale-110 transition-transform duration-200 cursor-pointer text-5xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
