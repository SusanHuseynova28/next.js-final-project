export default function CaseCard() {
  return (
    <section
      className="py-16 bg-gray-50"
      style={{
        background:
          "linear-gradient(180deg, rgba(243, 246, 253, 0.7) 0%, rgba(243, 246, 253, 0) 86.26%)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 uppercase tracking-wide text-xs ">
            Case Studies
          </p>
          <h2 className="text-xl lg:text-4xl font-bold text-gray-900 mt-4">
            Detailing of our products
          </h2>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <nav className="bg-white rounded-lg p-4 flex space-x-6 lg:space-x-20">
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Development
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Woo Commerce
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              CRM Solutions
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Web Designing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              IT Support
            </a>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 lg:p-8 w-full lg:w-[30rem]">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium inline-block mb-12">
                  Web Development
                </span>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-1-1-1.jpg"
                  alt="Web Development"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">
                  Mobile Development
                </span>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-2-2-1.jpg"
                  alt="Mobile Development"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 lg:p-10 w-full lg:w-[28rem] flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                  alt="Development Icon"
                  className="h-10 w-10 mr-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Development
              </h3>
              <p className="text-gray-600 mt-4 text-sm">
                Software development is a dynamic and rapidly evolving field
                that plays a pivotal role in shaping the digital landscape we
                live in today. It encompasses the processes, methodologies, and
                practices used to design, create, deploy, and maintain software
                applications and systems.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <a
                href="#"
                className="bg-blue-600 text-white px-5 py-3 rounded-full inline-flex items-end hover:bg-black transition"
              >
                <span className="text-white text-lg">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
