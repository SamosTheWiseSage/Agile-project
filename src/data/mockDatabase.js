// src/data/mockDatabase.js

const loadDatabase = () => {
    // Load users and products from localStorage, or set default values if not found
    const users = JSON.parse(localStorage.getItem('users')) || [
      { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
      { id: 2, username: 'user1', password: 'user123', role: 'user' },
    ];
  
    const products = JSON.parse(localStorage.getItem('products')) || [
      { id: 1, name: 'T-Shirt', imageUrl: '/images/tshirt.jpg' },
      { id: 2, name: 'Hoodie', imageUrl: '/images/hoodie.jpg' },
    ];
  
    return { users, products };
  };
  
  const saveDatabase = (database) => {
    // Store users and products in localStorage
    localStorage.setItem('users', JSON.stringify(database.users));
    localStorage.setItem('products', JSON.stringify(database.products));
  };
  
  const addNewUser = (newUser) => {
    const database = loadDatabase();
    database.users.push(newUser);
    saveDatabase(database);
  };
  
  const updateProduct = (updatedProduct) => {
    const database = loadDatabase();
    const updatedProducts = database.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    database.products = updatedProducts;
    saveDatabase(database);
  };
  
  const addNewProduct = (newProduct) => {
    const database = loadDatabase();
    database.products.push(newProduct);
    saveDatabase(database);
  };
  
  export { loadDatabase, saveDatabase, addNewUser, updateProduct, addNewProduct };
  