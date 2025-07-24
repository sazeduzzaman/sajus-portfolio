"use client";

import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaCloudMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button className="btn btn-ghost btn-circle">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        {/* sun icon */}
        <FiSun className="swap-off w-6 h-6 text-gray-800 dark:text-white" />
        {/* moon icon */}
        <FaCloudMoon className="swap-on w-6 h-6 text-yellow-400" />
      </label>
    </button>
  );
}
