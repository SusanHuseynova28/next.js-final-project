export default function ProductPromotionSection() {
    return (
      <div className="flex justify-center items-center h-[40rem] bg-[#1C1C1C] text-white py-16 px-12 mt-24">
        <div className="flex justify-between items-center max-w-6xl mx-auto gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-[18rem] h-[30rem]">
              <h3 className="text-3xl font-bold">Start your project from your pocket.</h3>
              <div className="mb-16">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-1.png"
                  alt="Mobile devices"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
  
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-[18rem] h-[30rem]">
              <h3 className="text-3xl font-bold">Available on all responsive devices.</h3>
              <div className="">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-2.png"
                  alt="Tablet devices"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
  
          <div className="max-w-md ml-12">
            <p className="text-blue-600 text-xs">FEATURED PRODUCT</p>
            <h2 className="text-4xl font-bold mt-4">Seamless productivity with our new app</h2>
            <p className="text-gray-400 mt-4 w-[22rem]">
              Download Slack and experience a new era of organization and accomplishment.
            </p>
            <div className="flex flex-col mt-6 space-y-3">
              <div className="flex items-center">
                <div className="text-blue-600 mr-2">&#10003;</div>
                <span>PPD Development</span>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-2">&#10003;</div>
                <span>Easy to Use</span>
              </div>
            </div>
            <div className="flex mt-8 space-x-4">
              <button className="bg-transparent border h-[3.5rem] border-white text-white hover:bg-white hover:text-black py-2 px-6 rounded-lg">
                Get it on App Store
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black py-2 px-6 rounded-lg">
                Get it on Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  