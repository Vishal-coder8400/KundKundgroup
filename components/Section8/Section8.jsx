import React from "react";
import styles from "./Section8.module.css";
const Section8 = ({ title, desc, services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Our Services</h1>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className={styles.right}>
          {services.map((part, index) => {
            return (
              <div key={index}>
                <img src={part.icon} alt="" />
                <p>{part.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section8;
