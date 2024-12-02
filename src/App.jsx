import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'; // Import your Auth context

// Import your Firebase initialization
import { initializeApp } from "firebase/app";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDV5AgxSRpkSmq2cfP8SpnC_fgmWJ2ckno",
  authDomain: "sprint3-46b0c.firebaseapp.com",
  databaseURL: "https://sprint3-46b0c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sprint3-46b0c",
  storageBucket: "sprint3-46b0c.firebasestorage.app",
  messagingSenderId: "504363530378",
  appId: "1:504363530378:web:17d943a81d35e8d7a8d573"
};

// Initialize Firebase app and get the database reference
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // This initializes the Firebase Realtime Database

// Components (assuming you have them as per your initial example)
import Home from './components/Home';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import ProductsPage from './components/ProductsPage';
import About from './components/About';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import SecondHandShop from './components/SecondHandShop';

const App = () => {
  const { user, isAuthenticated } = useContext(AuthContext); // Access user state and authentication functions
  const [data, setData] = useState([]); // State to hold data fetched from Firebase

  // Protect admin routes
  const ProtectedRoute = ({ element, requiredRole }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    if (requiredRole === 'admin' && (!user || user.role !== 'admin')) {
      return <Navigate to="/" />;
    }

    return element;
  };

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const collectionRef = ref(database, "your_collection"); // Reference to your Firebase DB collection
    
    // Fetch data when the component mounts
    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const displayItem = Object.values(dataItem); // Convert object to array
          setData(displayItem); // Store data in state
        }
      });
    };

    fetchData(); // Fetch the data
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />

        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Route - Protected */}
        <Route 
          path="/admin" 
          element={<ProtectedRoute element={<AdminPanel />} requiredRole="admin" />} 
        />

        {/* Second Hand Shop Route */}
        <Route path="/second-hand-shop" element={<SecondHandShop />} />
      </Routes>

      {/* Display the fetched data from Firebase */}
      <div>
        <h1>Data from database:</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li> // Render each item from Firebase
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default App;
