import React, { useState } from 'react';

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState('lunch');

    return (
        <section id="menu" className="menu section py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
                <p className="text-gray-600 mb-8">Check Our Yummy Menu</p>
            </div>

            <div className="container mx-auto">
                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        className={`px-4 py-2 text-lg font-semibold ${activeTab === 'lunch' ? 'text-white bg-blue-600' : 'text-blue-600 bg-white border'}`}
                        onClick={() => setActiveTab('lunch')}
                    >
                        Lunch
                    </button>
                    <button
                        className={`px-4 py-2 text-lg font-semibold ${activeTab === 'dinner' ? 'text-white bg-blue-600' : 'text-blue-600 bg-white border'}`}
                        onClick={() => setActiveTab('dinner')}
                    >
                        Dinner
                    </button>
                </div>

                {/* Content for Tabs */}
                <div className="tab-content">
                    {activeTab === 'lunch' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <MenuItem name="Magnam Tiste" ingredients="Lorem ipsum" price="$5.95" image="assets/img/menu/menu-item-1.png" />
                            <MenuItem name="Aut Luia" ingredients="Lorem ipsum" price="$14.95" image="assets/img/menu/menu-item-2.png" />
                            <MenuItem name="Est Eligendi" ingredients="Lorem ipsum" price="$8.95" image="assets/img/menu/menu-item-3.png" />
                        </div>
                    )}

                    {activeTab === 'dinner' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <MenuItem name="Eos Luibusdam" ingredients="Lorem ipsum" price="$12.95" image="assets/img/menu/menu-item-4.png" />
                            <MenuItem name="Laboriosam Direva" ingredients="Lorem ipsum" price="$9.95" image="assets/img/menu/menu-item-5.png" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const MenuItem = ({ name, ingredients, price, image }) => {
    return (
        <div className="menu-item text-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
            <img src={image} className="menu-img mx-auto mb-4 rounded-lg" alt={name} />
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="text-gray-600">{ingredients}</p>
            <p className="text-blue-600 font-bold">{price}</p>
        </div>
    );
};

export default MenuSection;
