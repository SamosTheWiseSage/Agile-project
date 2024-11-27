// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State för att hantera om dropdown-menyn är öppen eller stängd
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
      {/* Logo */}
      <div className="logo">
        <img src="assets/logo.png" alt="My Logo" className="w-24 h-auto" />
      </div>

      {/* Hamburger meny (dropdown på alla enheter) */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Dropdown meny (syns alltid när den är öppen) */}
      <div className={`${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg`}>
        <ul className="space-y-4">
          <li><Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded">Home</Link></li>
          <li><Link to="/products" className="block hover:bg-gray-700 px-3 py-2 rounded">Products</Link></li>
          <li><Link to="/about" className="block hover:bg-gray-700 px-3 py-2 rounded">About Us</Link></li>
          <li><Link to="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded">Contact</Link></li>
          <li><Link to="/faqs" className="block hover:bg-gray-700 px-3 py-2 rounded">FAQs</Link></li>
          <li><Link to="/cart" className="block hover:bg-gray-700 px-3 py-2 rounded">Cart</Link></li>
          <li><Link to="/login" className="block hover:bg-gray-700 px-3 py-2 rounded">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;