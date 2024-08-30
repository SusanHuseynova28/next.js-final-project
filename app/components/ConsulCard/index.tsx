import React from "react";

export default function ConsulCard() {
  return (
    <section className="bg-white mx-auto flex justify-center items-center w-[90%] h-[40rem]">
      <div className="container  px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2  ">
       
        <div className="pl-24">
          <p className="text-blue-600 uppercase tracking-widest text-xs  mb-2">
            Consulting Excellence
          </p>
          <h2 className="text-5xl w-[24rem] font-bold text-gray-900 mb-6">
            Best pathway to our clients.
          </h2>
          <p className="text-gray-600 mb-8 w-[23rem]">
            Our consulting process begins with a thorough assessment of your
            current IT infrastructure, workflows, and pain points.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 text-lg mr-2 ">✔</span>
              24/7 Full Service Support
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              Immediate Response
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              Easy to Approach us
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 justify-center ">
          <div className="bg-[#F3F6FD] p-6 h-[9rem] w-[20rem] rounded-lg shadow-sm mt-32">
            <h3 className="text-sm font-bold text-gray-900">
              Tailored Solutions
            </h3>
            <p className="text-gray-600 mt-4">
              Develop IT solutions based on the analysis phase.
            </p>
          </div>
          <div className="relative ">
          <div className="space-y-12">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 font-bold rounded-full flex items-center justify-center">
                  01
                  
                </div>
                
              </div>
              <div className="w-full">
                <div className="bg-[#F3F6FD] p-6 rounded-lg shadow-sm w-[18rem]">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    Discovery and Analysis
                  </h3>
                  <p className="text-gray-600 mt-4">
                    Perform an analysis of the client's existing IT systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 font-bold rounded-full flex items-center justify-center">
                  02
                </div>
              </div>
              <div className="w-full"></div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 font-bold rounded-full flex items-center justify-center">
                  03
                </div>
              </div>
              <div className="w-full">
                <div className="bg-[#F3F6FD] p-6 rounded-lg shadow-sm w-[18rem]">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    Deployment and Support
                  </h3>
                  <p className="text-gray-600 mt-4">
                    Regularly communicate with our client to address any
                    concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-6 flex items-center justify-center"></div>
        </div>
        </div>

        
      </div>
    </section>
  );
}
