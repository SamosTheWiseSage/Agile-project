// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Access user and logout from AuthContext

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
      {/* Logo */}
      <div className="logo">
        <img src="assets/logo.png" alt="My Logo" className="w-24 h-auto" />
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link></li>
        <li><Link to="/products" className="hover:bg-gray-700 px-3 py-2 rounded">Products</Link></li>
        <li><Link to="/second-hand-shop" className="hover:bg-gray-700 px-3 py-2 rounded">Second Hand Shop</Link></li>
        <li><Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About</Link></li>
        <li><Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</Link></li>
        <li><Link to="/faqs" className="hover:bg-gray-700 px-3 py-2 rounded">FAQs</Link></li>

        {/* Conditionally show login/logout and admin link */}
        {user ? (
          <>
            <li className="text-white">Welcome, {user.username}</li>
            <li><button onClick={logout} className="px-3 py-2 rounded bg-red-500">Logout</button></li>
            {user.role === 'admin' && <li><Link to="/admin" className="px-3 py-2 rounded bg-green-500">Admin</Link></li>}
          </>
        ) : (
          <li><Link to="/login" className="px-3 py-2 rounded bg-blue-500">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
