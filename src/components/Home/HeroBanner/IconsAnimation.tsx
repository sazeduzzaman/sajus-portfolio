import Image from "next/image";
import React from "react";
import { BsStars } from "react-icons/bs";

const IconsAnimation = () => {
  return (
    <div>
      {/* <div className="star-animation">
        <Image
          src="/images/star.png"
          width={60}
          height={60}
          alt="Picture of the author"
        />
      </div> */}
      <div className="angle-arrow-animation">
        <BsStars className="site-text text-6xl"/>
      </div>
    </div>
  );
};

export default IconsAnimation;
