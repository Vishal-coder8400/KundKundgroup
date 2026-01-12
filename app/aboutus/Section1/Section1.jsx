"use client";
import React from "react";
import styles from "./Section1.module.css";
import TitleButton from "../../../ui/TitleButton/TitleButton";
const Section1 = ({ title, heading, subHeading, buttonText, ImgURL }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{heading}</h1>

          <div>
            <p>{subHeading}</p>
            {buttonText && <TitleButton buttonText={buttonText} />}
          </div>
        </div>
      </div>
      <img src={ImgURL} className={styles.img} alt="" />
    </div>
  );
};

export default Section1;
