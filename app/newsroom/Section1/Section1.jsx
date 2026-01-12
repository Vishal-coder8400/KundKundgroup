import React from "react";
import styles from "./Section1.module.css";
import TitleButton from "../../../ui/TitleButton/TitleButton";
const Section1 = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Newsroom</h1>
        <p>
          Explore the latest updates, announcements, and insights from The
          KundKund Group. From press releases to industry news, our newsroom is
          your go-to resource for staying informed about our journey,
          innovations, and achievements.
        </p>
        <a href="https://form.typeform.com/to/ZKTJgWBp">
          <TitleButton buttonText={"Subscribe to Updates"} />
        </a>
      </div>
      <img src="./images/2151589601.png" alt="" />
    </div>
  );
};

export default Section1;
