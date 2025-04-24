// // src/app/products/[id]/page.jsx
import React from "react";
import SingleViewData from "@/app/components/SingleViewData";
import SingleText from "@/app/components/SingleText";

export default function Page() {
  return (
    <main>
      <div className="flex flex-row gap-2">
        <SingleViewData />
        <SingleText />
      </div>
    </main>
  );
}
