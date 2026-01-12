import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section8 from "./Section8/Section8";
import Chairman from "./Chairman/Chairman";
import DividerType1 from "./DividerType1/DividerType1";
import DividerType2 from "./DividerType2/DividerType2";
import { values } from "../../data/AboutUs/coreValues";
import { services } from "../../data/AboutUs/services";
import Section7 from "../../components/Section7/Section7";
import Section9 from "../../components/Section9/Section9";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
import Journey from "./Journey/Journey";
const page = () => {
  return (
    <div>
      <Section1
        heading={"Meet The KundKund Group"}
        subHeading={
          "With a foundation built on trust, innovation, and a relentless pursuit of quality, we, The KundKund Group, have grown to become a leader in multiple sectors, offering comprehensive services that help individuals and businesses achieve lasting success."
        }
        ImgURL={"./images/IMG_1189.png"}
        buttonText={""}
      />
      <Section2
        title1={"Who We Are"}
        subtitle={
          "At Kund Kund Group, we are a dynamic and forward-thinking organization dedicated to transforming lives and businesses through innovative solutions. With a strong presence across diverse sectors such as EdTech, Fintech, Healthcare, and IT, we are driven by a passion for excellence and a commitment to delivering tangible results. \n Our team comprises industry experts who bring a wealth of knowledge, experience, and a fresh perspective to every project. We believe in building long-lasting relationships with our clients, guided by our core values of integrity, transparency, and customer-centricity. \n Whether helping students achieve their educational dreams, simplifying investment management, enhancing healthcare delivery, or driving digital transformation, Kund Kund Group is your trusted partner in success."
        }
        ImgUrl={"./images/IMG_1144.png"}
        tagUrl={"./images/tags.png"}
        belowTitle={"Redefining Education, Inspiring Lifelong Success."}
      />
      <DividerType1
        heading={"Our Vision"}
        desc={
          "To be the leading provider of innovative solutions, consistently creating value across industries by empowering businesses, shaping careers, and enhancing lives through trusted services. Deliver comprehensive services that drive growth, learning, and transformation. Introduce innovative strategies and technologies to improve efficiency and outcomes."
        }
        buttonText={""}
      />
      <Section7 values={values} />
      <Journey />
      <DividerType2
        title={"Reshaping the future \n through Different Domains"}
        subtitle={
          "Education is a powerful catalyst for change, and KundKund Group is committed to harnessing its transformative potential."
        }
        imgUrl={"./images/grp1.png"}
      />
      <Chairman />
      <Section3
        title={"Why Choose The KundKund Group?"}
        desc={
          "With decades of experience and a proven track record across diverse sectors, The KundKund Group offers unmatched expertise, personalized solutions, and a commitment to quality. Whether you are a business looking to grow, an individual seeking professional development, or an organization needing advanced solutions in healthcare, marketing, or global trade, we are here to help you succeed."
        }
        imgUrl={"./images/IMG_15831.png"}
        heading1={"Demat Account Aggregator"}
        heading2={"Healthcare Services"}
        heading3={"Education Services"}
        heading4={"Tech Services"}
      />
      <Section8
        title={"At KundKund Group"}
        desc={
          "At The KundKund Group, our approach is holistic, and our solutions are tailored to meet the needs of each client. With a diverse range of services, we address the specific challenges faced by businesses and individuals in today’s dynamic market:"
        }
        services={services}
      />
      {/* <Section9 /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default page;
