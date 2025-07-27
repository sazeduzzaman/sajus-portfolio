import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import ProjectCard from "./ProjectCard";
import ButtonOne from "../Buttons/ButtonOne";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";

const ProjectPage = () => {
  return (
    <div>
      <CommonBanner
        title="Projects"
        currentPage="Project"
        parentPage={{ href: "/projects" }}
      />
      <section className="px-4 py-10 feature-project md:px-10 lg:px-20">
        <div className="container mx-auto">
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-6">
            <div className="md:col-span-2">
              <div className="sticky top-0 flex flex-col justify-center h-screen">
                <h1 className="flex items-center mb-3 text-xl font-bold text-black">
                  <FaHandsClapping className="mr-3 text-2xl typing-text" />
                  Completed Projects
                </h1>
                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl feature-title">
                  Some Featured <span className="typing-text">Projects</span>
                </h2>
                <p className="py-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  ratione minima illum incidunt? Eos sit est, reprehenderit rem
                  maiores iusto nihil ab totam obcaecati magnam earum quos, amet
                  consequuntur nulla!
                </p>
                <div className="text-start md:text-left">
                  <Link href="/project">
                    <ButtonOne text="All Projects" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Scrollable Content */}
            <div className="pr-2 space-y-6 overflow-y-auto md:col-span-4">
              <ProjectCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
