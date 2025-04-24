"use client";
import React from "react";
import ThumbnailImages from "./ThumbnailImages";

import pinkBrush from "@/app/assets/pinkbrush.png";
import brown from "@/app/assets/brown.png";
import beige from "@/app/assets/beige.png";

const thumbnailImages = [pinkBrush, brown, beige];

const SingleViewData = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto md:ml-0 md:mr-auto mt-20">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side - image viewer */}
        <div className="md:w-1/1 ml-0">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <ThumbnailImages images={thumbnailImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleViewData;
