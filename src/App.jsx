import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AnalyticsCard from './components/AnalyticsCard';
import RecentMovement from './components/RecentMovement';
import MenuSection from './components/MenuSection';
import FeaturedSection from './components/FeaturedSection';
import AboutSection from './components/AboutSection'; 
import ChefsSection from './components/ChefsSection'; 
import GallerySection from './components/GallerySection'; 
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import BannerSection from './components/BannerSection';
import ReviewSection from './components/ReviewSection';
import FooterSection from './components/FooterSection';
import SampleButtonsSection from './components/SampleButtonsSection'; 
import TableSection from './components/TableSection'; 
import HeaderSection from './components/HeaderSection'; // Import HeaderSection

const App = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 h-screen fixed bg-gray-900 text-white">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64">
                {/* Header Section */}
                <HeaderSection /> {/* Add the HeaderSection here */}

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

                    {/* Banner Section */}
                    <BannerSection />

                    {/* Menu Section */}
                    <MenuSection />

                    {/* Featured Section */}
                    <FeaturedSection />

                    {/* About Section */}
                    <AboutSection />

                    {/* Chefs Section */}
                    <ChefsSection />

                    {/* Gallery Section */}
                    <GallerySection />

                    {/* Review Section */}
                    <ReviewSection />

                    {/* Table Section */}
                    <TableSection />

                    {/* Blog Section */}
                    <BlogSection />

                    {/* Contact Section */}
                    <ContactSection />
                </div>

                {/* Footer Section */}
                <FooterSection />
            </div>
        </div>
    );
};

export default App;
