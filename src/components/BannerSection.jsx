import React from 'react';

const BannerSection = () => {
    return (
        <section className="banner-area bg-cover bg-center py-20" style={{ backgroundImage: "url('/assets/img/banner-background.jpg')" }}>
            <div className="container mx-auto">
                <div className="row fullscreen d-flex align-items-center justify-content-start">
                    <div className="banner-content col-lg-7 text-left">
                        <h6 className="text-black text-uppercase font-bold tracking-wider">Now you can feel the Energy</h6>
                        <h1 className="text-black text-5xl font-extrabold leading-tight mt-4">
                            Start your day with <br />
                            a perfect cup of Coffee
                        </h1>
                        <p className="text-black text-lg mt-4">
                            Experience the rich flavor and aroma of our handcrafted coffee, sourced from the finest beans around the world.
                        </p>
                        <p className="text-black mt-4">
                            Join us as we embark on a journey of flavor and enjoyment. Whether you are looking for a quick pick-me-up or a leisurely coffee break, our expert baristas are here to ensure you have a memorable experience. 
                        </p>
                        <p className="text-black mt-4">
                            Discover our selection of blends, single origins, and specialty drinks, all crafted with passion and care. Perfect for coffee lovers of all kinds.
                        </p>
                        <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded mt-6 inline-block transition duration-300">Order Your Coffee</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
