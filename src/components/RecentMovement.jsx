import React from 'react';

const RecentMovement = () => {
    const movements = [
        { id: 1, action: 'New order placed', time: '10 minutes ago' },
        { id: 2, action: 'User signed in', time: '20 minutes ago' },
        { id: 3, action: 'Profile updated', time: '1 hour ago' },
        { id: 4, action: 'New user registered', time: '2 hours ago' },
        { id: 5, action: 'Order delivered', time: '3 hours ago' },
    ];

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h5 className="text-gray-700 mb-3">Recent Movement</h5>
            <ul>
                {movements.map((movement) => (
                    <li key={movement.id} className="border-b py-2">
                        <span className="font-semibold">{movement.action}</span>
                        <span className="text-gray-500 text-sm ml-2">{movement.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentMovement;
