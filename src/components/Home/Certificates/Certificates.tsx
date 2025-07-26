import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import Cources from "./Cources";

const Certificates = () => {
  return (
    <div>
      <div className="container mx-auto my-10">
        <h1 className="flex items-center justify-start mb-5 text-xl font-bold text-black mt-15">
          <FaHandsClapping className="mr-5 text-2xl typing-text" />
          Achivement
        </h1>
        <div>
          <h2 className="mb-10 text-6xl font-extrabold">
            Cource & <span className="typing-text">Certificates</span>
          </h2>
        </div>
        <Cources />
      </div>
    </div>
  );
};

export default Certificates;
