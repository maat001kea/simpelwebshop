"use client";
const SingleButton = ({ label = "Click me" }) => {
  return (
    <div>
      <button className="bg-[#F27F3D] rounded-lg text-white font-bold py-2 px-4  hover:bg-orange-600 transition duration-300 ease-in-out"> {label}</button>
    </div>
  );
};

export default SingleButton;
