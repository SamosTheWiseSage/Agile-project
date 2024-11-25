import React from "react";

function FAQs() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {/* FAQ 1 */}
        <div>
          <h3 className="font-semibold text-lg">What is your return policy?</h3>
          <p className="text-gray-600">
            You can return items within 30 days of purchase for a full refund.
          </p>
        </div>
        {/* FAQ 2 */}
        <div>
          <h3 className="font-semibold text-lg">Do you ship internationally?</h3>
          <p className="text-gray-600">
            Yes, we offer international shipping to most countries.
          </p>
        </div>
        {/* FAQ 3 */}
        <div>
          <h3 className="font-semibold text-lg">How do I track my order?</h3>
          <p className="text-gray-600">
            Once your order has shipped, you will receive a tracking number via
            email.
          </p>
        </div>
        {/* FAQ 4 */}
        <div>
          <h3 className="font-semibold text-lg">Do you offer gift cards?</h3>
          <p className="text-gray-600">Yes, we offer gift cards for purchase.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
