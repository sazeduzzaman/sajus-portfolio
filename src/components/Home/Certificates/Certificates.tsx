import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import Cources from "./Cources";
import "./Certificates.css";

const Certificates = () => {
  return (
    <section className="px-4 py-20 md:px-10 lg:px-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-8 certificat-box">
          <h1 className="flex items-center mb-3 text-xl font-bold text-black md:text-2xl">
            <FaHandsClapping className="mr-3 text-2xl typing-text" />
            Achievement
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
            Course & <span className="typing-text">Certificates</span>
          </h2>
        </div>
        {/* Courses */}
        <Cources />
      </div>
    </section>
  );
};

export default Certificates;
