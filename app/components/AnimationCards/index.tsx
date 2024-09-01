export default function ScrollingCards() {
  return (
    <div className="relative w-full overflow-hidden mt-6">
      <div
        className="flex items-center space-x-4 animate-scroll"
        style={{
          animation: "scroll 40s linear infinite",
          display: "flex",
          width: "calc(200px * 10)",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg"
                alt="Spotify"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg"
                alt="Apple Music"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg"
                alt="Netflix"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg"
                alt="Forbes"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg"
                alt="Amazon"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg"
                alt="Netflix"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg"
                alt="Apple Music"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
            <div className="flex-none w-[150px] sm:w-[180px] lg:w-[200px] h-[100px] sm:h-[120px] lg:h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg"
                alt="Spotify"
                className="h-8 sm:h-9 lg:h-10 w-12 sm:w-14 lg:w-16"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
