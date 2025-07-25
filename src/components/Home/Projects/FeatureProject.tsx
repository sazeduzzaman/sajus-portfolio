import ButtonThree from "@/components/Buttons/ButtonThree";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";
import Link from "next/link";

const FeatureProject = () => {
  return (
    <div className="feature-project">
      <div className="container mx-auto text-start">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="flex items-center justify-start mb-5 text-xl font-bold text-black mt-15">
              <FaHandsClapping className="mr-5 text-2xl typing-text" />
              Completed Projects
            </h1>
            <div>
              <h2 className="text-6xl font-extrabold mb-15">
                My Featured <span className="typing-text">Projects</span>
              </h2>
            </div>
          </div>
          <div>
            <Link href="/project">
              <ButtonThree text="All Projects" />
            </Link>
          </div>
        </div>
        <FeatureCard />
      </div>
    </div>
  );
};

export default FeatureProject;
