"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hent alle produkter fra API
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Produkter</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            {/* BILLEDE */}
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded mb-2" />

            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600">Pris: {product.price} kr</p>

            <Link href={`/products/${product.id}`} className="text-orange-500 underline mt-2 inline-block">
              Se mere
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
