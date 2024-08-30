"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMiniChevronDown, HiUser } from "react-icons/hi2";
import { FaTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail") || "";
    const type = localStorage.getItem("accountType") || "Standard Account";
    setUserEmail(email);
    setAccountType(type);
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("accountType");
    }
    router.push("/login");
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-col lg:flex-row items-center justify-around p-4 border relative w-full">
        <div className="flex flex-col lg:flex-row items-center ">
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/logo.svg"
            alt="Synck Logo"
            className="h-8 pr-8 pt-1 pl-14"
          />
          <nav className="flex flex-col lg:flex-row gap-4 lg:gap-10 pl-0 lg:pl-6 pt-4 lg:pt-2 ">
            <div
              className="relative"
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
            >
              <Link href="/home">
                <span className="text-black text-sm hover:text-blue-500 flex items-center">
                  Home <HiMiniChevronDown className="ml-1" />
                </span>
              </Link>
              {isHomeHovered && (
                <div
                  className="absolute left-0 pt-2 lg:pt-2 w-full lg:w-[230px]  rounded-lg  mt-[5px]  opacity-100 transition-opacity duration-300 z-50"
                  onClick={() => setIsHomeHovered(true)}
                  onMouseLeave={() => setIsHomeHovered(false)}
                >
                  <div className="mt-3  bg-white">
                    <Link href="/it-services">
                      <p className="p-2 hover:text-blue-500 text-sm pl-5 ">
                        IT Services
                      </p>
                    </Link>
                    <Link href="/business-consulting">
                      <p className="p-3 hover:text-blue-500 text-sm pl-4 ">
                        Business Consulting
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className=""
              onMouseEnter={() => setIsCompanyHovered(true)}
              onMouseLeave={() => setIsCompanyHovered(false)}
            >
              <Link href="/company">
                <span className="text-black text-sm hover:text-blue-500 flex items-center">
                  Company <HiMiniChevronDown className="ml-1" />
                </span>
              </Link>
              {isCompanyHovered && (
                <div
                  className="absolute left-0 pt-2 lg:pt-6 w-[100%] h-full    rounded-lg  opacity-100 transition-opacity duration-300 z-50"
                  onMouseEnter={() => setIsCompanyHovered(true)}
                  onMouseLeave={() => setIsCompanyHovered(false)}
                >
                  <div className="w-full grid grid-cols-1  bg-white mt-[1px] md:grid-cols-4 gap-8 p-8">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-4 pl-[10rem]">
                        Get Started
                      </h4>
                      <ul className="space-y-2 pl-[10rem]">
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Setup 101
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Adding users
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Video tutorials
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Libraries and SDKs
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Plugins
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Templates
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-4 lg:pl-[12rem]">
                        Company
                      </h4>
                      <ul className="space-y-2 lg:pl-[12rem]">
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              About Us
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Partners
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Careers
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Events
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Team
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Blog
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-20">
                      
                      <ul className="space-y-2 ">
                      <h4 className="text-xs font-semibold text-gray-900 ">
                        Product
                      </h4>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Overview
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Our Pricing
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Features
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Case Studies
                            </span>
                          </Link>
                        </li>
                        
                      </ul>
                      <div>
                      <h4 className="text-xs font-semibold text-gray-900  ">
                        Legal
                      </h4>

                      <ul className="space-y-2">
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Licenses
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Settings
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Cookies
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Document
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Terms
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Privacy
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/iphone-13-1.jpg" alt="" className="w-[5rem] " />

                    </div>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>

            <div
              className=""
              onMouseEnter={() => setIsPortfolioHovered(true)}
              onMouseLeave={() => setIsPortfolioHovered(false)}
            >
              <Link href="/portfolio">
                <span className="text-black text-sm hover:text-blue-500 flex items-center">
                  Portfolio <HiMiniChevronDown className="ml-1" />
                </span>
              </Link>
              {isPortfolioHovered && (
                <div
                  className="absolute left-0 mt-2  w-full  lg:h-[25rem] bg-white border-t  rounded-lg  opacity-100 transition-opacity duration-300 z-50"
                  onMouseEnter={() => setIsPortfolioHovered(true)}
                  onMouseLeave={() => setIsPortfolioHovered(false)}
                >
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg"
                        alt="E-commerce"
                        className="w-[150px] h-[100px] rounded-lg mb-2"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-xs font-semibold text-gray-900">
                          E-commerce
                        </h4>
                        <p className="text-xs text-gray-600">
                          We undertook a project to migrate their existing.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-2.jpg"
                        alt="App Development"
                        className="w-[150px] h-[100px] rounded-lg mb-2"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-xs font-semibold text-gray-900">
                          App Development
                        </h4>
                        <p className="text-xs text-gray-600">
                          The mobile application has significantly improved.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-3.jpeg"
                        alt="SAAS Integration"
                        className="w-[150px] h-[100px] rounded-lg mb-2"
                      />
                      <div className="flex flex-col ">
                        <h4 className="text-xs font-semibold text-gray-900">
                          SAAS Integration
                        </h4>
                        <p className="text-xs text-gray-600">
                          We partnered with DEF to upgrade their outdated IT.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-4.jpeg"
                        alt="Virtual Reality"
                        className="w-[150px] h-[100px] rounded-lg mb-2"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-xs font-semibold text-gray-900">
                          Virtual Reality
                        </h4>
                        <p className="text-xs text-gray-600">
                          Enter into the virtual reality world for real
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services">
              <span className="text-black text-sm hover:text-blue-500 flex items-center">
                Services <HiMiniChevronDown className="ml-1" />
              </span>
            </Link>
            <Link href="/faq">
              <span className="text-black text-sm hover:text-blue-500 flex items-center">
                FAQ <HiMiniChevronDown className="ml-1" />
              </span>
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 gap-4 mt-4 lg:mt-0">
        <span className="h-[2rem] border border-gray-300"></span>
          <div className="text-center lg:text-left">
            
            <Link href="tel:+19387407555">
              <span className="text-blue-500 text-sm font-bold">Call Us ↗</span>
            </Link>
            <p className="text-sm">+1-938-740-7555</p>
          </div>
          <span className="h-[2rem] border border-gray-300"></span>
          <Link href="/contact">
            <span className="bg-blue-600 text-white text-sm px-3 py-3 rounded-full hover:bg-black cursor-pointer">
              Contact Us
            </span>
          </Link>

          <div className="relative">
            <HiUser
              onClick={toggleUserMenu}
              className="text-black text-2xl cursor-pointer hover:text-gray-500"
            />
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-6 w-48 bg-white border rounded-lg shadow-lg z-50">
                <div className="block px-4 py-2 text-sm text-gray-700">
                  <p>
                    <strong>Email:</strong> {userEmail}
                  </p>
                  
                  <button
                    onClick={handleLogout}
                    className="bg-blue-700 text-sm text-white mt-2 p-3 rounded-lg"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
