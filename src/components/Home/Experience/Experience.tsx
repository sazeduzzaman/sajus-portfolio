import Image from "next/image";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import WorkExperience from "./WorkExperience";
import SkillsSet from "./SkillsSet";

const Experience = () => {
  return (
    <section className="bg-[#1c1d20] text-white">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center experience-box">
          <h1 className="flex flex-col items-center justify-center mb-4 text-lg font-bold sm:flex-row sm:text-xl site-text">
            <FaHandsClapping className="mb-2 text-2xl sm:mb-0 sm:mr-3 site-text" />
            My Experience
          </h1>

          <div className="flex flex-col items-center justify-center mb-8">
            <Image
              src="/images/random-shape.webp"
              width={60}
              height={60}
              alt="Service Image"
              className="mb-4 sm:w-[80px] sm:h-[80px]"
            />
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl service-title">
              Work & <span className="site-text">Experience</span>
            </h2>
          </div>
        </div>

        <div className="container mx-auto">
          <WorkExperience />
          <SkillsSet />
        </div>
      </div>
    </section>
  );
};

export default Experience;
