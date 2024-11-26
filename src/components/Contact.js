// src/components/Contact.js
import React from 'react';
import Layout from './Layout';

const Contact = () => {
  const teamMembers = [
    { name: 'Shazia Nasreen', email: 'abcd@gmail.com', phone: '+123 456 7890', availability: '9:00 AM - 5:00 PM', bgColor: 'bg-blue-500' },
    { name: 'Member 2', email: 'member2@example.com', phone: '+123 456 7891', availability: '10:00 AM - 6:00 PM', bgColor: 'bg-green-500' },
    { name: 'Member 3', email: 'member3@example.com', phone: '+123 456 7892', availability: '8:00 AM - 4:00 PM', bgColor: 'bg-red-500' },
    { name: 'Member 4', email: 'member4@example.com', phone: '+123 456 7893', availability: '12:00 PM - 8:00 PM', bgColor: 'bg-yellow-500' },
    { name: 'Member 5', email: 'member5@example.com', phone: '+123 456 7894', availability: '7:00 AM - 3:00 PM', bgColor: 'bg-purple-500' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`${member.bgColor} text-white p-6 rounded-lg shadow-lg`}>
              <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
              <p className="mb-2">Email: <a href={`mailto:${member.email}`} className="text-white underline">{member.email}</a></p>
              <p className="mb-2">Phone: {member.phone}</p>
              <p className="mb-2">Availability: {member.availability}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
