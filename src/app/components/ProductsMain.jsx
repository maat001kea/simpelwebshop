import ProductsList from "./ProductsList";
import CardBox from "@/app/components/CardBox";

const ProductsMain = ({ data }) => {
  return (
    <div className="grid grid-cols-4">
      <ProductsList data={data.products} />

      <div className="p-5 -mt-37">
        <CardBox />
      </div>
    </div>
  );
};

export default ProductsMain;
