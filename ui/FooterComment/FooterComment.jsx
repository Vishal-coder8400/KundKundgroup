import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./FooterComment.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const testimonials = [
  {
    id: 1,
    text: "Kund Kund Group made my dream of studying at a top college come true! Their personalized guidance and seamless admission process took away all my worries. I'm now pursuing my M.B.A. at one of India's finest institutions, all thanks to their support!",
    name: "Rohit Sharma",
    position: "New Delhi",
  },
  {
    id: 2,
    text: "Managing my investments used to be a hassle with multiple demat accounts. Kund Kund Group’s platform changed everything! Now, I have all my portfolios in one place, with real-time insights and analytics. It's a game-changer for investors like me.",
    name: "Neha Patel",
    position: "Mumbai",
  },
  {
    id: 3,
    text: "The innovative solutions from Kund Kund Group have helped our hospital streamline operations and improve patient care. Their technology-driven approach is truly making healthcare more efficient and accessible.",
    name: "Dr. Sanjay Verma",
    position: "Bengaluru",
  },
  {
    id: 4,
    text: "We partnered with Kund Kund Group for our digital transformation, and the results have been phenomenal. Their IT solutions enhanced our productivity and brought our business into the digital age seamlessly.",
    name: "Aryan Sharma",
    position: "New Delhi",
  },
  {
    id: 5,
    text: "Kund Kund Group is a name you can trust. Their professionalism, dedication, and expertise reflect in every service they offer. Our experience with them has been nothing short of excellent!",
    name: "Priya Nair",
    position: "Chennai",
  },
  {
    id: 6,
    text: "I was overwhelmed by the college admission process until I connected with Kund Kund Group. Their team guided me at every step, from selecting the right course to securing admission in a reputed college. Their support made a huge difference in my career path!",
    name: "Sneha Agarwal",
    position: "Jaipur",
  },
];

const FooterComment = () => {
  return (
    <div className={styles.container}>
      {/* Desktop grid */}
      <div className={styles.desktopGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.commentBox}>
            <div className={styles.stars}>★ ★ ★ ★ ★</div>
            <p>{testimonial.text}</p>
            <div className={styles.author}>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className={styles.mobileCarousel}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          emulateTouch
          showIndicators={false} // <-- Hides the dots
          showArrows={true} // <-- Shows left/right arrows
          autoPlay={true}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.commentBox}>
              <div className={styles.stars}>★ ★ ★ ★ ★</div>
              <p>{testimonial.text}</p>
              <div className={styles.author}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FooterComment;
