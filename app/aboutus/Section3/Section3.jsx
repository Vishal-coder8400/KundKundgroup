import React from "react";
import styles from "./Section3.module.css";
const Section3 = ({ imgUrl, title, desc, heading1, heading2, heading3 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={imgUrl} alt="" />
        <div>
          <h1>{title}</h1>
          <p>{desc.split("\n")[0]}</p>
          <p>{desc.split("\n")[1]}</p>
        </div>
      </div>
      <div className={styles.content2}>
        <p>
          {heading1} <span>1</span>
        </p>
        <p>
          {heading2} <span>2</span>
        </p>
        <p>
          {heading3} <span>3</span>
        </p>
      </div>
    </div>
  );
};

export default Section3;
