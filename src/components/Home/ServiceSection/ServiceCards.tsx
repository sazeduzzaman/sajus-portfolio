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
    <div className="grid gap-6 px-4 md:px-20 lg:px-40">
      {services.map((service) => (
        <Link href={service.link} key={service.id} className="block">
          <div className="p-4 transition-all rounded-lg shadow-md service-cards md:flex md:justify-between md:items-center hover:shadow-lg">
            <div className="flex items-center mb-4 space-x-10 md:mb-0">
              <h3 className="text-lg font-semibold">{service.id}</h3>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            <div className="flex items-center">
              <p className="text-white md:flex-1 md:px-6 text-start">
                {service.description}
              </p>
              <div>
                <ButtonOne text="Details" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceCards;
