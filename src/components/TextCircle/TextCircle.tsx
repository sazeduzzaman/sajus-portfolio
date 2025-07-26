"use client";
import React, { useEffect, useRef } from "react";
import "./textCircle.css";

const TextCircle = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const text = textElement.innerText;
    textElement.innerHTML = text
      .split("")
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div>
      <div className="circle">
        <div className="bg-gray-200 logo" />
        <div className="text" ref={textRef}>
          Mern Focused - Frontend Developer --
        </div>
      </div>
    </div>
  );
};

export default TextCircle;
