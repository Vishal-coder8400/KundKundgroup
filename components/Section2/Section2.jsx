import React from "react";
import styles from "./Section2.module.css";
const Section2 = ({ title1, subtitle, ImgUrl, belowTitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div className={styles.content2}>
          <h1>{title1.split("\n")[0]}</h1>
          <h1>{title1.split("\n")[1]}</h1>
          <p>{subtitle.split("\n")[0]}</p>
          <p>{subtitle.split("\n")[1]}</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBG}></div>
          <img src={ImgUrl} alt="" />
        </div>
      </div>
      <h1 className={styles.belowTitle}>{belowTitle}</h1>
    </div>
  );
};

export default Section2;
