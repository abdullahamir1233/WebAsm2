// components/TestimonialsSection.jsx

import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'The Spaghetti Carbonara was out of this world! Highly recommend it.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'I loved the Margherita Pizza! It was fresh and delicious.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Michael Brown',
      review: 'Tiramisu is my favorite dessert, and this one did not disappoint!',
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-section mt-8">
      <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
            <div className="flex items-center">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <span key={index} className="text-yellow-500">&#9733;</span> // Star icon
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
                <span key={index} className="text-gray-400">&#9733;</span> // Empty star icon
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
