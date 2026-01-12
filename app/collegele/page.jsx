import Section2 from "../../components/Section2/Section2";
import Section1 from "../../components/Section1/Section1";
import React from "react";
import DividerType1 from "../../components/DividerType1/DividerType1";
import Section7 from "../../components/Section7/Section7";
import DividerType2 from "../../components/DividerType2/DividerType2";
import Section3 from "../../components/Section3/Section3";
import Section8 from "../../components/Section8/Section8";
import { services } from "../../data/CollegeLe/services";
import Section9 from "../../components/Section9/Section9";
import Section10 from "../../components/Section10/Section10";
import { articles, topics } from "../../data/CollegeLe/articles";
import Footer from "../../components/Footer/Footer";
import { values } from "../../data/CollegeLe/coreValues";
import { reviews } from "../../data/CollegeLe/reviews";
const page = () => {
  return (
    <>
      <Section1
        title={"./icons/image11.svg"}
        heading={"Empowering Learning, Shaping Futures"}
        subHeading={
          "Innovative EdTech solutions designed to transform education and unlock potential."
        }
        ImgURL={"./images/smiling-students-talking-lesson.png"}
        buttonText={"Learn More"}
      />
      <Section2
        title1={"About College Le"}
        subtitle={
          "At CollegeLe, we are passionate about empowering students to achieve their academic and career goals. As a trusted admissions guidance platform, we specialize in helping students secure placements in top colleges across India. Our expert counselors provide personalized support, guiding students through every step of the process – from course selection to admissions and beyond. \n With a focus on integrity, transparency, and excellence, we offer up-to-date insights on colleges, courses, scholarships, and career opportunities to help students make informed decisions. Whether you’re pursuing an MBA, PGDM, or other programs, CollegeLe is your dedicated partner in navigating the complex admissions landscape and unlocking a brighter future."
        }
        ImgUrl={"./images/smiling-young-caucasian-woman-holds-pen-notebook.png"}
        belowTitle={"Redefining Education, Inspiring Lifelong Success."}
      />
      <DividerType1
        heading={"Visit the Website for Details"}
        buttonText={"Visit Now"}
        buttonLink={"https://collegele.com/"}
      />
      <Section7 values={values} />
      <DividerType2
        title={"Reshaping the future \n through education"}
        subtitle={
          "Education is a powerful catalyst for change, and KundKund Group is committed to harnessing its transformative potential."
        }
        imgUrl={"./images/smiley-teacher-classroom.png"}
      />
      <Section3
        title={"Why Choose College Le?"}
        desc={
          "At CollegeLe, we are dedicated to guiding students toward their academic and career aspirations with personalized and expert support. Our trusted team of counselors provides comprehensive assistance, from selecting the right course to securing admissions in top colleges across India. With a proven track record of successful placements, we prioritize a student-centric approach, ensuring every decision aligns with their unique goals. \n Equipped with up-to-date insights on colleges, scholarships, and career opportunities, we empower students to make informed choices for a brighter future. Choose CollegeLe to simplify your admissions journey and achieve academic success with confidence."
        }
        imgUrl={"./images/front-view-young-men-laughing.png"}
        heading1={"Expert Guidance"}
        heading2={"Trusted by Students and Parents."}
        heading3={"Comprehensive Support"}
        heading4={"Up-to-Date Insights"}
        heading5={"Student-Centric Approach"}
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
        subtitle={"Real Experiences. Real Results. Real Futures."}
      />
      <Section10 articles={articles} topics={topics} />
      <Footer />
    </>
  );
};

export default page;
