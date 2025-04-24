"use client";
import SingleButton from "./SingleViewButton";
const SingleText = () => {
  return (
    <div className="mt-25 md:ml-0 md:mr-auto p-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="md:w-1/3 ml-0">
          <div className="p-6">
            <h1 className="text-3xl text-gray-800 font-bold mb-4">Product Name</h1>
            <p className="text-gray-500 mb-4">This is a detailed description of the product. It includes all the features and benefits that make this product unique and desirable.</p>
            <h2 className="text-gray-700 p-2.5">brand</h2>
            <h3 className="text-gray-700 p-2.5">Pris</h3>
            <div className="mt-4 p-4">
              <SingleButton label="Tilføj til kurv" />
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default SingleText;
