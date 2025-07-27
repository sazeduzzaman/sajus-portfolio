"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { FaHandsClapping } from "react-icons/fa6";
import IconsAnimation from "./IconsAnimation";
import ButtonTwo from "@/components/Buttons/ButtonTwo";
import TextCircle from "@/components/TextCircle/TextCircle";

const BannerContent = () => {
  return (
    <div className="p-6 text-black dark:text-white">
      <IconsAnimation />
      <h1 className="flex items-center mb-10 text-xl font-bold text-black dark:text-white section-subtitle">
        <FaHandsClapping className="text-2xl me-5 site-text-two" /> Hey There!
      </h1>

      <h6 className="mb-4 font-medium text-black banner-title dark:text-white">
        I'm <span className="name-title">Saju,</span> I build
        <br />
        <ReactTyped
          className="typing-text"
          strings={[
            "Digital Experiences.",
            "Web Interfaces.",
            "Full-Stack Solutions.",
            "Responsive Websites.",
            "Modern UIs.",
          ]}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1500}
          loop
        />
      </h6>

      <p className="max-w-2xl mt-10 text-base leading-relaxed text-black dark:text-gray-300">
        I craft responsive, high-performance websites with clean code, scalable
        architecture, and a user-first approach — from UI to backend, one line
        at a time.
      </p>
      <div className="flex flex-col-reverse items-center justify-between gap-10 mt-10 md:flex-row">
        {/* Left Content: Stats + Button */}
        <div>
          <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:items-center sm:gap-12">
            <div className="flex items-center">
              <h1 className="text-3xl ex-amount md:text-4xl">
                02<span className="typing-text">+</span>
              </h1>
              <p className="font-normal ex-text ps-2 m-text-center">
                Years <br /> Experience...
              </p>
            </div>
            <div className="flex items-center">
              <h1 className="text-3xl ex-amount md:text-4xl">
                50<span className="typing-text">+</span>
              </h1>
              <p className="font-normal ex-text ps-2 m-text-center">
                Project <br /> Completed...
              </p>
            </div>
          </div>

          <ButtonTwo text="Learn More" />
        </div>

        {/* Right Content: Circle Animation */}
        <div className="flex justify-center md:justify-end">
          <TextCircle />
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
