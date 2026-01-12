"use client";
import React, { useEffect, useState } from "react";
import styles from "./Section1.module.css";
import TitleButton from "../../ui/TitleButton/TitleButton";
const Section1 = ({
  title,
  heading,
  subHeading,
  buttonText,
  ImgURL,
  titleColor,
}) => {
  const [backgroundPosition, setBackgroundPosition] = useState("15% 30%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundPosition("50% 50%"); // Center the image for mobile
      } else {
        setBackgroundPosition("15% 30%"); // Default for larger screens
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${ImgURL})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
      }}
    >
      {
        <h1 className={styles.title}>
          {title && (
            <p
              style={
                title.includes("icons") && titleColor
                  ? { background: titleColor, display: "flex" }
                  : { background: "white" }
              }
            >
              {title.includes("icons") ? <img src={title}></img> : title}
            </p>
          )}
        </h1>
      }
      <div className={styles.content}>
        <div>
          <h1>{heading}</h1>
          <div>
            <p>{subHeading}</p>
            <a href="#subs">
              <TitleButton buttonText={buttonText} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
