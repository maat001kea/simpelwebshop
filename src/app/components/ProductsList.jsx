import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <div className="col-span-3">
      <ul className="grid grid-cols-3 gap-6 ">
        {data.map((item) => {
          return <ProductCard key={item.id} id={item.id} title={item.title} rating={item.rating} price={item.price} discount={item.discountPercentage} img={item.images[0]} />;
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
