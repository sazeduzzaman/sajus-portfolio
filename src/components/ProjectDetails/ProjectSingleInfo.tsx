import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonOne from "../Buttons/ButtonOne";
import ButtonThree from "../Buttons/ButtonThree";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  slug: string;
  img: string;
  description: string;
  researchInsightsTitle: string;
  researchInsights: string[];
  problemStatementTitle: string;
  problemStatement: string[];
  featuresTitle: string;
  features: string[];
  techStackTitle: string;
  techStack: string[];
  screenshots: string[];
  liveUrl: string;
  githubUrl: string;
  duration: string;
  role: string;
  client: string;
  clientFeedback: string;
  clientName: string;
  challengesTitle: string;
  challenges: string;
  solutionTitle: string;
  solution: string;
};

type Props = {
  project: Project;
};

const ProjectSingleInfo = ({ project }: Props) => {
  const p = project;
  return (
    <>
      <div className="container px-4 mx-auto max-w-7xl lg:px-0">
        {/* Banner Image */}
      </div>
      <div className="text-gray-800 bg-white">
        <div className="container px-4 mx-auto max-w-7xl lg:px-0">
          {/* Banner Image */}
          <div className="py-10">
            <Image
              src={p.img || "No Image"}
              width={1200}
              height={600}
              alt="Project Cover"
              className="object-cover w-full h-auto rounded-3xl"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-10 my-10 lg:grid-cols-12">
            {/* Main Content */}
            <div className="space-y-10 lg:col-span-9">
              {/* Intro */}
              <div>
                <p className="text-lg text-gray-600">
                  {p.subtitle || "No  subtitle"}
                </p>
                <h1 className="mt-2 text-2xl font-bold md:text-4xl">
                  {p.title}
                </h1>
              </div>
              {/* Description */}
              <p className="leading-relaxed text-gray-700">
                {p.description || "No  description"}
              </p>
              {/* Research & Insights */}
              <div>
                <h2>{p.researchInsightsTitle}</h2>
                <ul>
                  {p.researchInsights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Problem Statement */}
              <div>
                <h2 className="mb-3 text-2xl font-semibold">
                  {p.problemStatementTitle}
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  {p.researchInsights.map((item, i) => (
                    <li key={i}>{item}.</li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h2 className="mb-3 text-2xl font-semibold">
                  {p.featuresTitle}
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  {p.features.map((item, i) => (
                    <li key={i}>{item}.</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="mb-3 text-2xl font-semibold">
                  {p.challengesTitle}
                </h2>
                <p className="leading-relaxed text-gray-700">{p.challenges}</p>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-3 text-2xl font-semibold">
                  {p.solutionTitle}
                </h2>
                <p className="leading-relaxed text-gray-700">{p.solution}</p>
              </div>

              {/* Screenshot Gallery */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {p.screenshots.map((item, i) => (
                  <Image
                    key={i}
                    src={item} // <-- use item here
                    width={600}
                    height={400}
                    alt={`Screenshot ${i + 1}`}
                    className="object-cover w-full border shadow-sm rounded-2xl"
                  />
                ))}
              </div>

              {/* Client Feedback */}
              <div className="p-6 shadow-sm bg-gray-50 rounded-2xl">
                <h2 className="mb-3 text-2xl font-semibold">Client Feedback</h2>
                <blockquote className="italic text-gray-600">
                  “{p.clientFeedback}”
                </blockquote>
                <p className="mt-2 text-sm text-right text-gray-500">
                  — {p.clientName}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="order-first lg:col-span-3 lg:order-last">
              <div className="p-6 space-y-4 bg-gray-100 shadow-sm rounded-2xl">
                <h2 className="mb-2 text-xl font-semibold">Project Info</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Category:</strong> {p.category}
                  </li>
                  <li>
                    <strong>Client:</strong> {p.client}
                  </li>
                  <li>
                    <strong>Role:</strong> {p.role}
                  </li>
                  <li>
                    <strong>Duration:</strong> {p.duration}
                  </li>
                </ul>

                <h2 className="mt-6 mb-2 text-xl font-semibold">
                  {p.techStackTitle}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white border rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </ul>

                <div className="flex flex-col items-center justify-center mt-6 space-y-2">
                  <div className="mt-3">
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonOne text="🌐 Live Preview" />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonOne text="💻 View Code" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="mt-5 project-sidebar bg-gradient-to-br from-[#e0f7fa] via-[#f1f3f5] to-[#fdeefc] rounded-3xl shadow-lg p-6 text-center relative overflow-hidden">
                <div className="absolute w-5 h-5 bg-green-400 rounded-full top-5 left-5 opacity-30 blur-xl"></div>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h2 className="mb-1 text-2xl font-bold">Don't Hesitate To</h2>
                <h2 className="mb-4 text-xl font-bold">Contact Me</h2>
                <p className="text-sm text-gray-700 ">+880 15766 14451</p>
                <p className="mb-6 text-sm text-gray-700">
                  szamansaju@gmail.com
                </p>
                <ButtonThree text="Get In Touch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSingleInfo;
