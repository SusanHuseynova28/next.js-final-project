import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1C1C1C]">
      {/* Background Image */}
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2024/03/bg-shape-4.svg')`,
        }}
      >
        <div className="container mx-auto px-4 py-16">
          {/* Upper Section */}
          <div className="flex flex-wrap justify-center items-center p-10 gap-10 ">
            {/* Left Side */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <div>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/logo-white.svg"
                  alt="Logo"
                />
                <p className="text-sm mt-10 w-[18rem] text-gray-400 ">
                  We provide the expertise and support to propel your business
                  forward.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-black text-white px-3 py-1 rounded-lg border border-gray-400 outline-none"
                />
                <button className="bg-blue-600 hover:bg-white hover:text-black text-white px-4 py-1 text-sm rounded-lg">
                  Get Started
                </button>
              </div>
              <div className="flex space-x-4 mt-14 gap-4">
                <Link href="https://youtube.com">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/youtube.svg"
                    alt="YouTube"
                    className="w-[80px]"
                  />
                </Link>
                <Link href="https://webflow.com">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/webflow.svg"
                    alt="Webflow"
                    className="w-[80px]"
                  />
                </Link>
                <Link href="https://upwork.com">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/upwork.svg"
                    alt="Upwork"
                    className="w-[80px]"
                  />
                </Link>
                <Link href="https://shopify.com">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/shopify.svg"
                    alt="Shopify"
                    className="w-[80px]"
                  />
                </Link>
              </div>
            </div>
            <div className="h-[20rem] border border-gray-600"></div>
            {/* Right Side */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col pl-10">
              <span className="text-xl font-semibold mt-4 text-white">
                Let's get started on something great
              </span>
              <span className="text-sm text-gray-400 mt-6">
                Our team of IT experts looks forward to meeting with you and
                providing valuable insights tailored to your business.
              </span>
              <button className="bg-blue-600 hover:bg-white hover:text-black text-white px-3 py-1 rounded-lg mt-10 w-[15rem] ">
                Get an appointment now
              </button>
              <div className="flex mt-10 space-x-4 gap-6">
                <div className="flex flex-col ">
                  <span className="text-xl text-white">2 Mins</span>
                  <span className="text-xs mt-1 text-white">Response Time</span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-xl text-white ">99%</span>
                  <span className="text-xs mt-1 text-white">Client Satisfaction</span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-xl text-white">22+ Years</span>
                  <span className="text-xs mt-1 text-white">Field Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-600 "></div>
          {/* Lower Section */}
          <div className="border-gray-800 mt-4 pt-8 flex justify-center items-center gap-[5rem] ">
            <div className="flex flex-wrap justify-center text-sm">
              <div className="flex justify-center items-center gap-16 ">
                {/* Services */}
                <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
                  <p className="font-semibold mt-6 text-white">Services</p>
                  <ul className="flex flex-col gap-4 text-xs text-white">
                    <li className="mt-6">
                      <Link href="#">IT Support</Link>
                    </li>
                    <li>
                      <Link href="#">Web Design</Link>
                    </li>
                    <li>
                      <Link href="#">Development</Link>
                    </li>
                    <li>
                      <Link href="#">Cloud Things</Link>
                    </li>
                    <li>
                      <Link href="#">E-Commerce</Link>
                    </li>
                    <li>
                      <Link href="#">CRM Solutions</Link>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
                  <p className="font-semibold mb-2 text-white">Company</p>
                  <ul className="flex flex-col gap-4 text-xs text-white">
                    <li className="mt-4">
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Partners</Link>
                    </li>
                    <li>
                      <Link href="#">Careers</Link>
                    </li>
                    <li>
                      <Link href="#">Events</Link>
                    </li>
                    <li>
                      <Link href="#">Team</Link>
                    </li>
                  </ul>
                </div>

                {/* Product */}
                <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
                  <p className="font-semibold mt-7 text-white">Product</p>
                  <ul className="flex flex-col gap-4 text-xs text-white">
                    <li className="mt-6">
                      <Link href="#">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="#">Our Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Features</Link>
                    </li>
                    <li>
                      <Link href="#">Overview</Link>
                    </li>
                    <li>
                      <Link href="#">New Releases</Link>
                    </li>
                    <li>
                      <Link href="#">Solutions</Link>
                    </li>
                  </ul>
                </div>

                {/* Our Fields */}
                <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
                  <p className="font-semibold text-white">Our Fields</p>
                  <ul className="flex flex-col gap-4 text-xs text-white">
                    <li className="mt-6">
                      <Link href="#">Healthcare</Link>
                    </li>
                    <li>
                      <Link href="#">Banks</Link>
                    </li>
                    <li>
                      <Link href="#">Logistics</Link>
                    </li>
                    <li>
                      <Link href="#">Supermarkets</Link>
                    </li>
                    <li>
                      <Link href="#">Industries</Link>
                    </li>
                    <li>
                      <Link href="#">Hotels</Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
                  <p className="font-semibold mb-2 text-white">Legal</p>
                  <ul className="flex flex-col gap-4 text-xs text-white">
                    <li className="mt-4">
                      <Link href="#">Licenses</Link>
                    </li>
                    <li>
                      <Link href="#">Settings</Link>
                    </li>
                    <li>
                      <Link href="#">Cookies</Link>
                    </li>
                    <li>
                      <Link href="#">Document</Link>
                    </li>
                    <li>
                      <Link href="#">Terms</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[20rem] border border-gray-600"></div>
            <div className="w-full lg:w-1/6">
              <p className="font-semibold mt-4 text-white">Phone</p>
              <ul className="flex flex-col gap-4 mt-6 text-xs text-white">
                <li>+1-455-1482-236</li>
                <li>+1-938-740-7555</li>
              </ul>
              <p className="font-semibold mt-10 text-white">Mail</p>
              <ul className="flex flex-col gap-4 mt-6 text-xs text-white">
                <li>bluebase@mail.com</li>
                <li>mandrodio@mail.com</li>
              </ul>
            </div>
          </div>
          <div className="border border-gray-600 mt-10"></div>
          <div className="flex justify-center gap-[39rem] items-center text-sm mt-10 ">
            <div className="flex text-white">
              <span>
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 2H2v20l4-4h16V2zM8.5 13h-2v-5h2v5zm-.9-6.8c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm11.4 7.8h-2v-3c0-.55-.45-1-1-1H14c-.55 0-1 .45-1 1v3h-2v-5h2v.6c.24-.42.67-.6 1.1-.6h1.6c1.1 0 2 .9 2 2v3zm-7.8 0h-2v-5h2v5z" />
                </svg>
              </span>
              <span>
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.61.59-2.49.7a4.29 4.29 0 001.88-2.37 8.57 8.57 0 01-2.72 1.04 4.27 4.27 0 00-7.27 3.89 12.12 12.12 0 01-8.8-4.46 4.27 4.27 0 001.32 5.71 4.2 4.2 0 01-1.94-.54v.05c0 2.08 1.48 3.82 3.44 4.22a4.28 4.28 0 01-1.94.07c.54 1.68 2.08 2.91 3.91 2.94A8.59 8.59 0 012 18.5a12.07 12.07 0 006.57 1.93c7.88 0 12.2-6.54 12.2-12.22 0-.18 0-.36-.01-.54A8.73 8.73 0 0024 5.36a8.61 8.61 0 01-2.48.68 4.28 4.28 0 001.88-2.37 8.56 8.56 0 01-2.72 1.04z" />
                </svg>
              </span>
              <span>
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM8.29 20.19H4.68V9h3.61v11.19zm-1.81-12.6h-.03c-1.2 0-1.97-.82-1.97-1.84 0-1.04.78-1.84 1.98-1.84s1.97.8 1.98 1.84c0 1.02-.78 1.84-1.96 1.84zM20.19 20.19h-3.62v-5.61c0-1.34-.48-2.25-1.69-2.25-.92 0-1.47.62-1.71 1.22-.09.21-.11.49-.11.78v5.86h-3.62V9h3.48v1.51h.05c.48-.74 1.34-1.79 3.27-1.79 2.39 0 4.18 1.55 4.18 4.88v6.59z" />
                </svg>
              </span>
              <span>
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.1c-5.47 0-9.9 4.43-9.9 9.9 0 5.47 4.43 9.9 9.9 9.9 5.47 0 9.9-4.43 9.9-9.9 0-5.47-4.43-9.9-9.9-9.9zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10.9c-2.71 0-4.9 2.19-4.9 4.9s2.19 4.9 4.9 4.9 4.9-2.19 4.9-4.9-2.19-4.9-4.9-4.9zm0 8c-1.71 0-3.1-1.39-3.1-3.1s1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1-1.39 3.1-3.1 3.1z" />
                </svg>
              </span>
            </div>
            <div>
              <p className="text-white">© 2023 All rights reserved by WordPressRiver</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
