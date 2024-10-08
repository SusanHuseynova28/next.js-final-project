import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function SwipperCard() {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 h-auto lg:h-[20rem]">
      <div
        className="absolute inset-y-0 left-[-1rem] lg:left-[-3rem] flex items-center"
        style={{ top: "40%" }}
      >
        <div className="swiper-button-prev flex items-center justify-center p-3 lg:p-6 w-[2.5rem] lg:w-[3rem] h-[2.5rem] lg:h-[3rem] bg-blue-50 rounded-full shadow-lg cursor-pointer">
          <FiArrowLeft className="text-blue-400 text-xs" />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="relative"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center text-white p-6 lg:p-14 w-full h-[24rem] lg:h-[28rem] rounded-lg relative"
            style={{
              backgroundColor: "#1C1C1C",
              backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')`,
            }}
          >
            <div className="absolute mt-[1rem]">
              <span className="bg-blue-600 text-white font-bold px-4 py-2 lg:px-4 lg:py-3 rounded-lg">
                Linked in
              </span>
            </div>
            <h2 className="text-xl lg:text-3xl font-semibold mt-10 lg:mt-20">
              Platform helped me to increase my sales and revenue generated by
              bluebase technologies
            </h2>
            <p className="text-gray-400 mt-6 lg:mt-10 w-full lg:w-[55rem] text-base lg:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sensitive data is of utmost importance.
            </p>
            <div className="flex mt-6 lg:mt-10">
              <img
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-4"
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/testimonial-1-1.jpg"
                alt="User"
              />
              <div>
                <p className="font-bold">Serana Belluci</p>
                <p className="text-gray-400 text-sm">Product Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center text-white p-6 lg:p-14 w-full h-[24rem] lg:h-[28rem] rounded-lg relative"
            style={{
              backgroundColor: "#1C1C1C",
              backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')`,
            }}
          >
            <div className="absolute mt-[1rem]">
              <span className="bg-blue-600 text-white px-4 py-2 lg:px-4 lg:py-3 rounded-lg font-bold">
                Linked in
              </span>
            </div>
            <h2 className="text-xl lg:text-3xl font-semibold mt-10 lg:mt-20">
              Bluebase gives the best service and top customer support. Really
              like to have more projects with you
            </h2>
            <p className="text-gray-400 mt-6 lg:mt-12 w-full lg:w-[55rem] text-base lg:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sensitive data is of utmost importance.
            </p>
            <div className="flex mt-6 lg:mt-10">
              <img
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-4"
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/testimonial-2-1.jpeg"
                alt="User"
              />
              <div>
                <p className="font-bold">Megan Clarke</p>
                <p className="text-gray-400 text-sm">CEO, Sanlab</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center text-white p-6 lg:p-14 w-full h-[24rem] lg:h-[28rem] rounded-lg relative"
            style={{
              backgroundColor: "#1C1C1C",
              backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-3-1.svg')`,
            }}
          >
            <div className="absolute mt-[1rem]">
              <span className="bg-blue-600 text-white font-bold px-4 py-2 lg:px-4 lg:py-3 rounded-lg">
                Linked in
              </span>
            </div>
            <h2 className="text-xl lg:text-3xl font-semibold mt-10 lg:mt-20">
              We’ve been using Bluebase for a few years. It is very simple and
              easy to approach the team and management
            </h2>
            <p className="text-gray-400 mt-6 lg:mt-12 w-full lg:w-[55rem] text-base lg:text-xl">
              One aspect that sets IT Services apart is their proactive approach
              to security. In today's digital landscape, protecting our
              sensitive data is of utmost importance.
            </p>
            <div className="flex mt-6 lg:mt-10">
              <img
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-4"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User"
              />
              <div>
                <p className="font-bold">Rachel Olsem</p>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        className="absolute inset-y-0 right-[-1rem] lg:right-[-3rem] flex items-center"
        style={{ top: "40%" }}
      >
        <div className="swiper-button-next flex items-center justify-center p-3 lg:p-6 w-[2.5rem] lg:w-[3rem] h-[2.5rem] lg:h-[3rem] bg-blue-50 rounded-full shadow-lg cursor-pointer">
          <FiArrowRight className="text-blue-600 text-xs" />
        </div>
      </div>
    </div>
  );
}
