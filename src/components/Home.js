// src/components/Home.js
import React from 'react';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <div className="relative w-full h-80 md:h-[500px] lg:h-[700px]">
        <div className="absolute inset-0 flex w-full h-full">
          {/* Här skulle du ha en bildslider */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg">
            Make a statement out of yourself
          </h1>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Explore Our Exclusive Offerings</h2>
        <p className="text-gray-600 mt-2 text-lg">Designed to captivate and engage your audience</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mb-12 px-4">
        {/* Lägg till produktkort här */}
      </div>
    </Layout>
  );
};

export default Home;