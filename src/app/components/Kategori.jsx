"use client";
import { useRouter } from "next/navigation";

const Kategori = ({ data }) => {
  const router = useRouter();

  function changeFilter(e) {
    router.push(`/products?category=${e.target.value}`);
  }
  return (
    <form action="/products">
      <select onChange={changeFilter} name="category" id="category-select">
        <option value="">alle</option>
        {data.map((cat) => {
          return (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Kategori;
