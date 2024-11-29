import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ShoesHome from './Images/ShoesHome.webp';
import BagHome from './Images/StreetwareBag.webp';
import JacketHome from './Images/Streetware Jacket.webp';
// Sample data for the latest products
const latestProducts = [
  { id: 1, name: 'Skor!!!', image: ShoesHome},
  { id: 2, name: 'Väska!!!', image: BagHome},
  { id: 3, name: 'Jacka!!!!', image: JacketHome },
];

const Home = () => {
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Cool Fashion</h2>
        <p className="text-gray-600 mt-2 text-lg">Designed to captivate and engage your audience</p>
      </div>

      {/* Shop by Category Section */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Shop by Category</h3>
        <div className="mt-4 space-x-6">
          <Link to="/products?category=Tröjor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Tröjor</Link>
          <Link to="/products?category=Byxor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Byxor</Link>
          <Link to="/products?category=Skor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Skor</Link>
          <Link to="/products?category=Jackor" className="bg-gray-800 text-white py-2 px-6 rounded-lg">Jackor</Link>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800">Explore Our Latest Products</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white p-6 rounded-lg shadow-lg overflow-hidden"
            >
              <div onClick={() => openModal(product.image)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                />
                <h4 className="text-xl font-bold text-gray-800">{product.name}</h4>
                <p className="text-xl font-semibold text-blue-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Enlarged product"
              className="w-full h-auto max-w-3xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
