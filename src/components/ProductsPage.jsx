import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import { getProducts } from '../data/mockDatabase'; // Import the DB function

const categories = {
  Jackor: ['Hehehhe'],
  Tröjor: ['Hoodie', 'ee'],
  Byxor: ['ByxorTest1'],
  Skor: ['stest', 'stest2'],
};

const ProductsPage = () => {
  const [products, setProducts] = useState(getProducts());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product

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

  // Handle category change: Reset selected product
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory(''); // Reset subcategory when category changes
    setSelectedProduct(null); // Close description when changing category
  };

  // Handle subcategory change: Reset selected product
  const handleSubcategoryChange = (event) => {
    const subcategory = event.target.value;
    setSelectedSubcategory(subcategory);
    setSelectedProduct(null); // Close description when changing subcategory
  };

  // Toggle product description
  const handleProductClick = (product) => {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null); // Close description if the same product is clicked
    } else {
      setSelectedProduct(product); // Open description for the clicked product
    }
  };

  return (
    <div>
      <Navbar />
      {/* Category selection dropdown */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Shop by Category</h3>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-4 p-2 border rounded"
        >
          <option value="">Select a Category</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory selection dropdown */}
      {selectedCategory && (
        <div className="text-center mt-8">
          <h4 className="text-xl font-semibold text-gray-800">Shop by Subcategory</h4>
          <select
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            className="mt-4 p-2 border rounded"
          >
            <option value="">Select a Subcategory</option>
            {categories[selectedCategory].map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display filtered products */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800">Latest Products</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} onClick={() => handleProductClick(product)} />
              {/* Product description shown below the product card when selected */}
              {selectedProduct && selectedProduct.id === product.id && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                  <h4 className="text-lg font-bold">Product Description</h4>
                  <p className="text-md">{product.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
