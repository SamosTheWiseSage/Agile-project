import Jacket from '../components/Images/Streetware Jacket.webp';
import Shirt from '../components/Images/StreetwareShirt.webp';
let database = {
  users: [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'user123', role: 'user' }
  ],
  products: [
    { id: 1, name: 'Product 1', imageUrl: Jacket, category: 'Jackor', subcategory: 'Hehehhe', description: 'Description of product 1' },
    { id: 2, name: 'Product 2', imageUrl: Shirt, category: 'Tröjor', subcategory: 'Hoodie', description: 'Description of product 2' },
  ],
  categories: [
    "Tröjor",
    "Byxor",
    "Skor",
    "Jackor"
  ]
};

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
  return database.products;
};

// Function to update a product
export const updateProduct = (updatedProduct) => {
  const index = database.products.findIndex(product => product.id === updatedProduct.id);
  if (index !== -1) {
    // Update the product in the array
    database.products[index] = updatedProduct;
  }
};

// Function to add a new product
export const addProduct = (newProduct) => {
  const id = database.products.length + 1; // Generate a new ID for the product
  const product = {
    id,
    imageUrl: newProduct.imageUrl || 'default-product.jpg', // Use default image if not provided
    name: newProduct.name || '', // Set empty string if no name is provided
    category: newProduct.category || 'Uncategorized', // Default to 'Uncategorized' if no category is provided
    subcategory: newProduct.subcategory || '', // Set empty string if no subcategory is provided
    description: newProduct.description || '', // Set empty string if no description is provided
  };
  database.products.push(product); // Add the product to the database
};

// Function to get all categories
export const getCategories = () => {
  return database.categories;
};

// Function to add a new category
export const addCategory = (category) => {
  if (!database.categories.includes(category)) {
    database.categories.push(category);
  }
};

// Example usage for adding a product
export const exampleAddProduct = () => {
  const newProduct = {
    name: 'New Product',
    category: 'Skor',
    subcategory: 'New Subcategory',
    description: 'This is a new product.',
    // imageUrl tas bort för att använda standardbilden
  };
  addProduct(newProduct);
};

// Example usage for adding a category
export const exampleAddCategory = () => {
  const newCategory = 'Accessories';
  addCategory(newCategory);
};