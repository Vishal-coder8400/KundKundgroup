import React from "react";
import styles from "./StrategyTile.module.css";
const StrategyTile = ({ strategy, index }) => {
  return (
    <div key={index} className={styles.strategyContainer}>
      <img src={strategy.icon} alt="" />
      <h3>{strategy.title}</h3>
      <p>{strategy.subtext}</p>
    </div>
  );
};

export default StrategyTile;
