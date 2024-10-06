import React from 'react';

const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar js-sidebar bg-gray-900 text-white h-screen shadow-md">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand text-xl font-bold px-4 py-2" href="index.html">
                    AdminKit
                </a>

                <ul className="sidebar-nav mt-4">
                    <li className="sidebar-header text-gray-400 px-4 py-2">Pages</li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="index.html">
                            <i className="align-middle" data-feather="sliders"></i>
                            <span className="align-middle ml-2">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="pages-profile.html">
                            <i className="align-middle" data-feather="user"></i>
                            <span className="align-middle ml-2">Profile</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="pages-sign-in.html">
                            <i className="align-middle" data-feather="log-in"></i>
                            <span className="align-middle ml-2">Sign In</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="pages-sign-up.html">
                            <i className="align-middle" data-feather="user-plus"></i>
                            <span className="align-middle ml-2">Sign Up</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="pages-blank.html">
                            <i className="align-middle" data-feather="book"></i>
                            <span className="align-middle ml-2">Blank</span>
                        </a>
                    </li>

                    <li className="sidebar-header text-gray-400 px-4 py-2">Tools & Components</li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="ui-buttons.html">
                            <i className="align-middle" data-feather="square"></i>
                            <span className="align-middle ml-2">Buttons</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="ui-forms.html">
                            <i className="align-middle" data-feather="check-square"></i>
                            <span className="align-middle ml-2">Forms</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="ui-cards.html">
                            <i className="align-middle" data-feather="grid"></i>
                            <span className="align-middle ml-2">Cards</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="ui-typography.html">
                            <i className="align-middle" data-feather="align-left"></i>
                            <span className="align-middle ml-2">Typography</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="icons-feather.html">
                            <i className="align-middle" data-feather="coffee"></i>
                            <span className="align-middle ml-2">Icons</span>
                        </a>
                    </li>

                    <li className="sidebar-header text-gray-400 px-4 py-2">Plugins & Addons</li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="charts-chartjs.html">
                            <i className="align-middle" data-feather="bar-chart-2"></i>
                            <span className="align-middle ml-2">Charts</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700 transition-colors" href="maps-google.html">
                            <i className="align-middle" data-feather="map"></i>
                            <span className="align-middle ml-2">Maps</span>
                        </a>
                    </li>
                </ul>

                <div className="sidebar-cta p-4 mt-4 bg-gray-800 rounded">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                        <div className="mb-3 text-sm">
                            Are you looking for more components? Check out our premium version.
                        </div>
                        <div className="d-grid">
                            <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
