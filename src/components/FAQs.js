// src/components/FAQs.js
import React from 'react';
import Layout from './Layout';

const faqs = [
  { question: 'What is the size guide for your clothing?', answer: 'You can find our size guide on each product page.' },
  { question: 'How can I track my order?', answer: 'Once your order is shipped, we will send you a tracking number.' },
  { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to most countries.' },
  { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and other secure payment methods.' },
  { question: 'Can I change or cancel my order?', answer: 'Once an order is placed, it is processed quickly. Please contact us immediately if you need to make changes.' },
  { question: 'How do I return or exchange an item?', answer: 'We offer a 30-day return and exchange policy.' },
  { question: 'Are your clothes ethically made?', answer: 'Yes, we take sustainability and ethical practices seriously.' }
];

const FAQs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
