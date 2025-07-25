import React from "react";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import BannerSocial from "./BannerSocial";
import "./banner.css";
import BannerBottomSkills from "./BannerBottomSkills";

const HeroBanner = () => {
  return (
    <>
      <div className="banner-bg">
        <div className="grid items-center grid-cols-12 gap-6">
          <div className="col-span-2">
            <BannerSocial />
          </div>
          <div className="col-span-4">
            <BannerImage />
          </div>
          <div className="col-span-6">
            <BannerContent />
          </div>
        </div>
      </div>
      <BannerBottomSkills />
    </>
  );
};

export default HeroBanner;
