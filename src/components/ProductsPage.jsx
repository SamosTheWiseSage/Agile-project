import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import { getProducts, addCategory, addProduct } from '../data/mockDatabase'; // Import mock functions
import { AuthContext } from '../context/AuthContext'; // Import AuthContext for role management

const ProductsPage = () => {
  const { user, isAdmin } = useContext(AuthContext); // Access user and isAdmin from context
  const [products, setProducts] = useState(getProducts());
  const [categories, setCategories] = useState({
    Jackor: ['Hehehhe'],
    Tröjor: ['Hoodie', 'ee'],
    Byxor: ['ByxorTest1'],
    Skor: ['stest', 'stest2'],
  });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    subcategory: '',
    description: '',
    imageUrl: '',
    price: '',
  });
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

  // Handle adding a new category (for admins only)
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory || !newSubcategory) {
      alert('Both category and subcategory are required!');
      return;
    }

    // Update the categories state and call a function to handle adding the new category in the mock database
    setCategories(prevCategories => ({
      ...prevCategories,
      [newCategory]: [...(prevCategories[newCategory] || []), newSubcategory],
    }));

    // Simulate adding a category to the database
    addCategory(newCategory, newSubcategory);

    // Clear the input fields
    setNewCategory('');
    setNewSubcategory('');
  };

  // Handle adding a new product (for admins only)
  const handleAddProduct = (e) => {
    e.preventDefault();
    const { name, category, subcategory, description, imageUrl, price } = newProduct;

    if (!name || !category || !subcategory || !description || !price) {
      alert('All fields are required!');
      return;
    }

    // Add the new product to the database
    const addedProduct = addProduct(newProduct);

    // Update the product list state
    setProducts([...products, addedProduct]);

    // Clear the product form
    setNewProduct({
      name: '',
      category: '',
      subcategory: '',
      description: '',
      imageUrl: '',
      price: '',
    });
  };

  return (
    <div>
      <Navbar />

      {/* Admin-only section to add categories */}
      {isAdmin && (
        <div className="admin-category-form p-6 bg-gray-700 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-white">Add New Category</h3>
          <form onSubmit={handleAddCategory} className="mt-4">
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="p-2 mb-2 w-full border rounded"
            />
            <input
              type="text"
              placeholder="Subcategory Name"
              value={newSubcategory}
              onChange={(e) => setNewSubcategory(e.target.value)}
              className="p-2 mb-2 w-full border rounded"
            />
            <button type="submit" className="p-2 bg-blue-600 text-white rounded">
              Add Category
            </button>
          </form>
        </div>
      )}

      {/* Admin-only section to add new products */}
      {isAdmin && (
        <div className="admin-product-form p-6 bg-gray-700 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-white">Add New Product</h3>
          <form onSubmit={handleAddProduct} className="mt-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="p-2 mb-2 w-full border rounded"
            />
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="p-2 mb-2 w-full border rounded"
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={newProduct.subcategory}
              onChange={(e) => setNewProduct({ ...newProduct, subcategory: e.target.value })}
              className="p-2 mb-2 w-full border rounded"
            >
              <option value="">Select Subcategory</option>
              {newProduct.category && categories[newProduct.category] && categories[newProduct.category].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="p-2 mb-2 w-full border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="p-2 mb-2 w-full border rounded"
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={newProduct.imageUrl}
              onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
              className="p-2 mb-2 w-full border rounded"
            />
            <button type="submit" className="p-2 bg-green-600 text-white rounded">
              Add Product
            </button>
          </form>
        </div>
      )}

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
      <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProducts.map((product) =>
          product && product.id ? (  // Ensure product is valid
            <div key={product.id}>
              <ProductCard product={product} onClick={() => handleProductClick(product)} />
              {selectedProduct && selectedProduct.id === product.id && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                  <h4 className="text-lg font-bold">Product Description</h4>
                  <p className="text-md">{product.description}</p>
                </div>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductsPage;