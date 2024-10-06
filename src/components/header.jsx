// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl font-bold">ShopEase</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Products</a>
        <a href="/cart" className="hover:underline">Cart</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 rounded text-black"
        />
      </div>
    </header>
  );
};

export default Header;
