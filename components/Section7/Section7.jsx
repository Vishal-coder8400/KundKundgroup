import React from "react";

import styles from "./Section7.module.css";
import StrategyTile from "./StrategyTile";
const Section7 = ({ values }) => {
  return (
    <div className={styles.container}>
      <h1>Our Core Values</h1>
      <div className={styles.content}>
        {values.map((strategy, index) => {
          return <StrategyTile key={index} index={index} strategy={strategy} />;
        })}
      </div>
    </div>
  );
};

export default Section7;
