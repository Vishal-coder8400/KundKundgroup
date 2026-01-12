import React from "react";
import styles from "./Chairman.module.css";
const Chairman = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBG}></div>
            <img src={"./images/portrait-handsome-man.png"} alt="" />
          </div>
          <h4>Dr. Amit Prakash Jain</h4>
          <p>Director, KundKund Group</p>
        </div>
        <div className={styles.right}>
          <h1>Directors's Message</h1>
          <p>Goodness is imperative for growth</p>
          <p>
            The existence and emergence of The KundKund Group have been deeply
            intertwined with the aspirations of a resurgent India. Over the past
            decade, we have been privileged to serve thousands who believed in
            our vision, inspired us to aim higher, and challenged us to redefine
            excellence in every endeavor. As India steps into an era of
            unprecedented growth, The KundKund Group embraces its responsibility
            toward the nation with renewed vigor.{" "}
          </p>
          <br />
          <p>
            Our commitment to giving back to society, empowering communities,
            and contributing to India's progress is the cornerstone of our
            identity. This responsibility will continue to guide us as we expand
            our reach and strengthen our position as a global organization. Our
            journey is driven by a belief that true growth is incomplete without
            its ripple effects benefiting society at large.
          </p>{" "}
          <p>
            <br />
            For us, growth must foster prosperity, harmony, and most
            importantly, happiness. Over the years, The KundKund Group has built
            sustainable businesses and platforms that touch lives and create
            opportunities. As we look ahead, our vision is to scale up these
            contributions by embracing new opportunities, both within India and
            across the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
