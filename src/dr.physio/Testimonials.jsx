import React, { useEffect, useState } from 'react'

const testimonials = [
    {
      name: "John Doe",
      text: "This is an amazing service! I would highly recommend it.",
      company: "Company A"
    },
    {
      name: "Jane Smith",
      text: "A wonderful experience from start to finish.",
      company: "Company B"
    },
    {
      name: "Mark Johnson",
      text: "Top-notch customer service. Very satisfied.",
      company: "Company C"
    },
    {
      name: "Emily Davis",
      text: "Simply the best! Exceeded all my expectations.",
      company: "Company D"
    }
  ];
  
function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
         <div className="testimon-discr">
            <div className="sub-headings">Words of Appreciation</div>
            <div className="para" id='action/3.1'>Here some heartfelt reflections of those we've had the pleasure of serving. We are deeply grateful for the kindness and trust shown by our valued customers and partners.</div>
        </div>
        <div className="testimonial-carousel">
      <div className="testimonial-card">
        <p>{testimonials[currentIndex].text}</p>
        <h5>{testimonials[currentIndex].name}</h5>
      </div>

      {/* <button onClick={prevTestimonial}>Prev</button>
      <button onClick={nextTestimonial}>Next</button> */}
    </div>
    </div>
  )
}

export default Testimonials