import Image from "next/image";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { PiPhone } from "react-icons/pi";
import "./infoSection.css";
import ButtonThree from "@/components/Buttons/ButtonThree";

const InfoSection = () => {
  return (
    <div className="px-4 py-12 info-bg sm:px-6 lg:px-8">
      <div className="container mx-auto info-section">
        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h1 className="flex items-center mb-5 text-xl font-bold text-black dark:text-white section-subtitle">
              <FaHandsClapping className="text-2xl me-4 site-text-two" />
              About Me
            </h1>

            <h4 className="mb-4 text-4xl font-semibold text-black sm:text-2xl md:text-6xl dark:text-white">
              Building Web Experiences With{" "}
              <span className="typing-text site-text-two">Intuitive Design</span>
            </h4>

            <div className="flex flex-col gap-6 mt-8 sm:flex-row sm:items-center info-action">
              <ButtonThree text="About Me" />
              <div className="flex items-center">
                <PiPhone className="w-12 h-12 p-3 mr-3 text-2xl border rounded-full site-text-two" />
                <div>
                  <strong className="block text-black dark:text-white m-text-center">Phone</strong>
                  <a
                    href="tel:+8801576614451"
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    +880 1576614451
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-image-wrapper">
            <div className="flex items-center justify-center about-image">
              <Image
                src="/images/info-banner.png"
                width={600}
                height={600}
                alt="Info banner"
                className="object-contain h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
