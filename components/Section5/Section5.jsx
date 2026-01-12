import React from "react";
import styles from "./Section5.module.css";
import StrategyTile from "./StrategyTile";

const Section5 = () => {
  const dataStrategies = [
    {
      icon: "./icons/bar-chart.svg",
      title: "Client-First Philosophy",
      subtext:
        "We place our clients at the heart of every decision, delivering customized, impact-driven solutions that align with their goals and ensure lasting value.",
    },
    {
      icon: "./icons/Vector.svg",
      title: "Innovation with Purpose",
      subtext:
        "Our commitment to cutting-edge technology and industry foresight allows us to craft smart, scalable solutions that elevate performance and lead the curve.",
    },
    {
      icon: "./images/protect.svg",
      title: "Trust Through Transparency",
      subtext:
        "We believe strong relationships are built on integrity. Through open communication and ethical execution, we create partnerships rooted in mutual respect and confidence.",
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Our Key Strategy</h1>
      <div className={styles.content}>
        {dataStrategies.map((strategy, index) => {
          return <StrategyTile key={index} index={index} strategy={strategy} />;
        })}
      </div>
    </div>
  );
};

export default Section5;
