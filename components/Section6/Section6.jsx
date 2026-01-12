import React from "react";
import styles from "./Section6.module.css";
import TitleButton from "../../ui/TitleButton/TitleButton";
const Section6 = () => {
  const parts = [
    {
      icon: "./icons/excellence.svg",
      title: "Expert Guidance",
    },
    {
      icon: "./icons/briefcase.svg",
      title: "Industry Expertise In Multiple Sectors",
    },
    {
      icon: "./icons/bar-chart-2.svg",
      title: "Proven Track Record",
    },
    {
      icon: "./icons/users.svg",
      title: "Client-Centric Approach",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Why Choose Us?</h1>
          <p>
            At KundKund Group, we are committed to delivering excellence through
            innovation, reliability, and a client-first approach. Here's why
            thousands of clients trust us as their go-to partner
          </p>
          <TitleButton buttonText={"Explore Our Subsidiaries"} />
        </div>
        <div className={styles.right}>
          {parts.map((part, index) => {
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

export default Section6;
