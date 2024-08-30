import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

export default function Showcase() {
  return (
    <div
      className="container mt-[15rem]"
      style={{
        background:
          'linear-gradient(180deg, rgba(243, 246, 253, 0.7) 0%, rgba(243, 246, 253, 0) 86.26%)',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col pl-[15rem] w-[30rem] mt-16">
          <p className="text-blue-600 uppercase tracking-widest text-xs mb-2">
            Projects
          </p>
          <h2 className="text-4xl font-bold w-[17rem] text-gray-900 mb-6">
            Showcase of our recognized work
          </h2>
          <p className="text-gray-600 text-sm mb-8 w-[18rem]">
            Our collaborative approach ensures that we truly understand our
            clients' unique requirements and challenges.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              Managed Services and Products
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              Flexibility and Adaptability
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              Competitive Advantage
            </li>
          </ul>
        </div>

        {/* Right Section with Swiper */}
        <div className="swiper-container mt-16">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            className="w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg h-[400px] w-full">
                <div className="relative h-full w-full transition-transform duration-300 hover:scale-110">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png"
                    alt="E-commerce platform development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"></div>
                  <div className="absolute top-4 left-4 text-black">
                    <h3 className="text-2xl font-semibold">
                      Software as a Service integration
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg h-[400px] w-full">
                <div className="relative h-full w-full transition-transform duration-300 hover:scale-110">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-3.png"
                    alt="Software as a Service integration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"></div>
                  <div className="absolute top-4 left-4 text-black">
                    <h3 className="text-2xl font-semibold">
                      E-commerce platform development
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg h-[400px] w-full">
                <div className="relative h-full w-full transition-transform duration-300 hover:scale-110">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-5-new.png"
                    alt="Mobile Platform Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"></div>
                  <div className="absolute top-4 left-4 text-black">
                    <h3 className="text-2xl font-semibold">
                      Mobile Platform Development
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg h-[400px] w-full">
                <div className="relative h-full w-full transition-transform duration-300 hover:scale-110">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-6-new.png"
                    alt="Data Analytics and Visualization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0"></div>
                  <div className="absolute top-4 left-4 text-black">
                    <h3 className="text-2xl font-semibold">
                      Data Analytics and Visualization
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
