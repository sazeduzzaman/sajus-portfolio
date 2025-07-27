import React from "react";
import "./AllProject.css";
import Link from "next/link";
import ButtonOne from "@/components/Buttons/ButtonOne";

const projects = [
  {
    id: 1,
    title: "Creative Landing Page",
    category: "Web / Design",
    slug: "creative-landing-page",
    img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/2-1.jpg",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "E-commerce",
    slug: "ecommerce-platform",
    img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/2-1.jpg",
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    category: "Portfolio",
    slug: "portfolio-showcase",
    img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/2-1.jpg",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "Mobile / UI",
    slug: "mobile-app-ui",
    img: "https://ex-coders.com/wp/xiomi/wp-content/uploads/2025/05/2-1.jpg",
  },
];

const ProjectCard = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        {projects.map((project) => (
          <Link href={`/project-details/${project.slug}`} key={project.id}>
            <div className="overflow-hidden transition-all duration-300 transform rounded-lg feature-cards hover:-translate-y-2 hover:shadow-xl">
              <img
                src={project.img}
                alt="Project Thumbnail"
                className="object-cover w-full mb-4 rounded-t-lg"
              />
              <div className="flex items-center justify-between p-5 bg-[#494949]">
                <div>
                  <p className="mb-1 text-sm tracking-wide text-white uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold site-text">
                    {project.title}
                  </h3>
                </div>
                <ButtonOne text="View Details" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
