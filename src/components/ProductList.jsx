// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: '$25', image: 'https://example.com/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$30', image: 'https://example.com/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$45', image: 'https://example.com/product3.jpg' },
  // Add more products here
];

const ProductList = () => {
  return (
    <div className="product-list grid grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
