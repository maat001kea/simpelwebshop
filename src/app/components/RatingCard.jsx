"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// import avatar from "@/app/assets/avatar.png";
const RatingCard = ({ avatar, name, comment, date, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="max-w-md p-4 bg-white rounded-xl shadow-md space-y-4">
      <div className="flex items-center gap-4">
        {/* <img src={avatar} alt={`${avatar}'s avatar`} className="w-12 h-12 rounded-full object-cover" /> */}
        <Image src={avatar} alt={`${name}'s avatar`} width={48} height={48} className="rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <p className="text-gray-700">{comment}</p>

      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={22} className={`transition-transform duration-200 cursor-pointer ${(hovered ?? rating) > i ? "text-yellow-400" : "text-gray-300"} ${hovered === i ? "scale-125" : ""}`} onClick={() => setRating(i + 1)} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} />
        ))}
      </div>
    </div>
  );
};

export default RatingCard;
