import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getProducts, updateProduct } from '../data/mockDatabase'; // Corrected import path
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  if (role !== 'admin') {
    // If not an admin, redirect to home page
    navigate('/');
  }

  const [products, setProducts] = useState(getProducts());

  const handleEditProduct = (id, name, imageUrl) => {
    const newName = prompt('Edit product name:', name);
    const newImageUrl = prompt('Edit product image URL:', imageUrl);

    if (newName && newImageUrl) {
      updateProduct(id, { name: newName, imageUrl: newImageUrl });
      setProducts(getProducts()); // Refresh the list after update
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">Admin Panel</h2>
      <div>
        <h3 className="text-xl font-semibold mb-4">Manage Products</h3>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <div>
                <p>{product.name}</p>
                <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover" />
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
    </div>
  );
};

export default AdminPanel;
