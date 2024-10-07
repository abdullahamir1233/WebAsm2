// ChefsSection.jsx
import React from 'react';

const ChefsSection = () => {
    return (
        <section id="chefs" className="chefs section py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Chefs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="chef-card bg-white rounded-lg shadow-lg p-4 text-center">
                        {/* Add the chef's image here */}
                        <img src="assets/img/chefs/chefs-1.jpg" alt="Chef Walter White" className="rounded-full w-32 h-32 mx-auto mb-4" />
                        <h4 className="text-xl font-bold">Walter White</h4>
                        <span className="text-gray-600">Master Chef</span>
                    </div>
                    <div className="chef-card bg-white rounded-lg shadow-lg p-4 text-center">
                        {/* Add the chef's image here */}
                        <img src="assets/img/chefs/chefs-2.jpg" alt="Chef Sarah Jhonson" className="rounded-full w-32 h-32 mx-auto mb-4" />
                        <h4 className="text-xl font-bold">Sarah Jhonson</h4>
                        <span className="text-gray-600">Patissier</span>
                    </div>
                    <div className="chef-card bg-white rounded-lg shadow-lg p-4 text-center">
                        {/* Add the chef's image here */}
                        <img src="assets/img/chefs/chefs-3.jpg" alt="Chef William Anderson" className="rounded-full w-32 h-32 mx-auto mb-4" />
                        <h4 className="text-xl font-bold">William Anderson</h4>
                        <span className="text-gray-600">Cook</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefsSection;
