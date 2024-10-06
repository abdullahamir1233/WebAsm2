// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
      <div className="links mt-2">
        <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
        <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
        <a href="/contact" className="hover:underline mx-2">Contact Us</a>
      </div>
      <div className="social-icons mt-2">
        <a href="https://facebook.com" className="hover:underline mx-2">Facebook</a>
        <a href="https://twitter.com" className="hover:underline mx-2">Twitter</a>
        <a href="https://instagram.com" className="hover:underline mx-2">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
