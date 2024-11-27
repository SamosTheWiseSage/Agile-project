// src/components/ProductsPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import Navbar from './Navbar'; // Import the Navbar component

// Sample product data
const products = [
  {
    name: 'Urban Pulse',
    description: 'Stylish urban wear to elevate your street look!',
    price: 'SEK 599.99',
    image: 'card11.jfif',
  },
  {
    name: 'StreetLab',
    description: 'Perfect for the modern, street-savvy fashionista.',
    price: 'SEK 499.99',
    image: 'card12.jpg',
  },
  {
    name: 'Vibe Theory',
    description: 'Dive into the vibes of your true self with unique designs.',
    price: 'SEK 499.00',
    image: 'card13.jpg',
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the selected product

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Set the selected product to display more details
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar component */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>

        {/* Display product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} onClick={handleCardClick} />
          ))}
        </div>

        {/* Show more details of the selected product */}
        {selectedProduct && (
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{selectedProduct.name}</h2>
            <p className="text-lg text-gray-600 mt-4">{selectedProduct.description}</p>
            <p className="text-xl font-semibold text-gray-800 mt-4">{selectedProduct.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
