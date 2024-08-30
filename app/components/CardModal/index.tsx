export default function CardModal() {
  return (
    <div
      className="bg-cover bg-[#1C1C1C] bg-no-repeat bg-center text-white p-24 w-[80%] mx-auto h-[32rem] rounded-lg mt-24"
      style={{
        backgroundImage: `url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')`,
      }}
    >
      <div className="max-w-7xl flex gap-10 relative">
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

        <div className="flex flex-col space-y-8 pl-6 gap-4 relative">
          {/* First Row */}
          <div className="flex items-center justify-center space-x-8 relative">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 h-[4.5rem] relative z-10">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                alt="Brainstorming Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500  text-xs">Brainstorming Ideas</h4>
            </div>

            {/* Dotted Line */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-[10.5rem] w-[4rem] border-dotted border-b-2 border-gray-400 z-0"></div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 relative z-10 h-[4.5rem]">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-2.svg"
                alt="Product Design Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 text-xs">Product Design</h4>
            </div>

            {/* Dotted Line */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-[23rem] w-[4rem] border-dotted border-b-2 border-gray-400 z-0"></div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 relative z-10 h-[4.5rem]">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-3.svg"
                alt="Front-End Development Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 text-xs">
                Front-End Development
              </h4>
            </div>
          </div>

          {/* Vertical Dotted Lines from First Row */}
          <div className="absolute top-[3.5rem] left-[13rem] h-[4rem] border-dotted border-l-2 border-gray-400 z-0"></div>
          <div className="absolute top-[3.5rem] left-[25.5rem] h-[4rem] border-dotted border-l-2 border-gray-400 z-0"></div>
          

          {/* Second Row */}
          <div className="flex items-center justify-center space-x-8 relative mt-[2rem]">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 relative z-10 h-[4.5rem]">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-5.svg"
                alt="SEO Optimization Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 text-xs">SEO Optimization</h4>
            </div>

            {/* Dotted Line */}
            

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 relative z-10 h-[4.5rem]">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-4.svg"
                alt="Back-End Development Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 text-xs">
                Back-End Development
              </h4>
            </div>
          </div>

          {/* Vertical Dotted Lines from Second Row */}
         

          {/* Third Row */}
          <div className="flex items-center justify-center space-x-8 relative mt-[2rem]">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 relative z-10 h-[4.5rem]">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-4.svg"
                alt="Digital Marketing Icon"
                className="h-10 w-10"
              />
              <h4 className="text-blue-500 text-xs">Digital Marketing</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
