// src/components/Home.js
import React from 'react';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>

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