import React from "react";

export default function StoreLocations() {
  return (
    <div
      className="bg-cover bg-[#1C1C1C] bg-no-repeat bg-center text-white py-24 px-6 w-full mx-auto h-[600px] rounded-lg mt-24 flex justify-center items-center"
      style={{
        backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')`,
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row md:space-x-12 justify-center items-center">
       
        <div className="flex-1 mb-16 md:mb-0 text-center md:text-left">
          <h2 className="text-blue-500 text-xs uppercase tracking-widest">
            Locations
          </h2>
          <h1 className="mt-4 text-4xl font-bold leading-tight w-full md:w-[20rem]">
            Visit our store all around the world
          </h1>
          <p className="mt-6 text-gray-400 w-full md:w-[19rem]">
            Our location is strategically situated at the heart of the city,
            making it an ideal destination for businesses and visitors alike.
          </p>
        </div>

       
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-row justify-center items-center w-[300px] h-[150px] ">
            <div className="bg-blue-100 text-blue-600 w-[130px] h-[60px] text-xl flex items-center justify-center rounded-full ">
              #1
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-center">
                New York, USA
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                720/5, Starc Street, North View, New York
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-row justify-center items-center w-[300px] h-[150px]">
            <div className="bg-blue-100 text-blue-600 w-[100px] h-[60px] text-xl flex items-center justify-center rounded-full ">
              #2
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-center">Edinburgh, UK</h3>
              <p className="mt-2 text-gray-600 text-center text-xs">
                5/3, Hilton Clinch, NS Bay Low, Aberdeen
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex justify-center items-center w-[300px] h-[150px]">
            <div className="bg-blue-100 text-blue-600 w-[100px] h-[60px] text-xl flex items-center justify-center rounded-full mr-4">
              #3
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-center">Cape Town, SA</h3>
              <p className="mt-2 text-gray-600 text-center text-xs">
                Marco Street, Seventh Road, Cape Town
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex  justify-center items-center w-[300px] h-[150px]">
            <div className="bg-blue-100 text-blue-600 w-[100px] h-[60px] text-xl flex items-center justify-center rounded-full mr-4">
              #4
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-center">Madras, IND</h3>
              <p className="mt-2 text-gray-600 text-center text-xs">
                3/5, Geils Street Mannady, Madras
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex  justify-center items-center w-[300px] h-[150px]">
            <div className="bg-blue-100 text-blue-600 w-[100px] h-[60px] text-xl flex items-center justify-center rounded-full mr-4">
              #5
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-center">Tokyo, JAP</h3>
              <p className="mt-2 text-gray-600 text-center text-xs">
                77, Xiong Street, Main Town, Tokyo
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex  justify-center items-center w-[300px] h-[150px]">
            <div className="bg-blue-100 text-blue-600 w-[100px] h-[60px] text-xl flex items-center justify-center rounded-full mr-4">
              #6
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-center">Canberra, AUS</h3>
              <p className="mt-2 text-gray-600 text-center text-xs">
                458, Highland Street, Sydney, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
