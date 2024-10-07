// GallerySection.jsx
import React from 'react';

const GallerySection = () => {
    return (
        <section id="gallery" className="gallery section py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
                <p className="text-center mb-12">Some photos from our restaurant</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="gallery-item">
                        {/* Add the image source here */}
                        <a href="assets/img/gallery/gallery-1.jpg" className="glightbox">
                            <img src="assets/img/gallery/gallery-1.jpg" alt="Gallery Item 1" className="img-fluid rounded-lg" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        {/* Add the image source here */}
                        <a href="assets/img/gallery/gallery-2.jpg" className="glightbox">
                            <img src="assets/img/gallery/gallery-2.jpg" alt="Gallery Item 2" className="img-fluid rounded-lg" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        {/* Add the image source here */}
                        <a href="assets/img/gallery/gallery-3.jpg" className="glightbox">
                            <img src="assets/img/gallery/gallery-3.jpg" alt="Gallery Item 3" className="img-fluid rounded-lg" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        {/* Add the image source here */}
                        <a href="assets/img/gallery/gallery-4.jpg" className="glightbox">
                            <img src="assets/img/gallery/gallery-4.jpg" alt="Gallery Item 4" className="img-fluid rounded-lg" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        {/* Add the image source here */}
                        <a href="assets/img/gallery/gallery-5.jpg" className="glightbox">
                            <img src="assets/img/gallery/gallery-5.jpg" alt="Gallery Item 5" className="img-fluid rounded-lg" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        {/* Add the image source here */}
                        <a href="assets/img/gallery/gallery-6.jpg" className="glightbox">
                            <img src="assets/img/gallery/gallery-6.jpg" alt="Gallery Item 6" className="img-fluid rounded-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
