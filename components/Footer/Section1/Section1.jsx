"use client";
import FooterComment from "../../../ui/FooterComment/FooterComment";
import React, { useState, useEffect } from "react";
import styles from "./Section1.module.css";

const Section1 = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initial count for desktop
  const [screenSize, setScreenSize] = useState("desktop"); // To handle screen size

  const items = [<FooterComment key="1" />];

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("mobile");
        setVisibleCount(3); // Show 3 items for mobile
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet");
        setVisibleCount(3); // Show 4 items for tablet
      } else {
        setScreenSize("desktop");
        setVisibleCount(6); // Show all items for desktop
      }
    };

    // Set initial size and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (screenSize === "mobile" && visibleCount < items.length) {
      setVisibleCount((prev) => Math.min(prev + 3, items.length)); // Show next 3
    } else if (screenSize === "tablet" && visibleCount < items.length) {
      setVisibleCount((prev) => Math.min(prev + 2, items.length)); // Show next 2
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>What our people have to say</h1>

        <div className={styles.commentSection}>
          {items.slice(0, visibleCount)}
        </div>
      </div>
      {visibleCount < items.length && (
        <div className={styles.arrow} onClick={handleScroll}>
          🠋
        </div>
      )}
    </div>
  );
};

export default Section1;
