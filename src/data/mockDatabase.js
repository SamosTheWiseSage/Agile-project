// src/data/mockDatabase.js

let database = {
  users: [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'user123', role: 'user' }
  ],
  products: [
    { id: 1, name: 'Product 1', imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', imageUrl: 'product2.jpg' }
  ]
};

const products = [
  // Example product data
  { id: 1, name: 'Product 1', imageUrl: 'product1.jpg', category: 'Jackor', subcategory: 'Hehehhe',description: 'Description of product 1' },
  { id: 2, name: 'Product 2', imageUrl: 'product2.jpg', category: 'Tröjor', subcategory: 'Hoodie',description: 'Description of product 2' },
];


// Function to load the mock database
export const loadDatabase = () => {
  return database;
};

// Function to save the mock database (this example doesn't do anything with persistence, it's just in memory)
export const saveDatabase = (newDatabase) => {
  database = newDatabase;
};

// Function to authenticate the user
export const authenticateUser = (username, password) => {
  return database.users.find(user => user.username === username && user.password === password);
};

// Function to get all products
export const getProducts = () => {
  return products;
};

// Function to update a product
export const updateProduct = (updatedProduct) => {
  const index = products.findIndex(product => product.id === updatedProduct.id);
  if (index !== -1) {
    // Update the product in the array
    products[index] = updatedProduct;
  }
};
