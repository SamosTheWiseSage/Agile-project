// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import ProductsPage from './components/ProductsPage';
import About from './components/About';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage'; // Admin page for managing products, users, etc.
import { loadDatabase, saveDatabase } from './data/mockDatabase'; // Mock database functions

const App = () => {
  const [database, setDatabase] = useState(loadDatabase());
  const [user, setUser] = useState(null); // Track logged-in user

  // Function to update products (for admins)
  const updateProduct = (updatedProduct) => {
    const updatedProducts = database.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    const updatedDatabase = { ...database, products: updatedProducts };
    setDatabase(updatedDatabase);
    saveDatabase(updatedDatabase);
  };

  const addNewProduct = (newProduct) => {
    const updatedDatabase = {
      ...database,
      products: [...database.products, newProduct],
    };
    setDatabase(updatedDatabase);
    saveDatabase(updatedDatabase);
  };

  const addNewUser = (newUser) => {
    const updatedDatabase = {
      ...database,
      users: [...database.users, newUser],
    };
    setDatabase(updatedDatabase);
    saveDatabase(updatedDatabase);
  };

  // Protecting admin routes
  const ProtectedRoute = ({ element, requiredRole }) => {
    if (requiredRole === 'admin' && (!user || user.role !== 'admin')) {
      return <Navigate to="/login" />; // Redirect to login if not admin
    }
    return element;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        
        {/* Login Route */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        
        {/* Admin Page Route - Protected */}
        <Route 
          path="/admin" 
          element={<ProtectedRoute element={<AdminPage database={database} updateProduct={updateProduct} addNewProduct={addNewProduct} addNewUser={addNewUser} />} requiredRole="admin" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
