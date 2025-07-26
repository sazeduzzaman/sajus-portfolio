import Blogs from "@/components/Home/Blogs/Blogs";
import Certificates from "@/components/Home/Certificates/Certificates";
import Experience from "@/components/Home/Experience/Experience";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import InfoSection from "@/components/Home/InfoSection/InfoSection";
import FeatureProject from "@/components/Home/Projects/FeatureProject";
import ServiceSection from "@/components/Home/ServiceSection/ServiceSection";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroBanner />
      <InfoSection />
      <ServiceSection />
      <FeatureProject />
      <Experience />
      <Certificates />
      <Testimonial /> 
      <Blogs />
    </div>
  );
};

export default page;
