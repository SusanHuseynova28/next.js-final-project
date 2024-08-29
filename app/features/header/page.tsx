"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMiniChevronDown } from "react-icons/hi2";
import { FaTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Header() {
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);

  return (
    <div className="">
      <header className="flex flex-col lg:flex-row items-center justify-around p-4 border">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/logo.svg"
            alt="Synck Logo"
            className="h-6 pr-6 mt-1"
          />
          <nav className="flex flex-col lg:flex-row gap-4 lg:gap-10 pl-0 lg:pl-6 mt-4 lg:mt-2 relative">
            <div className="relative">
              <div className="group">
                <Link href="/home">
                  <span className="text-black text-sm hover:text-blue-500 flex items-center">
                    Home <HiMiniChevronDown className="ml-1" />
                  </span>
                </Link>
                <div className="absolute left-0 mt-2 lg:mt-6 w-full lg:w-[220px] h-24 bg-white border rounded-lg shadow-lg opacity-0 visible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                  <Link href="/it-services">
                    <p className="p-2 hover:text-blue-500 text-sm pl-4 mt-2">
                      IT Services
                    </p>
                  </Link>
                  <Link href="/business-consulting">
                    <p className="p-2 hover:text-blue-500 text-sm pl-4 mt-2">
                      Business Consulting
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyHovered(true)}
              onMouseLeave={() => setIsCompanyHovered(false)}
            >
              <div className="group">
                <Link href="/company">
                  <span className="text-black text-sm hover:text-blue-500 flex items-center">
                    Company <HiMiniChevronDown className="ml-1" />
                  </span>
                </Link>
                <div className="absolute left-0 mt-2 lg:mt-6 w-full lg:w-[65rem] h-auto lg:h-[25rem] bg-white border-t border-gray-200 rounded-lg shadow-lg opacity-0 visible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                  <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
                    {/* Get Started Column */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-4">
                        Get Started
                      </h4>
                      <ul className="space-y-2">
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

                    {/* Company Column */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-4 lg:pl-16">
                        Company
                      </h4>
                      <ul className="space-y-2 lg:pl-16">
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

                    {/* Product Column */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-4">
                        Product
                      </h4>
                      <ul className="space-y-2">
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
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              New Releases
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="text-gray-600 hover:text-blue-500 text-xs">
                              Solutions
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-4">
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
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8">
                      <div className="flex space-x-4">
                        <Link href="#">
                          <FaDribbble className=" text-blue-500 h-4 w-4" />
                        </Link>
                        <Link href="#">
                          <FaTwitter className=" text-blue-500 h-4 w-4" />
                        </Link>
                        <Link href="#">
                          <FaInstagram className=" text-blue-500 h-4 w-4" />
                        </Link>
                        <Link href="#">
                          <FaLinkedin className=" text-blue-500 h-4 w-4" />
                        </Link>
                      </div>

                      <div className="mt-4 lg:mt-0">
                        <p className="text-gray-600 text-sm">
                          Looking for new career?{" "}
                          <Link href="#">
                            <span className="text-blue-500">We're hiring</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative group ${
                isCompanyHovered ? "pointer-events-none" : ""
              }`}
            >
              <Link href="/portfolio">
                <span className="text-black text-sm hover:text-blue-500 flex items-center">
                  Portfolio <HiMiniChevronDown className="ml-1" />
                </span>
              </Link>
              <div className="absolute left-0 mt-2 lg:mt-6 w-full lg:w-[60rem] h-auto lg:h-[20rem] bg-white border-t border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
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
                        we undertook a project to migrate their existing.
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
          <div className="text-center lg:text-left">
            <Link href="tel:+19387407555">
              <span className="text-blue-500 text-sm font-bold">Call Us ↗</span>
            </Link>
            <p className="text-sm">+1-938-740-7555</p>
          </div>
          <Link href="/contact">
            <span className="bg-blue-600 text-white text-sm px-3 py-3 rounded-full hover:bg-black cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}
