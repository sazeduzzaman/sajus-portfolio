import Image from "next/image";
import React from "react";

const BannerImage = () => {
  return (
    <div>
      <Image
        src="/images/non-bg-profile.png"
        width={600}
        height={600}
        alt="Picture of the author"
      />
    </div>
  );
};

export default BannerImage;
