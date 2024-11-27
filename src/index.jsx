// src/index.jsx or src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './context/AuthContext'; // Import the correct provider

// Wrap the App component with AuthContextProvider to provide context to the entire app
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
