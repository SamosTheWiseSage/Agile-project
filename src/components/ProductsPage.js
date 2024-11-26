// src/components/ProductsPage.js
import React from 'react';
import Layout from './Layout';

// Define product data (array of objects)
const products = [
    {
        name: "Urban Pulse",
        description: "Stylish urban wear to elevate your street look!",
        price: "SEK 599.99",
        image: "card11.jfif",
    },
    {
        name: "StreetLab",
        description: "Perfect for the modern, street-savvy fashionista.",
        price: "SEK 499.99",
        image: "card12.jpg",
    },
    {
        name: "Vibe Theory",
        description: "Dive into the vibes of your next adventure.",
        price: "SEK 699.99",
        image: "card13.jfif",
    },
    {
        name: "Midnight Culture",
        description: "For those who thrive under the moonlight.",
        price: "SEK 799.99",
        image: "card14.webp",
    },
    {
        name: "Hype Haven",
        description: "The latest in streetwear and high-end fashion.",
        price: "SEK 699.99",
        image: "card15.webp",
    },
    {
        name: "GrimeWave",
        description: "Grunge meets the streets in this edgy collection.",
        price: "SEK 599.99",
        image: "card16.jpg",
    },
    {
        name: "Offbeat Threads",
        description: "For the rebels who go against the norm.",
        price: "SEK 499.99",
        image: "card17.webp",
    },
    {
        name: "Nocturnal Apparel",
        description: "Explore the darkness with our bold designs.",
        price: "SEK 799.99",
        image: "card23.jfif",
    },
    {
        name: "Neon District",
        description: "Step into the neon glow and light up your style.",
        price: "SEK 659.99",
        image: "card19.webp",
    },
    {
        name: "Sidewalk Syndicate",
        description: "Join the movement and represent the streets.",
        price: "SEK 599.99",
        image: "card20.avif",
    },
    {
        name: "RawStreet Collective",
        description: "Embrace the rawness and power of street culture.",
        price: "SEK 699.99",
        image: "card21.jpg",
    },
    {
        name: "Vandal Vision",
        description: "Revolutionary designs for the bold and brave.",
        price: "SEK 899.99",
        image: "card22.avif",
    }
];

const ProductsPage = () => {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <p className="text-gray-600 mb-3">{product.price}</p>
                  <a href="cart.html">
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Shop Now</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  };
  
  export default ProductsPage;
