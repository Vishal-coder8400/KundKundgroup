import TitleButton from "../../ui/TitleButton/TitleButton";
import React from "react";
import styles from "./DividerType1.module.css";
const DividerType1 = ({ heading, desc, buttonText, buttonLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div>
          <h1>{heading.split("\n")[0]}</h1>
          <h1>{heading.split("\n")[1]}</h1>
        </div>

        {buttonText && buttonLink ? (
          <a href={buttonLink}>
            <TitleButton buttonText={buttonText} />
          </a>
        ) : (
          ""
        )}
      </div>
      {desc && <p className={styles.content2}>{desc}</p>}
    </div>
  );
};

export default DividerType1;
