import React from "react";
import styles from "./Section1.module.css";
import TitleButton from "../../../ui/TitleButton/TitleButton";
const Section1 = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Careers at The KundKund Group</h1>
        <p>
          At The KundKund Group, we believe that our people are the driving
          force behind our success. Whether you're just starting your career or
          looking to take the next big step, we offer an environment where
          innovation, collaboration, and growth thrive. Join a team of
          passionate individuals committed to creating a lasting impact across
          industries.
        </p>
        <a href="https://www.linkedin.com/company/kundkund-group">
          <TitleButton buttonText={"Learn More"} />
        </a>
      </div>
      <img src="./images/IMG_1222.png" alt="" />
    </div>
  );
};

export default Section1;
