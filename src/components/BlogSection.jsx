// components/BlogSection.jsx

import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Delicious Pasta Recipes',
      excerpt: 'Discover the top 10 pasta recipes that will tantalize your taste buds!',
      date: 'October 1, 2024',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    },
    {
      id: 2,
      title: 'Exploring Exotic Spices',
      excerpt: 'Learn about exotic spices that can elevate your cooking to the next level.',
      date: 'September 28, 2024',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    },
    {
      id: 3,
      title: 'Healthy Eating Habits',
      excerpt: 'Tips and tricks for maintaining a balanced diet while enjoying your meals.',
      date: 'September 20, 2024',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    },
  ];

  return (
    <div className="blog-section mt-8">
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post bg-white rounded-lg shadow-md p-6">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
