"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ Brug Next.js Image
import { useCartStore } from "@/app/store/cartStore";

const ProductCard = (props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <li className="bg-gray-300 shadow-2xl rounded-2xl overflow-hidden">
      {/* Klikbart Link omkring billede og tekst */}
      <Link href={`/products/${props.id}`} className="block">
        <div className="bg-white w-full h-64 relative">
          <Image
            src={props.img} // ✅ Brug props.img
            alt={props.title}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 33vw" // Optimer mobil/desktop
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between">
            <p className="font-semibold">{props.title}</p>
            <p className="text-gray-600 text-sm">R: {props.rating}</p>
          </div>

          <div className="flex justify-between mt-2">
            <p className="font-bold text-red-700">{`${props.discount} kr.`}</p>
            <p className="font-bold">{`${props.price} kr.`}</p>
          </div>
        </div>
      </Link>

      {/* Læg i kurv-knappen */}
      <div className="p-4">
        <button
          onClick={() =>
            addToCart({
              id: props.id,
              title: props.title,
              price: props.price,
              quantity: 1, // ✅ quantity (ikke qty)
            })
          }
          className="bg-[#F27F3D] w-full rounded-lg text-white font-bold py-2 px-4 hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Læg i kurv
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
