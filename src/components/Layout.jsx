// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;