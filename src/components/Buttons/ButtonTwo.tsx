import React from "react";
import "./buttonTwo.css"; // Assuming you have a CSS file for styles

const ButtonTwo = ({ text = "Generate Site" }) => {
  return (
    <div>
      <button className="learn-more dark:bg-gray-800 dark:text-white">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{text}</span>
      </button>
    </div>
  );
};

export default ButtonTwo;
