import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductAdmin = ({ productId, userRoles }) => {
  const [product, setProduct] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [categories, setCategories] = useState({}); // New state for categories
  const [selectedCategory, setSelectedCategory] = useState(""); // New state for selected category

  const isAdmin = userRoles.includes("ROLE_ADMIN");

  useEffect(() => {
    // Fetch product details
    axios.get(`/api/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setSelectedCategory(response.data.category); // Set initial category selection
      })
      .catch(error => console.error("Error fetching product:", error));

    // Fetch categories and subcategories (you can get this from your backend or a predefined list)
    axios.get("/api/categories") // This endpoint should return a list of categories with their subcategories
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, [productId]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios.put(`/api/admin/products/${product.id}`, {
      name: product.name,
      mainImage: product.mainImage,
      category: selectedCategory,  // Send the selected category
      subcategory: product.subcategory, // Send the current subcategory or update as needed
    })
      .then(response => {
        setProduct(response.data);
        alert("Product updated successfully!");
      })
      .catch(error => console.error("Error updating product:", error));
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    axios.post(`/api/admin/products/${product.id}/add-image`, {
      url: newImageUrl,
    })
      .then(response => {
        setProduct(response.data);
        setNewImageUrl("");
        alert("Image added successfully!");
      })
      .catch(error => console.error("Error adding image:", error));
  };

  if (!isAdmin) {
    return <div>You are not authorized to edit products.</div>;
  }

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="product-admin">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div>
          <label>Main Image URL:</label>
          <input
            type="text"
            value={product.mainImage}
            onChange={(e) =>
              setProduct({ ...product, mainImage: e.target.value })
            }
          />
        </div>

        {/* Category and Subcategory dropdown */}
        <div>
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory dropdown based on selected category */}
        {selectedCategory && (
          <div>
            <label>Subcategory:</label>
            <select
              value={product.subcategory}
              onChange={(e) =>
                setProduct({ ...product, subcategory: e.target.value })
              }
            >
              {categories[selectedCategory]?.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}

        <button type="submit">Update Product</button>
      </form>

      <form onSubmit={handleAddImage}>
        <div>
          <label>Additional Image URL:</label>
          <input
            type="text"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Add Image</button>
      </form>

      <h3>Current Images</h3>
      <div>
        <img src={product.mainImage} alt="Main Product" width="200" />
        <ul>
          {product.additionalImages.map((image) => (
            <li key={image.id}>
              <img src={image.url} alt="Additional" width="100" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductAdmin;
