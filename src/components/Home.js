// Home.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'placeholder1.webp', 'placeholder2.webp', 'placeholder3.avif',
    'placeholder4.webp', 'placeholder5.avif', 'placeholder6.jpg',
    'placeholder7.jpeg', 'placeholder8.webp', 'placeholder9.jpg',
    'placeholder10.jpg', 'placeholder11.jpeg', 'placeholder12.jpg',
    'placeholder13.jpg', 'placeholder14.jpg', 'placeholder15.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      
      <div className="relative w-full h-80 md:h-[500px] lg:h-[700px]">
        <div className="absolute inset-0 flex w-full h-full">
          {slides.map((slide, index) => (
            <img 
              key={index} 
              src={slide} 
              alt={`Slide ${index + 1}`} 
              className={`w-full h-full object-contain ${index !== currentIndex ? 'hidden' : ''}`}
            />
          ))}
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
        {['Urban Pulse', 'StreetLab', 'City Life', 'Tech Style'].map((title, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={`card${index + 1}.avif`} 
              alt={title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-gray-600 mb-3">${(index + 1) * 50}.99</p>
              <button className="w-full bg-cadetgreen-500 text-white py-2 rounded hover:bg-cadetgreen-700">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
