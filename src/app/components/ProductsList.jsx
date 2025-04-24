import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
const ProductsList = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();

  return (
    <div className="col-span-3">
      <ul className="grid grid-cols-3 gap-6 ">
        {products.products.map((item) => {
          return (
            <Link href={`/products/${item.id}`}>
              <li className="bg-gray-300 shadow-2xl rounded-2xl" key={item.id}>
                <img className="bg-white w-full h-50" src={item.images[0]} alt="" />
                <div className="p-4 ">
                  <p>{item.title}</p>
                  <p className="font-bold">{`${item.price} kr.`}</p>
                  <button className="bg-orange-500 text-white rounded-2xl p-2 ">
                    <IoCartOutline size={40} />
                  </button>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
