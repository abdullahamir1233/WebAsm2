import React from 'react';

const AnalyticsCard = ({ title, value, percentageChange, changeDirection }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h5 className="text-gray-700">{title}</h5>
            <h1 className="text-2xl font-bold text-gray-900 mt-2">{value}</h1>
            <div className={`mt-2 ${changeDirection === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                <span className="font-semibold">{percentageChange}</span>
                <span className="text-gray-500"> Since last week</span>
            </div>
        </div>
    );
};

export default AnalyticsCard;
