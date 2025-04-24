import Image from "next/image";
import React from "react";

import image from "../assets/dummy.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="fullbleed ">
      {/* Baggrundsbillede med fullbleed */}
      <Image src={image} alt="Hero" fill className=" fullbleed" priority />

      {/* Indhold ovenpå billedet */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
        <div className="max-w-3xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">BuzzBasket</h1>
          <Button link="/products" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
