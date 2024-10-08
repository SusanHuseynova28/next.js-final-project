
import BlogCard from "../components/BlogArticleCard";
import ProductPromotionSection from "../components/ProductSectionCard";
import Footer from "../features/Footer/page";
import Header from "../features/header/page";
import Form from "../components/Form";

export default function Blog() {
  return (
    <div>
      <Header />
      
      <div className="flex flex-col items-center justify-center mt-16 px-4">
        <div className="flex justify-center items-center bg-blue-100 rounded-full w-20 h-8 text-blue-700 text-xs animate-fadeIn">
          Blog
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center w-full max-w-4xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Explore our blog for expert knowledge and inspiration
        </h1>
        <p className="mt-6 text-gray-600 text-center max-w-xl w-full animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Stay connected with us by subscribing to our blog updates. By doing so, you'll receive notifications whenever we publish new articles.
        </p>
      </div>

      <div className="w-full border border-gray-200 mt-20"></div>
      
      <div className="bg-black text-white rounded-lg p-6 flex flex-col lg:flex-row w-full max-w-6xl mx-auto mt-20">
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-4 overflow-hidden">
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-1.png"
            alt="The North Face"
            className="w-full h-full object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>

        <div className="flex-1 p-4">
          <p className="text-blue-400 text-xs uppercase mt-4">
            Mobile Development
          </p>
          <h2 className="text-2xl font-bold mt-4">
            OpenAI launches new alignment division to tackle risks of superintelligent AI
          </h2>
          <p className="text-gray-400 mt-4">
            Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.
          </p>
          <hr className="border-gray-700 mb-4" />
          <ul>
            <li className="flex items-center space-x-2 mt-4">
              <span className="text-blue-400 mt-2">✔</span>
              <span>Collaboration Tools</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-400 mt-2">✔</span>
              <span>Smart Reminders</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex justify-end items-end">
          <button className="bg-blue-500 text-white hover:bg-white hover:text-black text-xl rounded-full w-12 h-12">
            ↗
          </button>
        </div>
      </div>

      <BlogCard />
      <ProductPromotionSection />
      <Form />
      <Footer />
    </div>
  );
}
