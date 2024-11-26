import React from 'react';
import Layout from './Layout'; // Import the Layout component

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* Welcome Message */}
        <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome to My Website!</h1>
          <p className="text-lg text-center">
            We are an online clothing store dedicated to bringing the latest trends to young adults aged 19-30. Our mission is to provide stylish, high-quality apparel that reflects the unique personalities and urban spirit of today’s youth.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Our Mission</h2>
          <p className="text-lg">
            Whether you're looking for casual streetwear, edgy designs, or something that makes a statement, we have something for every style. From classic pieces to cutting-edge trends, we offer a wide variety of options to help you express yourself with confidence. We're constantly updating our collection to bring you fresh designs and new releases every season.
          </p>
        </div>

        {/* Fashion Philosophy */}
        <div className="bg-yellow-500 text-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Our Fashion Philosophy</h2>
          <p className="text-lg">
            We believe that fashion is not just about clothes—it's about attitude. Our goal is to empower you to feel your best and wear what makes you feel unique. With brands that blend street culture, high fashion, and creativity, we are here to redefine your wardrobe.
          </p>
        </div>

        {/* Clothing Brands */}
        <div className="bg-purple-500 text-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Our Clothing Brands</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Urban Pulse</li>
            <li>StreetLab</li>
            <li>Vibe Theory</li>
            <li>Midnight Culture</li>
            <li>Hype Haven</li>
            <li>GrimeWave</li>
            <li>Offbeat Threads</li>
            <li>Nocturnal Apparel</li>
            <li>Neon District</li>
            <li>Sidewalk Syndicate</li>
            <li>RawStreet Collective</li>
            <li>Vandal Vision</li>
          </ul>
        </div>

        {/* Thank You Message */}
        <div className="bg-pink-500 text-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-center">
            Thank you for choosing us for your fashion journey. We hope you find your next favorite outfit here at <span className="font-semibold text-gray-800">My Website</span>. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

