import Image from "next/image";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";

const InfoSection = () => {
  return (
    <div>
      <div className="info-bg">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-6">
              <div>
                <h1 className="text-1xl font-bold mb-10 text-black flex items-center">
                  <FaHandsClapping className="me-5 site-text-two text-2xl" />
                  About Me
                </h1>
                <h4 className="banner-title font-medium mb-4 text-black">
                  Building Web Experiences With{" "}
                  <span className="site-text">Intuitive Design</span>
                </h4>
                <p className="w-[75%]">
                  I'm a passionate Frontend Developer and ongoing student,
                  focused on crafting responsive, user-friendly websites and
                  applications. I believe in solving real-world problems through
                  efficient code and thoughtful UI/UX.
                </p>
              </div>

              <div className="flex items-center mt-10">
                <div className="flex items-center me-10">
                  <h1 className="ex-amount">02<span className="site-text">+</span></h1>
                  <p className="ex-text font-normal ps-2">
                    Years <br /> Experience...
                  </p>
                </div>
                <div className="flex items-center me-10">
                  <h1 className="ex-amount">50<span className="site-text">+</span></h1>
                  <p className="ex-text font-normal ps-2">
                    Project <br /> Completed...
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <button className="reverse-learn-more">
                  <span className="circle">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">About Me</span>
                </button>
              </div>
            </div>
            <div className="col-span-6">
              <div className="about-image-wrapper">
                <div className="flex justify-center items-center about-image">
                  <Image
                    src="/images/1.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
