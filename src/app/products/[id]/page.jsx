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

  if (!product) return <p>Indlæser produkt...</p>;

  return (
    <div className="mt-32 text-center">
      {/* Vis thumbnail-billedet */}
      <img src={product.thumbnail} alt={product.title} className="inline-block mb-6" style={{ maxHeight: "250px" }} />

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
