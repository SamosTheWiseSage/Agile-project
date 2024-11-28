import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getProducts, updateProduct } from '../data/mockDatabase';
import Navbar from './Navbar';

const AdminPanel = () => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  // Ensure only admin can access this panel
  useEffect(() => {
 
  }, [role, navigate]);

  const [products, setProducts] = useState(getProducts());
  const [history, setHistory] = useState([]); // Track history of changes

  const handleEditProduct = (id, name, imageUrl, category, description) => {
    // Prompt user for new product information
    const newName = prompt('Edit product name:', name);
    const newImageUrl = prompt('Edit product image URL:', imageUrl);
    const newCategory = prompt('Edit product category:', category);
    const newDescription = prompt('Edit product description:', description);

    if (newName && newImageUrl && newCategory && newDescription) {
      // Create a history entry before updating
      const change = {
        productId: id,
        changes: {
          name: { old: name, new: newName },
          imageUrl: { old: imageUrl, new: newImageUrl },
          category: { old: category, new: newCategory },
          description: { old: description, new: newDescription },
        },
        timestamp: new Date().toLocaleString(),
      };

      // Update the product in the mock database
      const updatedProduct = { id, name: newName, imageUrl: newImageUrl, category: newCategory, description: newDescription };
      updateProduct(updatedProduct);

      // Log the change to the history after product update
      setHistory((prevHistory) => [change, ...prevHistory]); // Add new change at the beginning of the history

      // Update the product list to reflect changes
      setProducts(getProducts()); // Refresh the products list to reflect changes
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Include the Navbar, which has the dropdown menu */}
      <Navbar />

      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gray-700 rounded-lg">
        <h2 className="text-3xl text-center font-semibold mb-6">Admin Panel</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Manage Products</h3>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={`assets/${product.imageUrl}`} 
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <p className="text-lg">{product.name}</p>
                </div>
                <button
                  onClick={() => handleEditProduct(product.id, product.name, product.imageUrl, product.category, product.description)}
                  className="py-1 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* History Section */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">History of Changes</h3>
          {history.length === 0 ? (
            <p>No changes yet.</p>
          ) : (
            <ul className="space-y-4">
              {history.map((entry, index) => (
                <li key={index} className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold">Product ID: {entry.productId}</h4>
                  <p><strong>Timestamp:</strong> {entry.timestamp}</p>
                  <ul className="mt-2">
                    {Object.keys(entry.changes).map((key) => (
                      <li key={key}>
                        <strong>{key}:</strong> {entry.changes[key].old} → {entry.changes[key].new}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

