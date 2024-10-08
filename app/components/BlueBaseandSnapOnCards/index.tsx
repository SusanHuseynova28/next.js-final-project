import React from "react";

export default function BluebaseandSnaponCards() {
  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative bg-[#E7EEFF] p-6 rounded-lg shadow-md w-full lg:w-[34rem] h-auto lg:h-[37rem]">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg"
              alt="Bluebase"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-6 lg:mt-12">
            <p className="text-xs text-blue-600">WEB DEVELOPMENT</p>
            <h2 className="text-lg lg:text-xl font-bold mt-2 hover:text-blue-700 cursor-pointer">
              Bluebase launches Tap to Pay on smartphone for international and
              domestic business
            </h2>
            <p className="text-gray-600 mt-2">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="flex items-center mr-4 mb-2">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Collaboration Tools</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Requirement</span>
            </div>
          </div>
          <div className="flex flex-wrap mt-2">
            <div className="flex items-center mr-4 mb-2">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Smart Reminders</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Task Management</span>
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
            <button className="bg-blue-600 text-white hover:bg-black w-[3rem] h-[3rem] text-2xl rounded-full">
              ↗
            </button>
          </div>
        </div>

        <div className="relative bg-[#E7EEFF] p-6 rounded-lg shadow-md w-full lg:w-[34rem] h-auto lg:h-[37rem]">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg"
              alt="Snap-on"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-6 lg:mt-12">
            <p className="text-xs text-blue-600">CLOUD COMPUTING</p>
            <h2 className="text-lg lg:text-xl font-bold mt-2 hover:text-blue-700 cursor-pointer">
              Google Bard launches in EU, overcoming data privacy concerns in
              the region
            </h2>
            <p className="text-gray-600 mt-2">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="flex items-center mr-4 mb-2">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Collaboration Tools</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Requirement</span>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Smart Reminders</span>
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
            <button className="bg-blue-600 text-white hover:bg-black w-[3rem] h-[3rem] text-2xl rounded-full">
              ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
