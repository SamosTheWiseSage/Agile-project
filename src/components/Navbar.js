import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <div className="logo">
        <img src="assets/logo.png" alt="My Logo" className="w-24 h-auto" />
      </div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</a></li>
        <li><a href="/products" className="hover:bg-gray-700 px-3 py-2 rounded">Products</a></li>
        <li><a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About Us</a></li>
        <li><a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</a></li>
        <li><a href="/faqs" className="hover:bg-gray-700 px-3 py-2 rounded">FAQs</a></li>
        <li><a href="/cart" className="hover:bg-gray-700 px-3 py-2 rounded">Cart</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
