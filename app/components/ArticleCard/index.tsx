import React from "react";

export default function NewsArticleCard() {
  return (
    <>
      <div className="bg-white p-6 lg:p-10 flex flex-col lg:flex-row w-[90%] lg:w-[70%] justify-center items-center mx-auto mt-[7rem]">
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-blue-500 uppercase text-xs mb-2">
            Interesting Articles
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 lg:w-[35rem]">
            Read daily news about startup companies
          </h1>
        </div>

        <div className="mt-6 lg:mt-10 flex">
          <div className="">
            <p className="text-gray-500 text-sm lg:text-base w-full lg:w-[35rem] mb-6">
              In today’s rapidly evolving world, technology is constantly
              shaping the way we live and interact. From artificial intelligence
              and automation to virtual reality, the pace of technological
              advancements is staggering.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white rounded-lg p-4 lg:p-6 flex flex-col lg:flex-row w-[90%] lg:w-[74%] mx-auto">
        <div className="flex-1 mr-0 lg:mr-4 mb-4 lg:mb-0 overflow-hidden">
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-1.png"
            alt="The North Face"
            className="w-full h-[200px] lg:h-full object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>

        <div className="flex-1 p-4">
          <p className="text-blue-400 text-xs uppercase mt-4">
            Mobile Development
          </p>
          <h2 className="text-xl lg:text-2xl font-bold mt-4">
            OpenAI launches new alignment division to tackle risks of
            superintelligent AI
          </h2>
          <p className="text-gray-400 mt-4 text-sm lg:text-base">
            Small UK merchants, businesses, and other enterprises can now use
            Tap to Pay on service to replace payment terminals at point of sale.
          </p>
          <hr className="border-gray-700 mb-4" />
          <ul>
            <li className="flex items-center space-x-2 mt-4">
              <span className="text-blue-400 mt-2">✔</span>
              <span>Collaboration Tools</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-400 mt-2">✔</span>
              <span>Smart Reminders</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex justify-end items-end">
          <button className="bg-blue-500 text-white hover:bg-white hover:text-black text-xl rounded-full w-[3rem] h-[3rem]">
            ↗
          </button>
        </div>
      </div>
    </>
  );
}
