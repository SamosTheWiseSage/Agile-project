// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Adjust if Home is in a different folder
import Contact from './components/Contact'; // Adjust if Contact is in a different folder
import FAQs from './components/FAQs'; // Adjust if FAQs is in a different folder
import ProductsPage from './components/ProductsPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} /> {/* Add this route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
};

export default App;
