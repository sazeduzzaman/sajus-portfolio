import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import AboutInfo from "./AboutInfo";
import Experience from "../Home/Experience/Experience";
import Certificates from "../Home/Certificates/Certificates";
import Testimonial from "../Home/Testimonial/Testimonial";
import "./aboutSection.css";

const AboutPage = () => {
  return (
    <div>
      <CommonBanner
        title="About Me"
        currentPage="About"
        parentPage={{ href: "/About" }}
      />
      <AboutInfo />
      <Experience/>
      <Certificates/>
      <Testimonial/>
    </div>
  );
};

export default AboutPage;
