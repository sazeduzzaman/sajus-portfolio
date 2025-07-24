import React from "react";
import { FaHandPeace } from "react-icons/fa6";

const ButtonOne = ({ text = "Generate Site" }) => {
  return (
    <div>
      <button className="site-btn">
        <span className="flex items-center">{text} <FaHandPeace className="ms-2"/></span>
      </button>
    </div>
  );
};

export default ButtonOne;
