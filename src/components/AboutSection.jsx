// AboutSection.jsx
import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="about section py-20 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6">
                    <h3 className="text-3xl font-semibold mb-4">About Us</h3>
                    <p className="mb-4">
                        Welcome to our restaurant, where we serve delicious meals made from the freshest ingredients. 
                        Our chefs are dedicated to providing an exceptional dining experience for every guest.
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Quality ingredients sourced locally.</li>
                        <li>A diverse menu catering to all tastes.</li>
                        <li>A warm and welcoming atmosphere.</li>
                    </ul>
                    <p>
                        Join us for a delightful dining experience that you won't forget!
                    </p>
                </div>
                <div className="md:w-1/2 p-6">
                    {/* Add your image here */}
                    <img src="assets/images/about.jpg" alt="About Us" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
