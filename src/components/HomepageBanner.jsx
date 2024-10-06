// HomepageBanner.js
import React from 'react';

const HomepageBanner = () => {
  return (
    <div className="banner relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/banner-image.jpg')" }}>
      <div className="banner-content absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
        <p className="text-lg mb-4">Exclusive deals just for you!</p>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Shop Now</button>
      </div>
    </div>
  );
};

export default HomepageBanner;
