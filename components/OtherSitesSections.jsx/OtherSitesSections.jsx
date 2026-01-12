"use client";
import React from "react";
import SiteTile from "./SiteTile";
import styles from "./OtherSitesSections.module.css";
import { sites } from "../../data/sites";
const OtherSitesSections = () => {
  return (
    <div id="subs" className={styles.container}>
      {sites?.map((site, index) => {
        return <SiteTile key={site.id} index={index} site={site} />;
      })}
    </div>
  );
};

export default OtherSitesSections;
