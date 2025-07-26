import Link from "next/link";
import React from "react";
import "./experience.css";

const experiences = [
  {
    id: "01",
    title: "Senior Frontend Developer",
    company: "NGen It",
    website: "https://ngenit.com",
    year: "2023 - Present (Onsite)",
  },
  {
    id: "02",
    title: "Frontend Developer",
    company: "FlixaGlobal",
    website: "https://flixaglobal.com",
    year: "2023 - Present (Remote)",
  },
  {
    id: "03",
    title: "Web Developer & Funnel Builder",
    company: "UApps Pro",
    website: "https://uappspro.com",
    year: "2021 - 2022 (Remote)",
  },
  {
    id: "04",
    title: "Wordpress Developer",
    company: "Brothers It",
    website: "https://brothersit.com",
    year: "2020 - 2021 (Onsite)",
  },
];

const WordExperience = () => {
  return (
    <div className="mt-10 mb-5">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-between gap-2 p-4 mx-auto transition-colors duration-300 experience-items md:flex-row md:items-center md:gap-10"
        >
          <span className="text-lg font-semibold text-gray-500">{exp.id}</span>
          <span className="text-xl font-medium text-gray-500">{exp.title}</span>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <Link
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium site-text hover:underline"
            >
              {exp.company}
            </Link>
            <span className="text-sm text-gray-500">{exp.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordExperience;
