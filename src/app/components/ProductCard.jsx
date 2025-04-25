import Link from "next/link";
const ProductCard = (props) => {
  return (
    <li className="bg-gray-300 shadow-2xl rounded-2xl" key={props.id}>
      <Link href={`/products/${props.id}`}>
        <img className="bg-white w-full h-50" src={props.img} alt="" />
        <div className="p-4 ">
          <div className="flex justify-between">
            <p>{props.title}</p>
            <p>R: {props.rating}</p>
          </div>
          <div className="flex">
            <p className="font-bold text-red-900">{`${props.discount} kr.`}</p>
            <p className="font-bold">{`${props.price} kr.`}</p>
          </div>

          <button className="bg-orange-500 text-white rounded-2xl p-2 ">buton</button>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
