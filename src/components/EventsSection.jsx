import React from 'react';

const EventsSection = () => {
  return (
    <section id="events" className="events section bg-gray-100 py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
        <p className="text-center mb-8 text-gray-600">Join us for our exciting events!</p>

        <div className="swiper init-swiper" data-aos="fade-up" data-aos-delay="100">
          <script type="application/json" className="swiper-config">
            {`
              {
                "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 5000
                },
                "slidesPerView": "auto",
                "pagination": {
                  "el": ".swiper-pagination",
                  "type": "bullets",
                  "clickable": true
                }
              }
            `}
          </script>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold">Birthday Parties</h3>
                <div className="price mb-4">
                  <p className="text-lg font-bold text-green-600"><span>$189</span></p>
                </div>
                <p className="text-gray-600 mb-4">
                  Celebrate your special day with us! We offer customizable birthday party packages.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Customizable party themes.</li>
                  <li>Delicious catering options.</li>
                  <li>Professional event planning.</li>
                </ul>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
                  Learn More
                </button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold">Private Parties</h3>
                <div className="price mb-4">
                  <p className="text-lg font-bold text-green-600"><span>$290</span></p>
                </div>
                <p className="text-gray-600 mb-4">
                  Host your private gatherings with elegance in our spacious venue.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Exclusive access to our venue.</li>
                  <li>Customized menu options.</li>
                  <li>Dedicated event staff.</li>
                </ul>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
                  Learn More
                </button>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold">Custom Parties</h3>
                <div className="price mb-4">
                  <p className="text-lg font-bold text-green-600"><span>$99</span></p>
                </div>
                <p className="text-gray-600 mb-4">
                  Whether it’s a small gathering or a grand celebration, we cater to your needs.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Tailored party packages.</li>
                  <li>Flexible venue options.</li>
                  <li>Excellent catering services.</li>
                </ul>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
