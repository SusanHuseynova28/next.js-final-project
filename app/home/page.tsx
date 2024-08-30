"use client"
import { useState, useEffect } from "react";
import Header from "../features/header/page";
import ScrollingCards from "../components/Cards";
import CardModal from "../components/CardModal";
import ServicesSection from "../components/ServicesCards";
import CaseCard from "../components/CaseCard";
import ConsulCard from "../components/ConsulCard";
import SwipperCard from "../components/SwipperCard";
import Showcase from "../components/ShowCaseSwipper";
import NewsArticleCard from "../components/ArticleCard";
import BluebaseandSnaponCards from "../components/BlueBaseandSnapOnCards";
import ProductPromotionSection from "../components/ProductSectionCard";
import Form from "../components/Form";
import Footer from "../features/Footer/page";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Header />
      <div
        className="py-16 px-8 w-full h-[42rem] relative flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(243, 246, 253, 0.7) 0%, rgba(243, 246, 253, 0) 86.26%)",
        }}
      >
        <div className={`container justify-around p-32 flex flex-col lg:flex-row items-center gap-2 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col gap-4 justify-center">
            <p className="text-blue-500 tracking-wide uppercase text-xs">
              E m p o w e r m e n t
            </p>
            <h1 className="text-2xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4 w-[38rem]">
              Seamless IT for your business, boosting your growth.
            </h1>
            <p className="text-gray-600 mb-8 w-[25rem]">
              We provide the expertise and support to propel your business
              forward in the digital landscape.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white text-sm px-6 py-3 rounded-full hover:bg-black transition"
              >
                Learn More
              </a>
              <a
                href="#"
                className=" text-blue-700 text-sm px-6 py-3 rounded-full bg-gray-300 hover:bg-blue-700 hover:text-white transition"
              >
                Let's Talk <span className="inline-block">↗</span>
              </a>
            </div>
          </div>

          {/* Image and Info Section */}
          <div className="lg:w-1/2 flex flex-col lg:flex-col items-center justify-center lg:justify-end space-y-6 lg:space-y-0 lg:space-x-6 mt-4">
            <div className="relative flex flex-col items-center lg:items-start space-y-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg1-1-1.png"
                alt="IT Specialist"
                className={`rounded-lg shadow-lg w-full lg:w-[550px] h-[300px] object-cover transition-transform duration-1000 ${animate ? 'scale-100' : 'scale-95 opacity-0'}`}
              />

              {/* Text Overlay */}
              <div className="absolute top-16 left-0 w-full h-full flex items-center justify-center lg:justify-start p-4">
                <div className="text-white text-center lg:text-left flex justify-center items-center gap-4 pl-4 mt-4">
                  <img
                    className="rounded-full"
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/icon1-1.svg"
                    alt=""
                  />
                  <h2 className="text-4xl text-black text-black">+8</h2>
                  <p className="text-black w-[2rem]">years experince</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 pr-6">
              <div
                className={`bg-white p-4 text-center shadow-lg rounded-lg text-center lg:text-left mt-4 w-[20rem] h-[8rem] transition-transform duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              >
                <div className="flex items-center space-x-2 mt-2 text-center justify-center mt-10">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/small-img-4-1.png"
                    alt="Expert 1"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/small-img-1-1.png"
                    alt="Expert 1"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/small-img-2-1.png"
                    alt="Expert 1"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/small-img-3-1.png"
                    alt="Expert 1"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div className="text-gray-600">
                    <p>Meet Our Experts</p>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white p-6 w-[14rem] h-[8rem] shadow-lg text-center mt-4 rounded-lg transition-transform duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              >
                <div className="flex items-center gap-4 justify-center">
                  <div className="flex items-center">
                    <div className="flex-flex-col mt-4">
                      <p className="text-sm w-16">Verify By</p>
                      <div className="">
                        <img
                          src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/icon2-1.svg"
                          alt="Google"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-yellow-500 text-lg ml-2">★★★★★</div>
                    <div className="text-gray-600">
                      <p className="text-sm">3245 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollingCards />
        <CardModal />
        <ServicesSection/>
        <CaseCard/>
        <ConsulCard/>
        <SwipperCard/>
        <Showcase/>
        < NewsArticleCard />
        <BluebaseandSnaponCards/>
        <ProductPromotionSection/>
        <Form/>
        <Footer/>
      </div>
    </>
  );
}
