// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer"
      onClick={() => onClick(product)} // Trigger the click event
    >
      <img
        src={`assets/${product.image}`} // Image path, assuming the image is in assets folder
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-lg text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
