"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleButton from "@/app/components/SingleViewButton";

export default function ProductDetailsPage() {
  const { id } = useParams();
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
          })
        );
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">Pris: {product.price} kr</p>
      <SingleButton product={product} />
    </div>
  );
}
