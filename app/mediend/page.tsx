import Section2 from "../../components/Section2/Section2";
import Section1 from "../../components/Section1/Section1";
import React from "react";
import DividerType1 from "../../components/DividerType1/DividerType1";
import Section7 from "../../components/Section7/Section7";
import DividerType2 from "../../components/DividerType2/DividerType2";
import Section3 from "../../components/Section3/Section3";
import Section8 from "../../components/Section8/Section8";
import { services } from "../../data/MediEnd/services";
import Section9 from "../../components/Section9/Section9";
import Section10 from "../../components/Section10/Section10";
import { articles, topics } from "../../data/MediEnd/articles";
import Footer from "../../components/Footer/Footer";
import { values } from "../../data/MediEnd/coreValues";
import { reviews } from "../../data/MediEnd/reviews";
const page = () => {
  return (
    <>
      <Section1
        title={"./icons/image12.png"}
        titleColor={"#052B49"}
        heading={"Expert Surgical Care, Trusted Results"}
        subHeading={
          "We combine advanced technology with compassionate care to provide world-class surgeries in India, ensuring your health and well-being are in the best hands."
        }
        ImgURL={
          "./images/asian-doctor-visit-examines-senior-man-home-doctor-checking-up-consulting-retirement-health-partienthospital-services-wearing-mask-protect-covid19.png"
        }
        buttonText={"Learn More"}
      />
      <Section2
        title1={"About MediEND"}
        subtitle={
          "At MediEnd, we are committed to revolutionizing healthcare services with a focus on accessibility, convenience, and innovation. We offer comprehensive healthcare solutions, including diagnostics, medical consultations, and treatment options, all designed to simplify and enhance the patient experience. \n Our platform brings together advanced technology and expert medical care, ensuring seamless healthcare journeys from diagnosis to recovery. With a focus on quality and personalized care, MediEnd aims to make healthcare accessible and stress-free for everyone. Whether it’s routine health checks, specialist consultations, or wellness services, we are your trusted partner for holistic healthcare solutions."
        }
        ImgUrl={"./images/front-view-nurses-team-hospital.png"}
        belowTitle={"Redefining Surgical Excellence, Ensuring Better Outcomes."}
      />
      <DividerType1
        heading={"Visit the Website for Details"}
        buttonText={"Visit Now"}
        desc={""}
        buttonLink={"https://mediend.com/"}
      />
      <Section7 values={values} />
      <DividerType2
        title={"Reshaping the future \n through Healthcare"}
        subtitle={
          "Transforming healthcare with innovative solutions and personalized care, ensuring better accessibility, quality, and outcomes for everyone."
        }
        imgUrl={
          "./images/portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera.png"
        }
        noBg={false}
      />
      <Section3
        title={"Why Choose MediEND?"}
        desc={
          "At MediEND, we are committed to delivering world-class surgical care with a patient-first approach. Our state-of-the-art facilities are equipped with cutting-edge medical technology, enabling us to perform advanced and minimally invasive procedures that ensure faster recovery, reduced discomfort, and better outcomes.\n Our team of highly qualified and experienced surgeons specializes in a wide range of surgical disciplines, combining precision, expertise, and compassion to provide the best possible care. We prioritize patient comfort and safety at every step, ensuring that you feel supported, informed, and confident throughout your healthcare journey. With a proven track record of success and an unwavering focus on trust and excellence, MediEND is the preferred choice for those seeking reliable, innovative, and compassionate surgical solutions. When you choose MediEND, you are choosing quality care and results you can trust."
        }
        imgUrl={"./images/male-working-as-paediatrician.png"}
        heading1={"Patient-Centered Care."}
        heading2={"Highly Qualified Surgeons."}
        heading3={"Minimally Invasive Techniques."}
        heading4={"Convenience and Accessibility."}
        heading5={""}
      />
      <Section8
        title={"At MediEND"}
        desc={
          "We provide a wide range of surgical solutions tailored to meet your health needs with precision and care."
        }
        services={services}
      />
      <Section9
        testimonials={reviews}
        subtitle={
          "Transforming Healthcare Journeys with Compassion and Expertise"
        }
      />
      <Section10 articles={articles} topics={topics} />
      <Footer />
    </>
  );
};

export default page;
