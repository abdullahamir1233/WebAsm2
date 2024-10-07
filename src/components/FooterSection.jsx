import React from 'react';

const FooterSection = () => {
    return (
        <footer className="footer-area section-gap bg-gray-800 text-white py-10">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <h6>About Us</h6>
                        <p>
                            We are passionate about delivering the best coffee experience. 
                            Our mission is to bring high-quality coffee and delightful moments to every cup.
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <h6>Newsletter</h6>
                        <p>Stay updated with our latest offers and news</p>
                        <form className="flex">
                            <input
                                type="email"
                                className="form-control mr-2 rounded"
                                placeholder="Enter Email"
                                required
                            />
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <h6>Follow Us</h6>
                        <div className="footer-social d-flex align-items-center">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 text-center">
                        <p className="footer-text">
                            &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by Colorlib
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
