import React from "react";
import styles from "./Section2.module.css";
const Section2 = () => {
  const data = [
    {
      title: "Engineering & Tech",
      para: "Develop the products and tools of the future for billions of users.",
    },

    {
      title: "Sales, Service & Support",
      para: "Equip businesses with the right tools to help them grow.",
    },
    {
      title: "People",
      para: "Find, grow, and support the people who make Google great.",
    },
    {
      title: "Consumer Hardware",
      para: "Make people's lives better through technology.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div className={styles.content2}>
          <h1>Find your team</h1>
          <div className={styles.components}>
            {data.map((dt, index) => {
              return (
                <div key={index}>
                  <h5>{dt.title}</h5>
                  <p>{dt.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBG}></div>
          <img src={"./images/2151872284.png"} alt="" />
        </div>
      </div>
      <h1 className={styles.belowTitle}>Limitless opportunities to develop.</h1>
    </div>
  );
};

export default Section2;
