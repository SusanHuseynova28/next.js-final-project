"use client";
import React, { useState, useEffect } from 'react';

export default function BlogCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative bg-[#E7EEFF] p-6 rounded-lg shadow-md w-full md:w-[34rem] h-auto md:h-[37rem]">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg"
              alt="Bluebase"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-12">
            <p className="text-xs text-blue-600">WEB DEVELOPMENT</p>
            <h2 className="text-xl font-bold mt-2 hover:text-blue-600 cursor-pointer">
              Bluebase launches Tap to Pay on smartphone for international and domestic business
            </h2>
            <p className="text-gray-600 mt-2">
              Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.
            </p>
          </div>
          <div className="flex mt-4 flex-wrap">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Collaboration Tools</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Requirement</span>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Smart Reminders</span>
            </div>
            <div className="flex items-center ml-4">
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

        {/* Card 2 with Skeleton Loader */}
        <div className="relative bg-[#E7EEFF] w-full md:w-[34rem] h-auto md:h-[37rem] p-6 rounded-lg shadow-md">
          {loading ? (
            <div className="animate-pulse">
              <div className="w-full h-48 bg-gray-300 rounded-lg mb-6"></div>
              <div className="h-4 bg-gray-300 rounded-full w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded-full w-2/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded-full w-full mb-4"></div>
              <div className="h-4 bg-gray-300 rounded-full w-5/6 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded-full w-3/4 mb-4"></div>
              <div className="absolute bottom-6 right-6">
                <div className="bg-gray-300 rounded-full w-[3rem] h-[3rem]"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-hidden">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg"
                  alt="Snap-on"
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="mt-12">
                <p className="text-xs text-blue-600">CLOUD COMPUTING</p>
                <h2 className="text-xl font-bold mt-2 hover:text-blue-600 cursor-pointer">
                  Google Bard launches in EU, overcoming data privacy concerns in the region
                </h2>
                <p className="text-gray-600 mt-2">
                  Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.
                </p>
              </div>
              <div className="flex mt-4 flex-wrap">
                <div className="flex items-center">
                  <div className="text-blue-600 mr-2">&#10003;</div>
                  <span>Collaboration Tools</span>
                </div>
                <div className="flex items-center ml-4">
                  <div className="text-blue-600 mr-2">&#10003;</div>
                  <span>Requirement</span>
                </div>
              </div>
              <div className="flex mt-2 flex-wrap">
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
            </>
          )}
        </div>

        {/* Card 3 */}
        <div className="relative bg-[#E7EEFF] w-full md:w-[34rem] h-auto md:h-[37rem] p-6 rounded-lg shadow-md">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-4.jpg"
              alt="Tech"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-12">
            <p className="text-xs text-blue-600">TECHNOLOGY</p>
            <h2 className="text-xl font-bold mt-2 hover:text-blue-600 cursor-pointer">
              Emerging tech trends to watch in 2024: AI, 5G, and more
            </h2>
            <p className="text-gray-600 mt-2">
              Discover the latest advancements in AI, 5G, and other technologies set to transform industries in the coming year.
            </p>
          </div>
          <div className="flex mt-4 flex-wrap">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Innovation</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Research</span>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap">
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

        {/* Card 4 */}
        <div className="relative bg-[#E7EEFF] w-full md:w-[34rem] h-auto md:h-[37rem] p-6 rounded-lg shadow-md">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-5.jpg"
              alt="AI"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-12">
            <p className="text-xs text-blue-600">ARTIFICIAL INTELLIGENCE</p>
            <h2 className="text-xl font-bold mt-2 hover:text-blue-600 cursor-pointer">
              The impact of AI on businesses: Opportunities and challenges
            </h2>
            <p className="text-gray-600 mt-2">
              AI is reshaping the business landscape, offering new opportunities but also posing significant challenges.
            </p>
          </div>
          <div className="flex mt-4 flex-wrap">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>AI Tools</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Data Management</span>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap">
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

        {/* Card 5 */}
        <div className="relative bg-[#E7EEFF] w-full md:w-[34rem] h-auto md:h-[37rem] p-6 rounded-lg shadow-md">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-6.jpg"
              alt="Finance"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-12">
            <p className="text-xs text-blue-600">FINANCE</p>
            <h2 className="text-xl font-bold mt-2 hover:text-blue-600 cursor-pointer">
              How Fintech is disrupting traditional banking: Trends and insights
            </h2>
            <p className="text-gray-600 mt-2">
              Explore the trends in Fintech that are changing the way we think about banking, investments, and financial management.
            </p>
          </div>
          <div className="flex mt-4 flex-wrap">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Financial Planning</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Investment Tools</span>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap">
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

        {/* Card 6 */}
        <div className="relative bg-[#E7EEFF] w-full md:w-[34rem] h-auto md:h-[37rem] p-6 rounded-lg shadow-md">
          <div className="overflow-hidden">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-7.jpg"
              alt="Health"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="mt-12">
            <p className="text-xs text-blue-600">HEALTHCARE</p>
            <h2 className="text-xl font-bold mt-2 hover:text-blue-600 cursor-pointer">
              Digital health innovations that are improving patient outcomes
            </h2>
            <p className="text-gray-600 mt-2">
              Digital health technologies are transforming patient care by providing new ways to monitor, diagnose, and treat conditions.
            </p>
          </div>
          <div className="flex mt-4 flex-wrap">
            <div className="flex items-center">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Healthcare Tools</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="text-blue-600 mr-2">&#10003;</div>
              <span>Patient Management</span>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap">
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
