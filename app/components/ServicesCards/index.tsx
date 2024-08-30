import { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="p-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-20">
          <div className="lg:w-1/2">
            <p className="text-blue-600 uppercase tracking-wide text-xs mb-4">
              What we’re offering
            </p>
            <h2 className="text-xl lg:text-5xl font-semibold text-gray-900 mb-4 w-[40rem]">
              Dealing in all professional IT services.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-600 mt-4 lg:mt-0 w-[35rem] ">
              One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-10">
          <div className={`bg-white shadow-md w-[220px] h-[230px] p-6  transform transition-transform duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                alt="Development"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-900  mt-6">
              Development
            </h3>
            <p className="text-gray-500 mt-6">
              Our development is pixel perfect in all ways.
            </p>
          </div>

          <div className={`bg-white shadow-md w-[220px] h-[230px] p-6  transform transition-transform duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg"
                alt="Woo Commerce"
                className="h-8 w-8 "
              />
            </div>
            <h3 className="text-sm font-bold text-gray-900  mt-6">
              Woo Commerce
            </h3>
            <p className="text-gray-500 mt-6">
              We have a best team for your shopping websites.
            </p>
          </div>

          <div className={`bg-white shadow-md w-[220px] h-[230px] p-6  transform transition-transform duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg"
                alt="CRM Solutions"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-900  mt-6">
              CRM Solutions
            </h3>
            <p className="text-gray-500 mt-6">
              We enhance customer experiences for success.
            </p>
          </div>

          <div className={`bg-white shadow-md w-[220px] h-[230px] p-6  transform transition-transform duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg"
                alt="Web Design"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-900  mt-6">
              Web Design
            </h3>
            <p className="text-gray-500 mt-6">
              We create vibrant, intuitive and minimalist web designs.
            </p>
          </div>

          <div className={`bg-white shadow-md w-[220px] h-[230px] p-6  relative transform transition-transform duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg"
                alt="IT Support"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-900  mt-6">
              IT Support
            </h3>
            <p className="text-gray-500 mt-6">
              We offer expert assistance for your IT issues.
            </p>
            <div className="absolute top-4 right-4 text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
              Free!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
