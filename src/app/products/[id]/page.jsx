// // src/app/products/[id]/page.jsx
import React from "react";
import SingleViewData from "@/app/components/SingleViewData";
import SingleText from "@/app/components/SingleText";
import RatingContainer from "@/app/components/RatingContainer";
import CardBox from "@/app/components/CardBox";

export default async function Page({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  console.log(data);

  return (
    <main>
      <div className="flex flex-row gap-2">
        <SingleViewData />
        <SingleText />
        <CardBox />
      </div>
      <div>
        <RatingContainer />
      </div>
    </main>
  );
}
