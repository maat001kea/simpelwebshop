"use client";
import Kategori from "./Kategori";
import ProductsMain from "./ProductsMain";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Products = ({ datacat, dataprod, activeCat }) => {
  const router = useRouter();
  const [list, setList] = useState(dataprod.products);

  function sortPrice(type) {
    const params = activeCat ? `category=${activeCat}` : "";
    type ? setList((prev) => prev.toSorted((b, a) => a[type] - b[type])) : setList((prev) => prev.toSorted((a, b) => a["id"] - b["id"]));
    router.push(`?${params}&sort=${type}`);
  }

  return (
    <div>
      <div className="flex">
        <Kategori data={datacat} />
        <div>
          <button onClick={() => sortPrice("price")}>Price</button>
          <button onClick={() => sortPrice("rating")}>Rating</button>
        </div>
      </div>
      <ProductsMain data={dataprod.products} list={list} setList={setList} />
    </div>
  );
};

export default Products;
