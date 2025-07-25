import Image from "next/image";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import ServiceCards from "./ServiceCards";

const ServiceSection = () => {
  return (
    <section className="px-8 py-10 text-white bg-[#1c1d20]">
      <div className="container mx-auto text-center">
        <h1 className="flex items-center justify-center mt-10 mb-5 text-xl font-bold site-text">
          <FaHandsClapping className="mr-5 text-2xl site-text" />
          Exceptional Services
        </h1>
        <div>
          <div>
            <Image
              src="/images/random-shape.webp"
              width={80}
              height={80}
              alt="Service Image"
            />
          </div>
          <h2 className="text-6xl font-extrabold service-title">
            Delivering <span className="site-text">Solutions</span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <ServiceCards />
      </div>
    </section>
  );
};

export default ServiceSection;
