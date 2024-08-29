export default function ScrollingCards() {
    return (
      <div className="relative w-full overflow-hidden mt-6">
        <div className="flex items-center space-x-4 animate-scroll">
          {/* First set of cards */}
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="Spotify" className="h-10  w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg" alt="Apple Music" className="h-10  w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="Netflix" className="h-10  w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="Forbes" className="h-10  w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="Amazon" className="h-10  w-16" />
          </div>
          
          {/* Duplicate the cards to create a seamless loop */}
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="Spotify" className="h-10 w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="Apple Music" className="h-10 w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="Netflix" className="h-10 w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="Forbes" className="h-10 w-16" />
          </div>
          <div className="flex-none w-[200px] h-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center">
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="Amazon" className="h-10 w-16" />
          </div>
        </div>
      </div>
    );
  }
  