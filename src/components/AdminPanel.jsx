import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import
import { AuthContext } from '../context/AuthContext';
import { getProducts, updateProduct } from '../data/mockDatabase'; // Import mock DB functions
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the shared Navbar component

const AdminPanel = () => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  // Ensure only admin can access this panel
  if (role !== 'admin') {
    navigate('/'); // Redirect if not admin
  }

  const [products, setProducts] = useState(getProducts());

  const handleEditProduct = (id, name, imageUrl) => {
    const newName = prompt('Edit product name:', name);
    const newImageUrl = prompt('Edit product image URL:', imageUrl);

    if (newName && newImageUrl) {
      const updatedProduct = { id, name: newName, imageUrl: newImageUrl };
      updateProduct(updatedProduct); // Update the product in the database
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
                  onClick={() => handleEditProduct(product.id, product.name, product.imageUrl)}
                  className="py-1 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
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

