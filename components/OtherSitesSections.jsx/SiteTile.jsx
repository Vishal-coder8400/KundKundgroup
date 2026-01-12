"use client";
import React from "react";
import styles from "./SiteTile.module.css";
import Link from "next/link";
const SiteTile = ({ site, index }) => {
  return (
    <div key={index} className={styles.siteContainer}>
      <img src={site.imgUrl} alt="" />
      <div className={styles.content}>
        {/* <p className={styles.companyTag}>Company |</p> */}
        <h1>{site.title}</h1>
        <p>{site.desc}</p>
        <Link href={site.link}>
          {" "}
          <p className={styles.arrow}>&#8594;</p>
        </Link>
      </div>
    </div>
  );
};

export default SiteTile;
