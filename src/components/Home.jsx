import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Lägg till Navbar */}
      <Navbar />

      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Explore Our Exclusive Offerings</h2>
        <p className="text-gray-600 mt-2 text-lg">Designed to captivate and engage your audience</p>
      </div>

      {/* Kategorier */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Shop by Category</h3>
        <div className="mt-4 space-x-6">
          <Link to="/products?category=Tröjor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Tröjor</Link>
          <Link to="/products?category=Byxor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Byxor</Link>
          <Link to="/products?category=Skor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Skor</Link>
          <Link to="/products?category=Jackor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Jackor</Link>
        </div>
      </div>

      {/* Lägg till Footer */}
      <Footer />
    </div>
  );
};

export default Home;