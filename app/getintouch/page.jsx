import React from "react";
import ContactSection from "./ContactSection/ContactSection";
import DividerType1 from "./DividerType1/DividerType1";
import Footer from "../../components/Footer/Footer";

const page = () => {
  return (
    <div>
      <ContactSection />
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
