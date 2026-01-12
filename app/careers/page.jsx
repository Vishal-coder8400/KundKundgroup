import React from "react";
import Section1 from "./Section1/Section1";
import JobListing from "./joblisting/Jobposting";
import Section2 from "./Section2/Section2";
import Footer from "../../components/Footer/Footer";
import DividerType1 from "./DividerType1/DividerType1";

const page = () => {
  return (
    <div>
      <Section1 />
      <JobListing />
      <Section2 />
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
