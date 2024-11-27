import React, { useState } from 'react';
import Layout from './Layout';
import { loadDatabase } from '../data/mockDatabase'; // Import the mockDatabase to manage users

const Login = () => {
  // State to manage form inputs and login error
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const { users } = loadDatabase();
    
    // Find user in the mock database
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // User found, check role and handle login
      if (user.role === 'admin') {
        alert('Welcome, Admin!');
        // Redirect to admin dashboard or handle admin-specific logic
      } else {
        alert('Welcome, User!');
        // Redirect to regular user dashboard or handle user-specific logic
      }
    } else {
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

