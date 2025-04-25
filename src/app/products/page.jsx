import Kategori from "../components/Kategori";
import ProductsMain from "../components/ProductsMain";

export default async function Page({ searchParams }) {
  const { category } = await searchParams;

  console.log("search: ", category);

  const datacat = await fetch("https://dummyjson.com/products/categories");
  const categories = await datacat.json();

  const data = category ? await fetch(`https://dummyjson.com/products/category/${category}?limit=50`) : await fetch("https://dummyjson.com/products?limit=50");
  const products = await data.json();
  return (
    <main>
      <Kategori data={categories} />

      <ProductsMain data={products} />
    </main>
  );
}
