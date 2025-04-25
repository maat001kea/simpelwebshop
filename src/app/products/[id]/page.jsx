"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleButton from "@/app/components/SingleViewButton";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Hent id fra URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) =>
          setProduct({
            id: data.id,
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail,
          })
        );
    }
  }, [id]);

  // Vis loading-indikator mens produktet hentes
  if (!product) return <p className="text-center mt-20">Indlæser produkt...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto mt-20 text-center">
      {/* Produktbillede */}
      <img src={product.thumbnail} alt={product.title} className="w-full max-w-md h-64 object-contain mx-auto mb-6 rounded-lg shadow" />

      {/* Titel og pris */}
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4 text-lg">Pris: {product.price} kr</p>

      {/* Kurv-knap */}
      <div className="flex justify-center">
        <SingleButton product={product} />
      </div>
    </div>
  );
}
