import React from "react";
import styles from "./Section4.module.css";
const Section4 = ({ title, name, desc1, desc2, imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <div className={styles.imgBG}></div>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.content1}>
          <h1>{title}</h1>
          <h3>{name}</h3>
          <p>{desc1}</p>
          <p>
            {desc2.split("\n")[0]}
            {desc2.split("\n")[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
