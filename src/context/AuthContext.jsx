// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../data/mockDatabase';  // Import authenticateUser from mockDatabase

// Creating the context
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store logged-in user
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  useEffect(() => {
    // Check if there's a logged-in user in localStorage (optional)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // Function to log in the user
  const login = (username, password) => {
    const authenticatedUser = authenticateUser(username, password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(authenticatedUser)); // Store in localStorage for persistence
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user'); // Remove from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider; // Ensure it's exported as default

