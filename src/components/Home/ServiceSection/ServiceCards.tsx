import ButtonOne from "@/components/Buttons/ButtonOne";
import Link from "next/link";
import React from "react";
import "./serviceCards.css";

const services = [
  {
    id: "01",
    title: "Web Development & Design",
    description: "Building responsive and high-performance websites.",
    link: "/projects",
  },
  {
    id: "02",
    title: "Cross Platform Design",
    description: "Creating clean, modern, and user-friendly designs.",
    link: "/projects",
  },
  {
    id: "03",
    title: "Fast & SEO Optimization",
    description: "Improving website visibility in search engines.",
    link: "/projects",
  },
  {
    id: "04",
    title: "WordPress Integration",
    description: "WordPress, Strapi, and Headless CMS solutions.",
    link: "/projects",
  },
  {
    id: "05",
    title: "E-commerce Solutions",
    description: "Scalable e-commerce platforms with smooth UX.",
    link: "/projects",
  },
];

const ServiceCards = () => {
  return (
    <div className="grid gap-6 px-4 py-10 md:px-12 lg:px-32">
      {services.map((service) => (
        <Link href={service.link} key={service.id} className="block group">
          <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl service-cards hover:shadow-lg dark:bg-gray-900">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              {/* Left: ID and Title */}
              <div className="flex items-center gap-6 service-info">
                <h3 className="text-xl font-bold text-white">{service.id}</h3>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Right: Description & Button */}
              <div className="flex flex-col justify-between w-full gap-4 sm:flex-row sm:items-center md:w-auto md:gap-8">
                <p className="text-gray-300 md:flex-1 text-start service-text-center">
                  {service.description}
                </p>
                <div className="shrink-0 m-button">
                  <ButtonOne text="Details" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceCards;
