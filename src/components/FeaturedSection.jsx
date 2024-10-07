// components/FeaturedSection.jsx

import React from 'react';

const FeaturedSection = () => {
  const featuredItems = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', price: '$12.99' },
    { id: 2, title: 'Margherita Pizza', description: 'A simple pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.', price: '$9.99' },
    { id: 3, title: 'Tiramisu', description: 'A popular coffee-flavored Italian dessert made with ladyfingers, mascarpone, and cocoa.', price: '$6.99' },
  ];

  return (
    <div className="featured-section mt-8">
      <h2 className="text-3xl font-bold mb-4">Featured Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredItems.map((item) => (
          <div key={item.id} className="featured-item bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <span className="text-lg font-bold text-gray-900">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
