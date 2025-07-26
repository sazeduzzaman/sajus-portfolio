import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import BannerBottomSkills from "../Home/HeroBanner/BannerBottomSkills";

const SkillsPage = () => {
  return (
    <div>
      <CommonBanner
        title="Skills"
        currentPage="Skills"
        parentPage={{ href: "/Skills" }}
      />
      <BannerBottomSkills />
    </div>
  );
};

export default SkillsPage;
