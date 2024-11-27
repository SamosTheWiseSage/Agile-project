import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import { getProducts } from '../data/mockDatabase'; // Import the DB function

const ProductsPage = () => {
  const [products, setProducts] = useState(getProducts());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Use useEffect to re-fetch products when the component mounts or when products are updated
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(getProducts()); // Refresh the products list from the mock DB
    }, 5000); // Poll for updates every 5 seconds (or adjust as needed)

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  // Filter products based on category and subcategory
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const subcategoryMatch = selectedSubcategory ? product.subcategory === selectedSubcategory : true;
    return categoryMatch && subcategoryMatch;
  });

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>

        {/* Dropdown for category selection */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-semibold text-gray-700">Select Category</label>
          <select
            id="category"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory(''); // Reset subcategory when category changes
            }}
          >
            <option value="">All Categories</option>
            {Object.keys(categories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Dropdown for subcategory selection */}
        {selectedCategory && (
          <div className="mb-6">
            <label htmlFor="subcategory" className="block text-lg font-semibold text-gray-700">Select Subcategory</label>
            <select
              id="subcategory"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            >
              <option value="">All {selectedCategory}</option>
              {categories[selectedCategory].map((subcategory, index) => (
                <option key={index} value={subcategory}>{subcategory}</option>
              ))}
            </select>
          </div>
        )}

        {/* Display product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} onClick={handleCardClick} />
          ))}
        </div>

        {/* Show selected product details */}
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
