import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main> {/* Ensures the main content takes up available space */}
      <Footer />
    </div>
  );
};

export default Layout;
