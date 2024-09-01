"use client";
import React from "react";

export default function WorldMapSection() {
  return (
    <div className="relative flex justify-center items-center shadow-lg bg-white mt-20 mx-auto max-w-full lg:max-w-[1000px]">
      <img
        src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map.svg"
        alt="World Map"
        className="w-full h-auto lg:w-[700px] lg:h-[500px]"
      />

      <div className="absolute top-[35%] left-[28%] w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[28%] left-[45%] w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[45%] left-[63%] w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[35%] left-[74%] w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[72%] left-[75%] w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[60%] left-[50%] w-4 h-4 lg:w-6 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>

      <div className="absolute top-4 right-4 lg:top-8 lg:right-10">
        <button className="bg-blue-100 text-blue-700 px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm">
          Connect Us
        </button>
      </div>
    </div>
  );
}
