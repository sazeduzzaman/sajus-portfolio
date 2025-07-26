import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import BannerBottomSkills from "../Home/HeroBanner/BannerBottomSkills";
import Experience from "../Home/Experience/Experience";
import InfoSection from "../Home/InfoSection/InfoSection";

const SkillsPage = () => {
  return (
    <div>
      <CommonBanner
        title="Skills"
        currentPage="Skills"
        parentPage={{ href: "/Skills" }}
      />
      <BannerBottomSkills />
      <InfoSection/>
      <Experience/>
    </div>
  );
};

export default SkillsPage;
