"use client";
import React from "react";
import styles from "./Section10.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.customArrow} ${styles.leftArrow}`}
    >
      {"🞀"}
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.customArrow} ${styles.rightArrow}`}
    >
      {"🞂"}
    </button>
  );
};

const Section10 = ({ articles, topics }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: topics.length,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Find us on the Internet</h1>

        {/* Carousel for Topics */}
        <div className={styles.topics}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            keyBoardControl={true}
            customTransition="all 0.5s"
            containerClass="carousel-container"
          >
            {topics.map((topic, index) => (
              <p
                key={index}
                className={styles.topicItem}
                style={
                  index == 0
                    ? { backgroundColor: "#4a3aff", color: "white" }
                    : {}
                }
              >
                {topic}
              </p>
            ))}
          </Carousel>
        </div>

        {/* Articles Section */}
        <div className={styles.articleContainer}>
          {articles.map((piece, index) => {
            return (
              <div key={index} className={styles.article}>
                <img src={piece.imgUrl} alt="" />
                <h6>{piece.title}</h6>
                <p>{piece.desc}</p>
                <div>
                  {piece.date} <span>🡢</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section10;
