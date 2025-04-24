"use client";
import SingleButton from "./SingleViewButton";
const SingleText = ({ title, brand, category, description, price }) => {
  return (
    <div className="mt-25 md:ml-0 md:mr-auto p-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="md:w-1/3 ml-0">
          <div className="p-6">
            <h1 className="text-3xl text-gray-800 font-bold mb-4"> {title}</h1>
            <h2 className="text-gray-700 mb-4">{brand}</h2>
            <p className="text-gray-500 mb-4">{category}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <h3 className="text-gray-800  mb-4">{price}</h3>
            <div className="mt-4 p-4">
              <SingleButton label="Tilføj til kurven" />
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default SingleText;
