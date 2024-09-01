export default function Form() {
  return (
    <div className="min-h-screen flex justify-center items-center p-6 mt-16">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="bg-[#F3F6FD] p-8 lg:p-14 rounded-lg w-full lg:w-[35rem] h-auto lg:h-[55rem]">
          <h2 className="text-indigo-600 text-xs uppercase mb-4">Contact</h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's get in touch
          </h1>
          <p className="text-gray-600 mb-6">
            You can reach us anytime via
            <span className="text-indigo-600"> bluebase@mail.com</span>
          </p>
          <hr className="mt-10 border-gray-300" />
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 h-[2.5rem] mt-4 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 h-[2.5rem] mt-4 rounded-lg w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="border mt-6 border-gray-300 p-3 h-[2.5rem] mt-4 rounded-lg w-full mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Number"
                className="border border-gray-300 p-3 h-[2.5rem] mt-4 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Your Country"
                className="border border-gray-300 p-3 h-[2.5rem] mt-4 rounded-lg w-full"
              />
            </div>
            <textarea
              placeholder="Leave us a message..."
              className="border border-gray-300 p-3 mt-4 rounded-lg w-full h-32 mb-4"
            ></textarea>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                You agree to our
                <span className="text-black underline">
                  {" "}
                  terms and conditions
                </span>
                .
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-black transition duration-200 mt-4"
            >
              Get Started
            </button>
          </form>
        </div>

        <div className="bg-[#F3F6FD] p-6 lg:p-2 rounded-lg flex flex-col justify-center w-full lg:w-[20rem] h-auto lg:h-[55rem]">
          <div className="space-y-6 lg:p-10 flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">22+</h2>
              <p className="text-blue-700">Years Field Experience</p>
              <hr className="mt-10 border-gray-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">950+</h2>
              <p className="text-blue-700">Projects Done Around World</p>
              <hr className="mt-10 border-gray-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">99%</h2>
              <p className="text-blue-700">Client Satisfaction</p>
              <hr className="mt-10 border-gray-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">1995+</h2>
              <p className="text-blue-700">Year Established On</p>
              <hr className="mt-10 border-gray-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">2+</h2>
              <p className="text-blue-700">Response Time</p>
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-16 bg-[#F3F6FD] rounded-lg h-auto lg:h-[55rem] w-full lg:w-[20rem]">
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg"
            className="w-[35px] mt-1"
            alt="Support Icon"
          />
          <h2 className="text-xs font-semibold uppercase mt-6">Contact Info</h2>
          <div className="text-gray-900 mb-4">
            <p className="block text-xs text-gray-600 mt-6">+1 455 1482 236</p>
            <p className="text-xs text-gray-600">Bluebase@mail.com</p>
          </div>
          <hr className="mt-10 border-gray-300" />
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg"
            className="w-[35px] mt-16"
            alt="Map Icon"
          />
          <p className="text-gray-900 font-semibold mt-6">Visit our office</p>
          <p className="text-gray-600 mt-6 w-full lg:w-[8rem] text-xs">
            16/9, Down Street Edinburgh, Scotland United Kingdom
          </p>
          <hr className="mt-10 border-gray-300" />
          <div className="space-y-4 mt-16">
            <div className="flex items-center text-blue-600">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 2H2v20l4-4h16V2zM8.5 13h-2v-5h2v5zm-.9-6.8c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm11.4 7.8h-2v-3c0-.55-.45-1-1-1H14c-.55 0-1 .45-1 1v3h-2v-5h2v.6c.24-.42.67-.6 1.1-.6h1.6c1.1 0 2 .9 2 2v3zm-7.8 0h-2v-5h2v5z" />
              </svg>
              <p className="text-black text-xs">Dribbble</p>
            </div>
            <div className="flex items-center text-blue-600">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.61.59-2.49.7a4.29 4.29 0 001.88-2.37 8.57 8.57 0 01-2.72 1.04 4.27 4.27 0 00-7.27 3.89 12.12 12.12 0 01-8.8-4.46 4.27 4.27 0 001.32 5.71 4.2 4.2 0 01-1.94-.54v.05c0 2.08 1.48 3.82 3.44 4.22a4.28 4.28 0 01-1.94.07c.54 1.68 2.08 2.91 3.91 2.94A8.59 8.59 0 012 18.5a12.07 12.07 0 006.57 1.93c7.88 0 12.2-6.54 12.2-12.22 0-.18 0-.36-.01-.54A8.73 8.73 0 0024 5.36a8.61 8.61 0 01-2.48.68 4.28 4.28 0 001.88-2.37 8.56 8.56 0 01-2.72 1.04z" />
              </svg>
              <p className="text-black text-xs">Twitter</p>
            </div>
            <div className="flex items-center text-blue-600">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.1c-5.47 0-9.9 4.43-9.9 9.9 0 5.47 4.43 9.9 9.9 9.9 5.47 0 9.9-4.43 9.9-9.9 0-5.47-4.43-9.9-9.9-9.9zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10.9c-2.71 0-4.9 2.19-4.9 4.9s2.19 4.9 4.9 4.9 4.9-2.19 4.9-4.9-2.19-4.9-4.9-4.9zm0 8c-1.71 0-3.1-1.39-3.1-3.1s1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1-1.39 3.1-3.1 3.1z" />
              </svg>
              <p className="text-black text-xs">Instagram</p>
            </div>
            <div className="flex items-center text-blue-600">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM8.29 20.19H4.68V9h3.61v11.19zm-1.81-12.6h-.03c-1.2 0-1.97-.82-1.97-1.84 0-1.04.78-1.84 1.98-1.84s1.97.8 1.98 1.84c0 1.02-.78 1.84-1.96 1.84zm11.4 7.8h-2v-3c0-.55-.45-1-1-1H14c-.55 0-1 .45-1 1v3h-2v-5h2v.6c.24-.42.67-.6 1.1-.6h1.6c1.1 0 2 .9 2 2v3zm-7.8 0h-2v-5h2v5z" />
              </svg>
              <p className="text-black text-xs">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
