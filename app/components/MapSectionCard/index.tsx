"use client"
import React from 'react';

export default function WorldMapSection() {
  return (
    <div className="relative flex justify-center items-center shadow-lg bg-white mt-20 max-w-[1000px] mx-auto">
      {/* Map Image */}
      <img
        src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map.svg"
        alt="World Map"
        className="w-[700px] h-[500px]"
      />

      {/* Dots for Locations */}
      <div className="absolute top-[32%] left-[35%] w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[28%] left-[45%] w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[50%] left-[58%] w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[40%] left-[65%] w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[72%] left-[75%] w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute top-[60%] left-[50%] w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>

      {/* Button */}
      <div className="absolute top-8 right-10">
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm">
          Connect Us
        </button>
      </div>
    </div>
  );
}
