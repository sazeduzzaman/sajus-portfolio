import React from "react";
import { FaHandPeace } from "react-icons/fa6";
import "./buttonOne.css"; 

const ButtonOne = ({ text = "Generate Site" }) => {
  return (
    <div>
      <button className="site-btn rounded-3xl">
        <span className="flex items-center">{text} <FaHandPeace className="ms-2"/></span>
      </button>
    </div>
  );
};

export default ButtonOne;
