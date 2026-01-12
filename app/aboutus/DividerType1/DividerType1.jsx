import TitleButton from "../../../ui/TitleButton/TitleButton";
import React from "react";
import styles from "./DividerType1.module.css";
const DividerType1 = ({ heading, desc, buttonText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div>
          <h1>{heading}</h1>
        </div>

        {buttonText && <TitleButton buttonText={buttonText} />}
      </div>
      {desc && <p className={styles.content2}>{desc}</p>}
    </div>
  );
};

export default DividerType1;
