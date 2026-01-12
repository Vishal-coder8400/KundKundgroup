import React from "react";
import styles from "./Section3.module.css";
const Section3 = ({
  imgUrl,
  title,
  desc,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={imgUrl} alt="" />
        <div>
          <h1>{title}</h1>
          <p>{desc.split("\n")[0]}</p>
          <p>{desc.split("\n")[1]}</p>
          <p>{desc.split("\n")[2]}</p>
          <p>{desc.split("\n")[3]}</p>
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
        {heading4 && (
          <p>
            {heading4} <span>4</span>
          </p>
        )}
        {heading5 && (
          <p>
            {heading5} <span>5</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Section3;
