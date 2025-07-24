import React from "react";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import SocialLinks from "./SocialLinks";

const HeroBanner = () => {
  return (
    <div className="banner-bg">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-2">
          <SocialLinks />
        </div>
        <div className="col-span-4">
          <BannerImage />
        </div>
        <div className="col-span-6">
          <BannerContent />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
