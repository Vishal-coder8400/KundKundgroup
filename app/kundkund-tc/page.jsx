import Section2 from "../../components/Section2/Section2";
import Section1 from "../../components/Section1/Section1";
import React from "react";
import DividerType1 from "../../components/DividerType1/DividerType1";
import Section7 from "../../components/Section7/Section7";
import DividerType2 from "../../components/DividerType2/DividerType2";
import Section3 from "../../components/Section3/Section3";
import Section8 from "../../components/Section8/Section8";
import { services } from "../../data/KKTC/services";
import Section9 from "../../components/Section9/Section9";
import Section10 from "../../components/Section10/Section10";
import { articles, topics } from "../../data/KKTC/articles";
import Footer from "../../components/Footer/Footer";
import { values } from "../../data/KKTC/coreValues";
import { reviews } from "../../data/KKTC/reviews";
const page = () => {
  return (
    <>
      <Section1
        title={"KundKund TC"}
        heading={"Empowering Businesses, Inspiring Success."}
        subHeading={
          "We are ISO, QRO, and DBS-certified leaders, delivering excellence in stock market training, digital marketing, and global trade solutions to drive sustainable growth for our clients."
        }
        ImgURL={
          "./images/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai.png"
        }
        buttonText={"Learn More"}
      />
      <Section2
        title1={"About KundKund Trading and Consultancy"}
        subtitle={
          "At KundKund TC, we combine expertise, innovation, and dedication to deliver top-notch solutions across multiple domains, helping clients unlock new opportunities and achieve their goals. As a trusted name in the industry, we specialize in: Stock Market Training: Equipping individuals with the knowledge to succeed in financial markets. Digital Marketing: Crafting impactful strategies to grow your online presence and drive conversions. Import & Export: Facilitating seamless trade operations to connect businesses with global markets. Our journey is driven by a passion for empowering individuals and organizations, ensuring measurable success at every step."
        }
        ImgUrl={"./images/medium-shot-man-working-as-real-estate-agent.png"}
        belowTitle={"Redefining Excellence, Delivering Results That Matter."}
      />
      <DividerType1
        heading={"Visit the Website for Details"}
        buttonText={"Visit Now"}
      />
      <Section7 values={values} />
      <DividerType2
        title={"Reshaping the future \n through Fintech"}
        subtitle={
          "Education is a powerful catalyst for change, and KundKund Group is committed to harnessing its transformative potential."
        }
        imgUrl={"./images/medium-shot-man-working-as-lawyer.png"}
      />
      <Section3
        title={"What We Offer"}
        desc={
          "KundKund Trading and Consultancy Private limited is ISO (International Organization for Standardization), QRO (Quality Research Organisation) and DBS (Disclosure and Barring Service) certified Leading Sub Broker. \n The company strives to provide the clients with the best services in Stock market Training, Digital Marketing, Import & Export. Today the company has provided thousands of clients to our partner and satisfactory services to our clients."
        }
        imgUrl={"./images/scenes-people-work.png"}
        heading1={"Demat Account Aggregation"}
        heading2={"Portfolio Management"}
        heading3={"Market Insights"}
      />
      <Section8
        title={"At College Le"}
        desc={
          "At College Le, we offer a wide range of innovative and impactful educational solutions designed to cater to individuals, organizations, and institutions. Our services are built to empower learners with the knowledge, skills, and tools they need to excel in their personal and professional journeys."
        }
        services={services}
      />
      <Section9
        testimonials={reviews}
        subtitle={"Empowering Investors with Seamless Financial Management"}
      />
      <Section10 articles={articles} topics={topics} />
      <Footer />
    </>
  );
};

export default page;
