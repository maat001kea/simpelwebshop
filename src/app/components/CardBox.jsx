"use client";
import SingleButton from "./SingleViewButton";
const CardBox = () => {
  return (
    <div className="mt-32">
      <div className="border-2 border-gray-300 rounded-lg p-4 mb-4">
        <ul className="color-grey">buying product 12</ul>
        <ul className="color-grey">buying product 2</ul>
        <div className="mt-4 ">
          <SingleButton label="Betal nu" />
        </div>
      </div>
    </div>
  );
};

export default CardBox;
