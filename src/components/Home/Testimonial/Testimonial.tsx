import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FaHandsClapping } from "react-icons/fa6";
import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
  return (
    <section className="px-4 py-16 text-white bg-[#1c1d20] md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <div className="testimonial-box">
              <h1 className="flex items-center mb-4 text-lg font-semibold site-text">
                <FaHandsClapping className="mr-3 text-xl site-text" />
                Exceptional Services
              </h1>

              <h2 className="text-3xl font-extrabold leading-snug md:text-5xl testi-title">
                Clients' Say <br />
                <span className="site-text">About Me</span>
              </h2>
            </div>

            {/* Ratings Box */}
            <div className="p-6 mt-8 border rounded-xl bg-[#2a2b30] review">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-5xl font-bold">4.8</h1>
                <div>
                  <p className="text-sm text-gray-300">Based on 100+ reviews</p>
                  <p className="text-sm text-gray-300">
                    Your feedback matters!
                  </p>
                  <div className="mt-1">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill
                        key={i}
                        className="inline mr-1 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Testimonials */}
          <div>
            <TestimonialCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
