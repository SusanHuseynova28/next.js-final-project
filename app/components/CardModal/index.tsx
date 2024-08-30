export default function CardModal() {
  return (
    <div
      className="bg-cover bg-[#1C1C1C] bg-no-repeat bg-center  text-white p-24 w-[80%] mx-auto h-[32rem] rounded-lg mt-24"
      style={{
        backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')`,
      }}
    >
      <div className="max-w-7xl flex gap-10">
        <div className="mb-10">
          <h3 className="text-xs text-blue-500 uppercase tracking-wide">
            Our Model
          </h3>
          <h1 className="text-4xl font-bold mt-2">How we do</h1>
          <p className="text-gray-400 mt-4 w-[18rem]">
            Save time and money with our powerful method.
          </p>
          <div className="mt-[10rem]">
            <button className="bg-blue-500 text-white px-4 py-3 rounded-full hover:bg-white hover:text-black">
              Learn More ↗
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-8 pl-6 gap-4">
          <div className="flex items-center space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                alt="Brainstorming Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 font-medium">Brainstorming Ideas</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-2.svg"
                alt="Product Design Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 font-medium">Product Design</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-3.svg"
                alt="Front-End Development Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 font-medium">
                Front-End Development
              </h4>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center space-x-8 pl-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-5.svg"
                alt="SEO Optimization Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 font-medium">SEO Optimization</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-4.svg"
                alt="Back-End Development Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 font-medium">
                Back-End Development
              </h4>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex items-center space-x-8 mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-4.svg"
                alt="Digital Marketing Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 font-medium">Digital Marketing</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
