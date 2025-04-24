"use client";
import React, { useState } from "react";
import Image from "next/image";

const ThumbnailImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="rounded-xl overflow-hidden mb-12">
        <Image src={activeImage} alt="Product" width={600} height={600} className="object-cover w-full h-full" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 justify-center mb-6">
        {images.map((img, index) => (
          <div key={index} onClick={() => setActiveImage(img)} className={`cursor-pointer rounded-lg overflow-hidden border-2 ${img === activeImage ? "border-orange-500" : "border-transparent"}`}>
            <Image src={img} alt="Thumbnail" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailImages;
