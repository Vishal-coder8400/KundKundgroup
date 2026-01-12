"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Section9.module.css";
import React from "react";

const Section9 = ({ testimonials, subtitle }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Custom arrow components
  const CustomLeftArrow = ({ onClick }) => (
    <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={onClick}>
      &#8249;
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      className={`${styles.arrow} ${styles.rightArrow}`}
      onClick={onClick}
    >
      &#8250;
    </button>
  );

  return (
    <div className={styles.container}>
      <h1>Our Success Stories</h1>
      <p>{subtitle}</p>
      <Carousel
        responsive={responsive}
        className={styles.carousel}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {testimonials.map((test, index) => (
          <div key={index} className={styles.carouselElement}>
            {/* <img src={test.img} alt="" /> */}
            <p className={styles.title}>{test.title}</p>
            <p className={styles.desc}>{test.desc}</p>
            <p className={styles.author}>{test.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Section9;
