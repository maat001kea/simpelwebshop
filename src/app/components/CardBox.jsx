"use client";
import SingleButton from "./SingleViewButton";
const CardBox = () => {
  return (
    <div className="mt-32  md:max-w-lg lg:max-w-xl border-2 border-gray-300 rounded-lg p-6 mb-4 space-y-4">
      <div>
        <ul className="color-grey">buying product 1</ul>
        <ul className="color-grey">buying product 2</ul>
        <div className="mt-4 ">
          <SingleButton label="Betal nu" />
        </div>
      </div>
    </div>
  );
};

export default CardBox;
