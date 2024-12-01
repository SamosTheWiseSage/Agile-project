import React, { useState } from 'react';

const ProductCard = ({ product, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer"
      onClick={() => onClick(product)} // Trigger the click event to show description
    >
      <div className="relative">
        <img
          src={product.images ? product.images[currentImageIndex] : product.imageUrl}
          alt={product.name}
          className="product-image w-full h-60 object-cover rounded-lg mb-4"
        />

        {/* Navigation Buttons */}
        {product.images && product.images.length > 1 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center">
            <button
              onClick={handlePrevImage}
              className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &lt;
            </button>
            <button
              onClick={handleNextImage}
              className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &gt;
            </button>
          </div>
        )}

        {/* Thumbnails (Optional) */}
        {product.images && product.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${currentImageIndex === index ? 'border-4 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)} 
              />
            ))}
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-lg text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
