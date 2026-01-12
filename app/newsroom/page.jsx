import React from "react";
import Section1 from "./Section1/Section1";
import FeaturedNews from "./Section2/FeaturedNews";
import Section10 from "./Section10/Section10";
import { articles, topics } from "../../data/Newsroom/articles";
import Footer from "../../components/Footer/Footer";
import DividerType1 from "./DividerType1/DividerType1";

const page = () => {
  return (
    <div>
      <Section1 />
      <FeaturedNews />
      <Section10 articles={articles} topics={topics} />
      <DividerType1
        heading={"Our Vision"}
        desc={
          "To be the leading provider of innovative solutions, consistently creating value across industries by empowering businesses, shaping careers, and enhancing lives through trusted services. Deliver comprehensive services that drive growth, learning, and transformation. Introduce innovative strategies and technologies to improve efficiency and outcomes."
        }
        buttonText={""}
      />
      <Footer />
    </div>
  );
};

export default page;
