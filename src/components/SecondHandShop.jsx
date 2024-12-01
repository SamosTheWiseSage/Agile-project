// src/components/SecondHandShop.jsx
import React from 'react';
import Navbar from './Navbar';  // Import Navbar component
import Footer from './Footer';  
import Stockimg1 from './Images/Streetware Jacket.webp';  
import Stockimg2 from './Images/StreetwareSecondhandPants.webp';  
import Stockimg3 from './Images/shoes4.webp';  
import Stockimg4 from './Images/SeacondhangStreetwareShirt.webp';  
import Stockimg5 from './Images/StreetwareSeacondHandShoe.webp';  
import Stockimg6 from './Images/MoclerSeacondHandJacket.webp';  
// Sample data for second-hand items with images and prices
const sampleItems = [
  { id: 1, name: 'Tröja', description: 'Ny tröja inte använd', image: Stockimg1, price: '150kr' },
  { id: 2, name: 'Byxor', description: 'Vintage street byxor.', image: Stockimg2, price: '800kr' },
  { id: 3, name: 'Skor', description: 'Använda skor fast ser helt nya ut.', image: Stockimg3, price: '120kr' },
  { id: 4, name: 'Tröja retro', description: 'Tröja retro från 90 talet.', image: Stockimg4, price: '250kr' },
  { id: 5, name: 'Skor jordan', description: 'Jordan 1 mochas knappt använda.', image: Stockimg5, price: '500kr' },
  { id: 6, name: 'Jacka Mocler', description: 'Riktig Moncler från kina absolut inte falsk.', image: Stockimg6, price: '5kr' },
];

// SecondHandShop Component
const SecondHandShop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Second Hand Shop Items */}
      <div className="flex-grow p-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Second Hand Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 my-2">{item.description}</p>
              <p className="text-xl font-semibold text-red-900">{item.price}</p>
              <button className="mt-4 w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700">
                Kontakta säljare
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SecondHandShop;
