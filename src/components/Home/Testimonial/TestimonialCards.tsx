"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "./Testimonial.css";

export default function TestimonialCards() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This team is amazing! Super fast delivery and top-notch quality.",
      role: "CEO, Startup Inc.",
    },
    {
      name: "Jane Smith",
      feedback:
        "The experience was smooth and the UI design exceeded expectations.",
      role: "Product Manager, DesignHub",
    },
    {
      name: "Ali Khan",
      feedback:
        "Very professional service and fantastic results. Highly recommend!",
      role: "Freelancer",
    },
  ];

  return (
    <div className="flex justify-center py-10">
      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCards, Autoplay]}
        className="w-[90%] sm:w-80 h-[26rem] sm:h-96"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between border h-full p-6 text-white bg-[#2b2d31] rounded-xl shadow-lg">
              <p className="text-base italic leading-relaxed">
                "{item.feedback}"
              </p>

              <div className="flex items-center mt-6 space-x-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${item.name}&background=random&size=128&bold=true`}
                  alt={`Avatar of ${item.name}`}
                  className="rounded-full w-14 h-14 ring-2 ring-white"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
