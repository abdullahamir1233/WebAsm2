// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card border p-4 rounded shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg mb-4">{product.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
