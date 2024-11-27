import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';

// Uppdaterad produktdata med kategorier och underkategorier
const products = [
  {
    name: 'Urban Pulse',
    description: 'Stylish urban wear to elevate your street look!',
    price: 'SEK 599.99',
    image: 'card11.jfif',
    category: 'Tröjor', // Kategori
    subcategory: 'Sweatshirt', // Underkategori
  },
  {
    name: 'StreetLab',
    description: 'Perfect for the modern, street-savvy fashionista.',
    price: 'SEK 499.99',
    image: 'card12.jpg',
    category: 'Byxor',
    subcategory: 'Jeans', // Underkategori
  },
  {
    name: 'Vibe Theory',
    description: 'Dive into the vibes of your true self with unique designs.',
    price: 'SEK 499.00',
    image: 'card13.jpg',
    category: 'Skor',
    subcategory: 'Sneakers', // Underkategori
  },
  {
    name: 'Babatunde',
    description: 'Dive into the vibes of your true self with unique designs.',
    price: 'SEK 699.00',
    image: 'card13.jpg',
    category: 'Jackor',
    subcategory: 'Bomber Jacket', // Underkategori
  },
];

// Kategorier och underkategorier
const categories = {
  'Tröjor': ['Sweatshirt', 'T-shirt', 'Hoodie'],
  'Byxor': ['Jeans', 'Sweatpants', 'Shorts'],
  'Skor': ['Sneakers', 'Boots', 'Sandals'],
  'Jackor': ['Bomber Jacket', 'Blazer', 'Parka'],
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtrera produkter baserat på kategori och underkategori
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

        {/* Dropdown för att välja kategori */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-semibold text-gray-700">Select Category</label>
          <select
            id="category"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory(''); // Återställ underkategori när kategori ändras
            }}
          >
            <option value="">All Categories</option>
            {Object.keys(categories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Dropdown för att välja underkategori, om en kategori är vald */}
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

        {/* Visa produktkort baserat på filtrerade produkter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} onClick={handleCardClick} />
          ))}
        </div>

        {/* Visa detaljer för vald produkt */}
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