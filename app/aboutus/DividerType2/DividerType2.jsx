import React from "react";
import styles from "./DividerType2.module.css";
const DividerType2 = ({ title, subtitle, imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.title}>
            <h1>{title.split("\n")[0]}</h1>
            <h1>{title.split("\n")[1]}</h1>
          </div>
          <p>{subtitle}</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBG}></div>
          <img src={"./images/grp1.png"} alt="" className={styles.img1} />
        </div>
      </div>
    </div>
  );
};

export default DividerType2;
