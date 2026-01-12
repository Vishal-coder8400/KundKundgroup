import React from "react";
import styles from "./DividerType2.module.css";
const DividerType2 = ({ title, subtitle, imgUrl, noBg }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <h1>{title.split("\n")[0]}</h1>
          <h1>{title.split("\n")[1]}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={!noBg ? styles.imgBG : ""}></div>
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DividerType2;
