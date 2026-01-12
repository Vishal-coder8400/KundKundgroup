import React from "react";
import styles from "./Team.module.css";
import { team } from "../../../data/AboutUs/team";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1>Meet Our Beautiful Team</h1>
        <p>
          At The KundKund Group, our strength lies in our unified vision and
          collective determination. With a diverse team of over 10,000
          passionate individuals across the globe, we are bound by a shared
          purpose: to innovate, empower, and make a meaningful impact in the
          lives we touch. Our journey is guided by the vision of our dynamic
          Chairman, whose foresight and commitment to excellence have set the
          foundation for our growth. Supported by a talented and experienced
          management team, The KundKund Group stands as a testament to
          collaborative leadership, unwavering integrity, and a relentless
          pursuit of progress.
        </p>
        <button>Get In Touch</button>
      </div>

      <div className={styles.teamSection}>
        <h2>Management Team</h2>
        <div className={styles.teamContainer}>
          {team.management.map((member, index) => (
            <div key={index} className={styles.teamTile}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.teamSection}>
        <h2>Core Enablers</h2>
        <div className={styles.teamContainer}>
          {team.core.map((member, index) => (
            <div key={index} className={styles.teamTile}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
