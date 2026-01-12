import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section10 from "../../../components/Section10/Section10";
import { articles, topics } from "../../../data/AboutUs/articles";
const Footer = () => {
  return (
    <div>
      <Section1 />
      <Section10 articles={articles} topics={topics} />
      <Section2 />
    </div>
  );
};

export default Footer;
