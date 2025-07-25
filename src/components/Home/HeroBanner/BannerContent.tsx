"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { FaHandsClapping } from "react-icons/fa6";
import IconsAnimation from "./IconsAnimation";
import styles from './about.module.css';
import ButtonTwo from "@/components/Buttons/ButtonTwo";

const BannerContent = () => {
  return (
    <div className="p-6 text-black dark:text-white">
      <IconsAnimation />
      <h1 className="flex items-center mb-10 text-xl font-bold text-black dark:text-white">
        <FaHandsClapping className="text-2xl me-5 site-text-two" /> Hey There!
      </h1>

      <h6 className="mb-4 font-medium text-black banner-title dark:text-white">
        I'm <span className="name-title">Saju,</span> I build<br />
        <ReactTyped
          className="typing-text"
          strings={[
            "Digital Experiences.",
            "Web Interfaces.",
            "Full-stack Solutions.",
            "responsive Websites.",
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

      <div className="mt-10">
        <ButtonTwo text="Learn More" />
      </div>
    </div>
  );
};

export default BannerContent;
