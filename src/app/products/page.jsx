import Kategori from "../components/Kategori";
import ProductsMain from "../components/ProductsMain";

export default async function Page() {
  const data = await fetch("https://dummyjson.com/products/categories");
  const categories = await data.json();
  return (
    <main>
      <Kategori data={categories} />

      <ProductsMain />
    </main>
  );
}
