import React from "react";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import BannerSocial from "./BannerSocial";
import "./banner.css";
import BannerBottomSkills from "./BannerBottomSkills";

const HeroBanner = () => {
  return (
    <>
      <div className="px-4 py-10 banner-bg md:px-8 lg:px-16">
        <div className="grid items-center grid-cols-1 gap-5 md:gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* Social (left side, vertical icons) */}
          <div className="flex justify-center lg:col-span-2 md:order-1">
            <BannerSocial />
          </div>

          {/* Image (middle section) */}
          <div className="flex justify-center md:justify-end lg:col-span-4 md:order-2">
            <BannerImage />
          </div>

          {/* Content (right side) */}
          <div className="lg:col-span-6 md:order-3">
            <BannerContent />
          </div>
        </div>
      </div>

      {/* Bottom animated skills or icons */}
      <BannerBottomSkills />
    </>
  );
};

export default HeroBanner;
