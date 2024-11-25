import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Member 1 */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Shazia Nasreen</h3>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:abcd@gmail.com" className="text-white underline">
              abcd@gmail.com
            </a>
          </p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-2">Availability: 9:00 AM - 5:00 PM</p>
        </div>

        {/* Member 2 */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Ali Aslam</h3>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:aliallah@example.com" className="text-white underline">
              aliallah@example.com
            </a>
          </p>
          <p className="mb-2">Phone: +123 987 6543</p>
          <p className="mb-2">Availability: 10:00 AM - 6:00 PM</p>
        </div>

        {/* Member 3 */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Sana Ali</h3>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:sanaali@example.com" className="text-white underline">
              sanaali@example.com
            </a>
          </p>
          <p className="mb-2">Phone: +123 456 1122</p>
          <p className="mb-2">Availability: 11:00 AM - 7:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
