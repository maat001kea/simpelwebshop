"use client";

import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";

const ProductCard = (props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <li className="bg-gray-300 shadow-2xl rounded-2xl">
      <Link href={`/products/${props.id}`}>
        <img className="bg-white w-full h-50" src={props.img} alt={props.title} />
        <div className="p-4">
          <div className="flex justify-between">
            <p>{props.title}</p>
            <p>R: {props.rating}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-bold text-red-900">{`${props.discount} kr.`}</p>
            <p className="font-bold">{`${props.price} kr.`}</p>
          </div>
        </div>
      </Link>

      {/* Læg i kurv-knappen udenfor Link */}
      <div className="p-4">
        <button
          onClick={() =>
            addToCart({
              id: props.id,
              title: props.title,
              price: props.price,
              quantity: 1, // ✅ quantity ikke qty
            })
          }
          className="bg-[#F27F3D] rounded-lg text-white font-bold py-2 px-4 hover:bg-orange-600 transition duration-300 ease-in-out w-full"
        >
          Læg i kurv
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
