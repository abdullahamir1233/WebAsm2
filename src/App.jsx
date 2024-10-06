import React from 'react';
import './index.css'; // Ensure this imports your Tailwind or global CSS file
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AnalyticsCard from './components/AnalyticsCard';
import RecentMovement from './components/RecentMovement';

const App = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="container mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <AnalyticsCard title="Sales" value="2,382" percentageChange="-3.65%" changeDirection="danger" />
                    <AnalyticsCard title="Visitors" value="14,212" percentageChange="5.25%" changeDirection="success" />
                    <RecentMovement /> {/* Add Recent Movement Component */}
                </div>
            </div>
        </div>
    );
};

export default App;
