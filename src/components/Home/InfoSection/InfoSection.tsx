import Image from "next/image";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { PiPhone } from "react-icons/pi";
import "./infoSection.css";
import ButtonThree from "@/components/Buttons/ButtonThree";

const InfoSection = () => {
  return (
    <div>
      <div className="info-bg">
        <div className="container mx-auto ">
          <div className="grid items-center grid-cols-12">
            <div className="col-span-6">
              <div>
                <h1 className="flex items-center mb-5 font-bold text-black text-1xl">
                  <FaHandsClapping className="text-2xl me-5 site-text-two" />
                  About Me
                </h1>
                <h4 className="mb-4 font-medium text-black banner-title">
                  Building Web Experiences With{" "}
                  <span className="typing-text">Intuitive Design</span>
                </h4>
              </div>
              <div className="flex items-center mt-10">
                <ButtonThree text="About Me" />
                <div className="flex items-center ml-10">
                  <PiPhone className="w-12 h-12 p-3 mr-3 text-2xl border rounded-full site-text-two" />
                  <div>
                    <strong>Phone</strong>
                    <br />
                    <a href="tel:+8801576614451">+880 1576614451</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="about-image-wrapper">
                <div className="flex items-center justify-center about-image">
                  <Image
                    src="/images/info-banner.png"
                    width={800}
                    height={800}
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
