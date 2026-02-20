// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';

const testimonialsContent = [
  {
    id: 1,
    quote: "Joining this Queenster university was the best decision I ever made. The faculty are incredibly supportive, and the resources available are top-notch. I've grown so much both academically and personally.",
    author: "Jane Doe",
    program: "Computer Science",
    image: "https://via.placeholder.com/100x100/c9a24d/1f3a63?text=JD",
  },
  {
    id: 2,
    quote: "The campus life is vibrant, and I've met so many amazing people from all over the world. The practical experience I gained through my program has been invaluable for my career.",
    author: "John Smith",
    program: "Business Administration",
    image: "https://via.placeholder.com/100x100/1f3a63/c9a24d?text=JS",
  },
  {
    id: 3,
    quote: "I was challenged to think critically and creatively every day. The research opportunities are outstanding, and I feel well-prepared for my future endeavors.",
    author: "Emily White",
    program: "Physics",
    image: "https://via.placeholder.com/100x100/c9a24d/1f3a63?text=EW",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsContent.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsContent.length) % testimonialsContent.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsContent.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="slider-container">
          <div className="testimonials-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonialsContent.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-author-info">
                  <img src={testimonial.image} alt={testimonial.author} className="testimonial-author-img" />
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-program">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-arrow prev" onClick={goToPrev}>&#10094;</button>
          <button className="slider-arrow next" onClick={goToNext}>&#10095;</button>
          <div className="slider-dots">
            {testimonialsContent.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;