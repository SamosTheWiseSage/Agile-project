import React, { useState } from 'react';
import Navbar from './Navbar';  // Import the Navbar component

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>&copy; 2024 MyWebsite. All rights reserved.</p>
    </footer>
  );
};

// Contact Form Component
const Contact = () => {
  // State for managing form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
      setPopupVisible(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000);
    }, 1500); // Simulate a delay for form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar is included here */}
      <Navbar />

      {/* Contact Form Section */}
      <div className="flex-grow p-6">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Describe your problem..."
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Fake Pop-up */}
      {popupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h3 className="text-xl font-semibold text-green-500">Message Sent!</h3>
            <p className="text-gray-700 mt-2">Your message has been successfully sent. We will get back to you soon!</p>
          </div>
        </div>
      )}

      {/* Footer is included here */}
      <Footer />
    </div>
  );
};

export default Contact;
