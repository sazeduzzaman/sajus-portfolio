"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { FaHandsClapping } from "react-icons/fa6";
import IconsAnimation from "./IconsAnimation";

const BannerContent = () => {
  return (
    <div className="text-white p-6">
      <IconsAnimation />
      <h1 className="text-1xl font-bold mb-10 text-black flex items-center">
        <FaHandsClapping className="me-5 site-text-two text-2xl" /> Hey There !
      </h1>

      <h6 className="banner-title font-medium mb-4 text-black">
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

      <p className="text-base max-w-2xl leading-relaxed  text-black mt-10">
        I craft responsive, high-performance websites with clean code, scalable
        architecture, and a user-first approach — from UI to backend, one line
        at a time.
      </p>
      <div className="mt-10">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default BannerContent;
