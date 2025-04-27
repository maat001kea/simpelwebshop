"use client";
import SingleButton from "./SingleViewButton";

const SingleText = (product) => {
  const { title, brand, category, description, price, rating } = product;

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(i < filledStars ? "⭐" : "☆");
    }

    return stars.join(" ");
  };

  return (
    <div className="mt-25 md:ml-0 md:mr-auto p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1  gap-6">
        <div className="p-6">
          <h1 className="text-3xl text-gray-800 font-bold mb-4">{title}</h1>
          <h2 className="text-gray-700 mb-4">{brand}</h2>
          <p className="text-gray-500 mb-4">{category}</p>
          {/* Description with fluid typography */}
          <p className="text-gray-700 mb-4 sm:w-full  xl:w-full">{description}</p>
          <h3 className="text-gray-800 mb-4 font-bold text-xl">{price} kr</h3>
          <h3 className="text-gray-800 mb-4">{renderStars(rating)}</h3>
          <div className="mt-4 p-4">
            <SingleButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleText;
