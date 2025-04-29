import ProductsList from "./ProductsList";
import CardBox from "@/app/components/CardBox";

const ProductsMain = ({ data, list, setList }) => {
  return (
    <div className="grid grid-cols-4">
      <ProductsList data={data} list={list} setList={setList} />

      <div className="p-5 -mt-37">
        <CardBox />
      </div>
    </div>
  );
};

export default ProductsMain;
