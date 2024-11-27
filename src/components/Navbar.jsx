import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Importera AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Hämta användare och logout från AuthContext
  const [isOpen, setIsOpen] = useState(false); // State för att hålla reda på om hamburgermenyn är öppen eller stängd

  // Hantera öppning och stängning av hamburgermenyn
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src="assets/logo.png" alt="My Logo" className="w-24 h-auto" />
        </div>

        {/* Hamburgermeny (synlig alltid) */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Meny (visas alltid om isOpen är true) */}
      {isOpen && (
        <div className="bg-gray-700 p-4 space-y-4">
          <Link to="/" className="block text-white px-3 py-2 rounded">Home</Link>
          <Link to="/products" className="block text-white px-3 py-2 rounded">Products</Link>
          <Link to="/second-hand-shop" className="block text-white px-3 py-2 rounded">Second Hand Shop</Link>
          <Link to="/about" className="block text-white px-3 py-2 rounded">About</Link>
          <Link to="/contact" className="block text-white px-3 py-2 rounded">Contact</Link>
          <Link to="/faqs" className="block text-white px-3 py-2 rounded">FAQs</Link>

          {/* Visar login/logout och admin-länk */}
          {user ? (
            <>
              <span className="block text-white">Welcome, {user.username}</span>
              <button onClick={logout} className="block text-white px-3 py-2 rounded bg-red-500">Logout</button>
              {user.role === 'admin' && <Link to="/admin" className="block text-white px-3 py-2 rounded bg-green-500">Admin</Link>}
            </>
          ) : (
            <Link to="/login" className="block text-white px-3 py-2 rounded bg-blue-500">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;