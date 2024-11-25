import React from "react";

function Home() {
  return (
    <div>
      {/* Slideshow Section */}
      <div className="relative w-full h-80 md:h-[500px] lg:h-[700px]">
        <div id="slideshow" className="absolute inset-0 flex w-full h-full">
          <img
            src="/assets/placeholder1.webp" // Use relative paths for assets
            alt="Image 1"
            className="w-full h-full object-contain hidden"
          />
          <img
            src="/assets/placeholder2.webp"
            alt="Image 2"
            className="w-full h-full object-contain hidden"
          />
          <img
            src="/assets/placeholder3.avif"
            alt="Image 3"
            className="w-full h-full object-contain hidden"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg">
            Make a statement out of yourself
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Explore Our Exclusive Offerings
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Designed to captivate and engage your audience
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mb-12 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/assets/card14.webp"
            alt="Urban Pulse"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Urban Pulse</h3>
            <p className="text-gray-600 mb-3">$59.99</p>
            <a href="/cart">
              <button className="w-full bg-cadetgreen-500 text-white py-2 rounded hover:bg-cadetgreen-700">
                Shop Now
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/assets/card13.webp"
            alt="Modern Chic"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Modern Chic</h3>
            <p className="text-gray-600 mb-3">$79.99</p>
            <a href="/cart">
              <button className="w-full bg-cadetgreen-500 text-white py-2 rounded hover:bg-cadetgreen-700">
                Shop Now
              </button>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/assets/card10.webp"
            alt="Nature's Essence"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Nature's Essence</h3>
            <p className="text-gray-600 mb-3">$69.99</p>
            <a href="/cart">
              <button className="w-full bg-cadetgreen-500 text-white py-2 rounded hover:bg-cadetgreen-700">
                Shop Now
              </button>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/assets/card11.webp"
            alt="Vintage Elegance"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Vintage Elegance</h3>
            <p className="text-gray-600 mb-3">$89.99</p>
            <a href="/cart">
              <button className="w-full bg-cadetgreen-500 text-white py-2 rounded hover:bg-cadetgreen-700">
                Shop Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
