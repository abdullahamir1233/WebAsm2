import React from 'react';

const ReviewSection = () => {
    const reviews = [
        {
            name: 'Jane Doe',
            rating: 5,
            review: 'Absolutely love this coffee shop! The ambiance is fantastic and the coffee is top-notch.',
        },
        {
            name: 'John Smith',
            rating: 4,
            review: 'Great selection of coffees. The staff is very friendly and knowledgeable.',
        },
        {
            name: 'Emily Johnson',
            rating: 5,
            review: 'The best cappuccino I’ve ever had! I highly recommend trying their pastries as well.',
        },
        {
            name: 'Michael Brown',
            rating: 4,
            review: 'A cozy place to relax with a cup of coffee. Will definitely come back!',
        }
    ];

    return (
        <section className="review-area section-gap py-10 bg-gray-100" id="review">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-10">
                        <div className="title text-center mb-10">
                            <h1 className="text-3xl font-bold">What Our Customers Say</h1>
                            <p className="text-lg text-gray-600">We take pride in our customers' experiences.</p>
                        </div>
                    </div>
                </div>						
                <div className="row">
                    {reviews.map((review, index) => (
                        <div className="col-lg-6 col-md-6 single-review p-4 bg-white rounded shadow-md mb-4" key={index}>
                            <div className="title d-flex flex-row mb-2">
                                <h4 className="text-lg font-semibold">{review.name}</h4>
                                <div className="star flex-grow-1 text-yellow-500">
                                    {[...Array(5)].map((star, i) => (
                                        <span key={i} className={`fa fa-star ${i < review.rating ? 'checked' : 'text-gray-300'}`}></span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700">{review.review}</p>
                        </div>	
                    ))}
                </div>
            </div>	
        </section>
    );
};

export default ReviewSection;
