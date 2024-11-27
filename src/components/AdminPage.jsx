// src/components/AdminPage.jsx
import React, { useState } from 'react';

const AdminPage = ({ database, updateProduct, addNewProduct, addNewUser }) => {
  const [newProduct, setNewProduct] = useState({ name: '', imageUrl: '' });

  const handleAddProduct = () => {
    const newProductData = {
      id: database.products.length + 1,
      name: newProduct.name,
      imageUrl: newProduct.imageUrl,
    };
    addNewProduct(newProductData);
    setNewProduct({ name: '', imageUrl: '' }); // Reset form
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <h3>Manage Products</h3>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product Image URL"
          value={newProduct.imageUrl}
          onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Product List</h3>
      <ul>
        {database.products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} width={50} />
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;

