"use client";
import SanityClient from "../../../sanity/sanity";
import styles from "./Section10.module.css";
import React, { useEffect, useState } from "react";

const Section10 = ({ articles, topics }) => {
  const [allPostsData, setAllPosts] = useState(null);
  const [ind, setInd] = useState(0);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
        title,
        desc,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
    )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  console.log(allPostsData);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Latest News articles</h1>
        <div className={styles.topics}>
          {topics.map((topic, index) => (
            <p
              key={index}
              style={
                ind == index ? { background: "#4a3aff", color: "white" } : {}
              }
              onClick={() => setInd(index)}
            >
              {topic}
            </p>
          ))}
        </div>
        <hr />
        <div className={styles.articleContainer}>
          {allPostsData &&
            allPostsData.map((piece, index) => {
              return (
                <div key={index} className={styles.article}>
                  <img src={piece.mainImage.asset.url} alt="" />
                  <h6>{piece.title}</h6>
                  <p>{piece.desc}</p>
                  <div>
                    Continue Reading
                    <span>{piece.publishedAt.split("T")[0]}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <p className={styles.more}>more ▾</p>
    </div>
  );
};

export default Section10;
