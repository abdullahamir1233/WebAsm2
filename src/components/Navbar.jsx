import React from 'react';
import NotificationDropdown from './NotificationDropdown'; // Import the NotificationDropdown component

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-lg font-bold">AdminKit</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a className="text-white hover:bg-blue-500 px-3 py-2 rounded transition" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a className="text-white hover:bg-blue-500 px-3 py-2 rounded transition" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a className="text-white hover:bg-blue-500 px-3 py-2 rounded transition" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a className="text-white hover:bg-blue-500 px-3 py-2 rounded transition" href="#">
                            Logout
                        </a>
                    </li>
                </ul>
                <NotificationDropdown /> {/* Add NotificationDropdown */}
            </div>
        </nav>
    );
};

export default Navbar;
