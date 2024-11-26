// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // for navigation

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <div className="logo">
        <img src="logo.png" alt="My Logo" className="w-24 h-auto" />
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link></li>
        <li><Link to="/products" className="hover:bg-gray-700 px-3 py-2 rounded">Products</Link></li>
        <li><Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About Us</Link></li>
        <li><Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</Link></li>
        <li><Link to="/faqs" className="hover:bg-gray-700 px-3 py-2 rounded">FAQs</Link></li>
        <li><Link to="/cart" className="hover:bg-gray-700 px-3 py-2 rounded">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
