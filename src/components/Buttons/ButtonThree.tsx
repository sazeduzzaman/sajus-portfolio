import React from "react";
import { FaHandPeace } from "react-icons/fa6";
import "./buttonThree.css";

const ButtonThree = ({ text = "Generate Site" }) => {
  return (
    <div>
      <button className="reverse-learn-more">
        <span className="circle">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{text}</span>
      </button>
    </div>
  );
};

export default ButtonThree;
