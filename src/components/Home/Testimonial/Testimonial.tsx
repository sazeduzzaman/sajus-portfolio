import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FaHandsClapping } from "react-icons/fa6";
import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
  return (
    <section className="px-8 py-20 text-white bg-[#1c1d20]">
      <div className="container mx-auto">
        {/* Fixed: grid class and correct layout */}
        <div className="grid items-center grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-6">
            <div>
              <h1 className="flex items-center mb-5 text-xl font-bold site-text">
                <FaHandsClapping className="mr-5 text-2xl site-text" />
                Exceptional Services
              </h1>

              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Clients' Say Something <br />
                <span className="site-text">About Me </span>
              </h2>
            </div>
            <div className="w-1/2 mt-10 border card">
              <div className="p-4 card-body">
                <div className="flex items-center justify-between">
                  <h1 className="text-5xl font-bold">4.8</h1>
                  <div>
                    <p className="text-lg text-gray-300">
                      Based on 100+ reviews
                    </p>
                    <p className="text-lg text-gray-300">
                      Your feedback matters!
                    </p>
                    <p>
                      <BsStarFill className="inline text-yellow-400" />
                      <BsStarFill className="inline text-yellow-400" />
                      <BsStarFill className="inline text-yellow-400" />
                      <BsStarFill className="inline text-yellow-400" />
                      <BsStarFill className="inline text-yellow-400" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-span-12 md:col-span-6">
            <TestimonialCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
