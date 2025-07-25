import Experience from "@/components/Home/Experience/Experience";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import InfoSection from "@/components/Home/InfoSection/InfoSection";
import FeatureProject from "@/components/Home/Projects/FeatureProject";
import ServiceSection from "@/components/Home/ServiceSection/ServiceSection";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroBanner />
      <InfoSection />
      <ServiceSection />
      <FeatureProject />
      <Experience />
      {/* Add more components as needed */}
    </div>
  );
};

export default page;
