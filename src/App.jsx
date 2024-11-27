// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import ProductsPage from './components/ProductsPage';
import About from './components/About';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import SecondHandShop from './components/SecondHandShop'; // Import SecondHandShop component
import { AuthContext } from './context/AuthContext'; // Import AuthContext

const App = () => {
  const { user, login, logout, isAuthenticated } = useContext(AuthContext); // Access user state and authentication functions

  // Function to protect admin routes
  const ProtectedRoute = ({ element, requiredRole }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    if (requiredRole === 'admin' && (!user || user.role !== 'admin')) {
      return <Navigate to="/" />; // Redirect to home if not admin
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
        <Route 
          path="/login" 
          element={<LoginPage />} // Directly using LoginPage (handled by AuthContext)
        />
        
        {/* Admin Page Route - Protected */}
        <Route 
          path="/admin" 
          element={<ProtectedRoute element={<AdminPanel />} requiredRole="admin" />} 
        />

        {/* Second Hand Shop Route */}
        <Route 
          path="/second-hand-shop" 
          element={<SecondHandShop />} // Add the new route for second hand shop
        />
      </Routes>
    </Router>
  );
};

export default App;
