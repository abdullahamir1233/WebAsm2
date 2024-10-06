import React, { useState } from 'react';

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const notifications = [
        { id: 1, message: 'Update completed', time: '30 minutes ago', type: 'success' },
        { id: 2, message: 'New comment on your post', time: '2 hours ago', type: 'info' },
        { id: 3, message: 'New follower', time: '5 hours ago', type: 'success' },
        { id: 4, message: 'Server downtime alert', time: '1 day ago', type: 'warning' },
    ];

    return (
        <div className="relative">
            <button
                className="text-white hover:bg-blue-500 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <i className="align-middle" data-feather="bell"></i>
                <span className="indicator absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">4</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-2">
                        {notifications.map(notification => (
                            <div key={notification.id} className={`flex justify-between items-center px-4 py-2 border-b ${notification.type === 'success' ? 'text-green-600' : notification.type === 'warning' ? 'text-yellow-600' : 'text-gray-800'}`}>
                                <span>{notification.message}</span>
                                <span className="text-gray-500 text-xs">{notification.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
