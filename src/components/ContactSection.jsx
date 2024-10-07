// components/ContactSection.jsx

import React from 'react';

const ContactSection = () => {
  return (
    <div className="contact-section mt-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4">Have questions or feedback? We'd love to hear from you!</p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded p-2"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded p-2"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded p-2 col-span-1 md:col-span-2"
          rows="4"
          required
        />
        <button type="submit" className="bg-blue-600 text-white rounded p-2 col-span-1 md:col-span-2">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
