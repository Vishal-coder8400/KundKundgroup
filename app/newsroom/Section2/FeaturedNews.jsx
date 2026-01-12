"use client";
import React from "react";
import styles from "./FeaturedNews.module.css";

const FeaturedNews = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Featured News Articles</h1>
      <p className={styles.subHeading}>
        Stay updated with the latest milestones, innovations, and recognitions
        from KundKund Group as we continue to lead and inspire across
        industries.
      </p>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Redefining Excellence Across Fintech, Healthtech, Edtech & IT with
            Innovation at the Core
          </h2>
          <p className={styles.description}>
            With a legacy of trust and innovation, KundKund Group empowers
            businesses and individuals through cutting-edge solutions in
            Fintech, Healthcare, Edtech, and IT—delivering measurable impact and
            unmatched client satisfaction across every engagement.
          </p>
          <hr />
          <div>
            <button className={styles.button}>Continue Reading</button>
            <p className={styles.date}>Jan 24, 2024</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/images/IMG_1189.png"
            alt="Featured News"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
