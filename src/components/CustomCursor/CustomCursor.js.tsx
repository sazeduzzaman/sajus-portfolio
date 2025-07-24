'use client'
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorBorderPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    function onMouseMove(e) {
      cursorPos.current.x = e.clientX;
      cursorPos.current.y = e.clientY;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    document.addEventListener("mousemove", onMouseMove);

    let animationFrameId;
    function loop() {
      const easting = 8;
      cursorBorderPos.current.x +=
        (cursorPos.current.x - cursorBorderPos.current.x) / easting;
      cursorBorderPos.current.y +=
        (cursorPos.current.y - cursorBorderPos.current.y) / easting;
      cursorBorder.style.transform = `translate(${cursorBorderPos.current.x}px, ${cursorBorderPos.current.y}px)`;
      animationFrameId = requestAnimationFrame(loop);
    }
    loop();

    // Handle hover effects on elements with data-cursor attribute
    function handleMouseOver(e) {
      const item = e.target.closest("[data-cursor]");
      if (!item) return;

      if (item.dataset.cursor === "pointer") {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
        cursorBorder.style.setProperty("--size", "30px");
      }
      if (item.dataset.cursor === "pointer2") {
        cursorBorder.style.backgroundColor = "white";
        cursorBorder.style.mixBlendMode = "difference";
        cursorBorder.style.setProperty("--size", "80px");
      }
    }
    function handleMouseOut(e) {
      const item = e.target.closest("[data-cursor]");
      if (!item) return;

      cursorBorder.style.backgroundColor = "unset";
      cursorBorder.style.mixBlendMode = "unset";
      cursorBorder.style.setProperty("--size", "50px");
    }

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);

      document.querySelectorAll("[data-cursor]").forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-border" ref={cursorBorderRef}></div>

      <style jsx>{`
        #cursor {
          position: fixed;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 999;
          transform: translate(0, 0);
          transition: background-color 0.15s ease-out;
        }

        #cursor-border {
          --size: 50px;
          position: fixed;
          top: calc(var(--size) / -2);
          left: calc(var(--size) / -2);
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          box-shadow: 0 0 0 1px white;
          pointer-events: none;
          transition: top 0.15s ease-out, left 0.15s ease-out,
            width 0.15s ease-out, height 0.15s ease-out,
            background-color 0.15s ease-out;
          z-index: 999;
          transform: translate(0, 0);
        }
      `}</style>
    </>
  );
}
