import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import DividerType1 from "../components/DividerType1/DividerType1";
import OtherSitesSections from "../components/OtherSitesSections.jsx/OtherSitesSections";
import Section3 from "../components/Section3/Section3";
import DividerType2 from "../components/DividerType2/DividerType2";
import Section4 from "../components/Section4/Section4";
import Section5 from "../components/Section5/Section5";
import Section6 from "../components/Section6/Section6";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Section1
        title={""}
        heading={"Empowering Growth Across Markets, Media, and Education"}
        subHeading={"Your trusted partner in Fintech, Healthcare, Edtech & IT."}
        ImgURL={"./images/landingPage.png"}
        buttonText={"Explore Our Subsidiaries"}
      />
      <Section2
        title1={"About KundKund Group"}
        subtitle={
          "At KundKund Group, we are committed to redefining excellence by driving innovation, delivering quality, and ensuring client satisfaction across diverse industries. As a trusted industry leader, our operations span four key sectors: Fintech, Healthcare, Edtech, and Information Technology. With a proven track record of success, we have empowered thousands of clients by providing customized solutions that align with their goals. Our domain expertise and client-centric approach continue to set new service delivery and performance benchmarks."
        }
        ImgUrl={"./images/photorealistic-lifestyle-lawyer.png"}
        belowTitle={
          "We are here to empower your growth with expertise and innovation."
        }
      />
      <DividerType1
        heading={"The Pillars of The \n KundKund Group"}
        desc={
          "There are hundreds of us and counting, each committed to delivering reliable and effective solutions tailored to our clients' needs. Our highly responsive customer support team ensures prompt assistance and seamless service at every step. Connect with us to experience solutions that truly empower your success."
        }
      />
      <OtherSitesSections />
      <Section3
        title={"What We Offer"}
        desc={
          "At KundKund Group, we offer services but also deliver impactful experiences that empower individuals and accelerate business growth across diverse industries.\n Through Healthcare innovations, we’re reimagining patient care with tech-enabled, end-to-end surgical solutions that enhance both outcomes and operational efficiency. In the realm of IT Services, we enable digital transformation with agile development, cloud integration, and scalable tech strategies tailored to modern business needs.\n In EdTech, we simplify the college admissions journey through smart, personalized guidance—connecting students with India’s top institutions. Our Fintech solutions revolutionize investment management by integrating multiple demat accounts into a single intelligent platform, complete with real-time analytics and insights. \n Rooted in a client-first philosophy and driven by innovation, KundKund Group is where ambition meets execution—helping you lead, evolve, and thrive."
        }
        imgUrl={"./images/IMG_15831.png"}
        heading1={"Healthcare Solutions (MediEnd)"}
        heading2={"College Guidance (CollegeLe)"}
        heading3={"Information Technology Services"}
      />
      <DividerType2
        title={"Reshaping the future through Fintech"}
        subtitle={
          "At Kund Kund Group, we’re not just keeping up with financial technology; we’re leading the charge. Our innovative Demat Account Aggregator platform transforms the way investors manage their portfolios, offering unmatched convenience, transparency, and control. "
        }
        imgUrl={"./images/reshaping.svg"}
        noBg={true}
      />
      <Section4
        title={"Legacy & Leadership"}
        name={"Dr. Amit Prakash Jain"}
        desc1={
          "Dr. Amit Prakash Jain is the Managing Director of KundKund Group, a diversified enterprise leading innovation across Fintech, Healthcare, EdTech, and IT. With a strategic vision and strong entrepreneurial acumen, he has established ventures such as Kundkund TC, mediEND, CollegeLe, and Kundkund IT—each aimed at delivering impactful, technology-driven solutions."
        }
        desc2={
          "Known for his integrity, forward-thinking leadership, and commitment to societal progress, Dr. Amit Jain is dedicated to creating scalable, sustainable models that empower individuals, transform industries, and contribute to national growth."
        }
        imgUrl={"./images/portrait-handsome-man.png"}
      />
      <DividerType2
        title={"Reshaping the future \n through Healthcare"}
        subtitle={
          "At Kund Kund Group, we believe that technology has the power to transform healthcare for everyone. Our innovative solutions are designed to enhance patient care, streamline medical processes, and empower healthcare providers with advanced tools and insights. "
        }
        imgUrl={"./images/smart-wearables.svg"}
        noBg={true}
      />
      <Section5 />
      <DividerType2
        title={"Reshaping the future \n through Edtech"}
        subtitle={
          "At Kund Kund Group, we are transforming education by bridging the gap between ambition and opportunity. Specializing in college admissions, we guide students to secure placements in top colleges across India. "
        }
        imgUrl={"./images/graduation.svg"}
        noBg={true}
      />
      <Section6 />
      <DividerType2
        title={"Reshaping the future \n through IT"}
        subtitle={
          "At Kund Kund Group, we’re driving innovation and efficiency through advanced IT solutions. Our expertise spans across software development, digital transformation, cloud computing, and IT consulting, enabling businesses to thrive in the digital age. "
        }
        imgUrl={"./images/modular-coding.svg"}
        noBg={true}
      />
      <Footer />
    </>
  );
}
