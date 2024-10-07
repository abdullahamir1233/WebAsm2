import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AnalyticsCard from './components/AnalyticsCard';
import RecentMovement from './components/RecentMovement';
import MenuSection from './components/MenuSection';
import FeaturedSection from './components/FeaturedSection';
import TestimonialsSection from './components/TestimonialsSection'; 
import BlogSection from './components/BlogSection'; // Import the BlogSection
import ContactSection from './components/ContactSection'; // Import the ContactSection

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-4">
          {/* Analytics and Recent Movements */}
          <div className="container mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <AnalyticsCard title="Sales" value="2,382" percentageChange="-3.65%" changeDirection="danger" />
            <AnalyticsCard title="Visitors" value="14,212" percentageChange="5.25%" changeDirection="success" />
            <RecentMovement />
          </div>

          {/* Menu Section */}
          <MenuSection />

          {/* Featured Section */}
          <FeaturedSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Blog Section */}
          <BlogSection />

          {/* Contact Section */}
          <ContactSection /> {/* Add the contact section here */}
        </div>
      </div>
    </div>
  );
};

export default App;
