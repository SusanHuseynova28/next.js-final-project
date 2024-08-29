
import Header from "../features/header/page";
export default function HeroSection() {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-blue-500 font-semibold tracking-wide uppercase">Empowerment</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Seamless IT for your business, boosting your growth.
          </h1>
          <p className="text-gray-600 mb-8">
            We provide the expertise and support to propel your business forward in the digital landscape.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" className="bg-blue-600 text-white text-sm px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Learn More
            </a>
            <a href="#" className="bg-gray-100 text-gray-700 text-sm px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Let's Talk <span className="inline-block">↗</span>
            </a>
          </div>
        </div>

        {/* Image and Info Section */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg" // Replace with your image URL
              alt="IT Specialist"
              className="rounded-lg shadow-lg w-full lg:w-[300px] h-[200px] object-cover"
            />
            <div className="bg-white p-4 rounded-lg shadow-lg text-center lg:text-left">
              <div className="flex items-center space-x-2">
                <div className="text-blue-500 text-3xl">+8</div>
                <div className="text-gray-600">
                  <p>Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center lg:text-left">
              <div className="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Expert 1"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-gray-600">
                  <p>Meet Our Experts</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg text-center lg:text-left">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_logo_%282013-2015%29.svg"
                    alt="Google"
                    className="w-6 h-6 object-contain"
                  />
                  <div className="text-yellow-500 text-lg ml-2">★★★★★</div>
                </div>
                <div className="text-gray-600">
                  <p>3245 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
