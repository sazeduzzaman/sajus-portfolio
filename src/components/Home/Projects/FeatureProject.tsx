import ButtonThree from "@/components/Buttons/ButtonThree";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";
import Link from "next/link";

const FeatureProject = () => {
  return (
    <section className="px-4 py-10 feature-project md:px-10 lg:px-20">
      <div className="container mx-auto ">
        <div className="flex flex-col items-start justify-between gap-6 mb-10 md:flex-row md:items-center feature-info">
          {/* Left Section: Heading */}
          <div className="w-full md:w-auto feature-info">
            <h1 className="flex items-center mb-3 text-xl font-bold text-black">
              <FaHandsClapping className="mr-3 text-2xl typing-text" />
              Completed Projects
            </h1>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl feature-title">
              My Featured <span className="typing-text">Projects</span>
            </h2>
          </div>

          {/* Right Section: Button */}
          <div className="shrink-0">
            <Link href="/project">
              <ButtonThree text="All Projects" />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <FeatureCard />
      </div>
    </section>
  );
};

export default FeatureProject;
