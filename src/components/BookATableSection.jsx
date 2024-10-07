import React from 'react';

const BookATableSection = () => {
  return (
    <section id="book-a-table" className="book-a-table section bg-gray-100 py-10">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">Reservation</h2>
        <p className="text-gray-600">Book a Table</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div>
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div>
              <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
            </div>
            <div>
              <input type="date" name="date" className="form-control" id="date" placeholder="Date" required />
            </div>
            <div>
              <input type="time" className="form-control" name="time" id="time" placeholder="Time" required />
            </div>
            <div>
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" required />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" />
          </div>

          <div className="text-center mt-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
            <button type="submit" className="btn btn-primary">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATableSection;
