"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { LiaUsersSolid } from "react-icons/lia";
import { PiHouseLineBold } from "react-icons/pi";
import { IoBookmarksOutline, IoClose } from "react-icons/io5";

const Cources = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const courses = [
    {
      title: "Web Development Certificate",
      description: "Programming Hero",
      image: "/images/web-development.png",
      batch: "Batch-6",
      date: "2022-December",
    },
    {
      title: "Black Belt in Web Development",
      description: "Programming Hero",
      image: "/images/webdev.png",
      batch: "Batch-6",
      date: "2022-December",
    },
  ];

  const certificates = [
    {
      title: "Certification",
      description: "Certified by NGen It.",
      image: "/images/bestEmployeOfTheYear.jpg",
      purpuse: "Best Employee of the Year",
      date: "2024-January",
    },
  ];

  return (
    <div className="relative px-4 text-black bg-white sm:px-6 lg:px-0">
      {/* Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute text-3xl text-white transition top-4 right-4 hover:text-red-400"
          >
            <IoClose />
          </button>
          <div className="w-full max-w-4xl px-4">
            <Image
              src={selectedImage}
              alt="Zoomed"
              width={800}
              height={600}
              className="w-full h-auto shadow-lg rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Courses */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 bg-gray-100 shadow-sm sm:flex-row rounded-2xl"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={450}
                height={450}
                className="object-cover cursor-pointer rounded-2xl certificate-imge"
                onClick={() => setSelectedImage(course.image)}
              />
              <div>
                <h4 className="text-2xl font-bold">{course.title}</h4>
                <p className="flex items-center mt-3 text-base text-gray-700">
                  <PiHouseLineBold className="me-2 typing-text" />
                  {course.description}
                </p>
                <p className="flex items-center text-base text-gray-700">
                  <LiaUsersSolid className="me-2 typing-text" />
                  {course.batch}
                </p>
                <p className="flex items-center mt-3 text-sm text-gray-500">
                  <BsClockHistory className="me-2 typing-text" />
                  {course.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 bg-gray-100 shadow-sm sm:flex-row rounded-2xl"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={450}
                height={450}
                className="object-cover cursor-pointer rounded-2xl certificate-imge"
                onClick={() => setSelectedImage(cert.image)}
              />
              <div>
                <h4 className="text-2xl font-bold">{cert.title}</h4>
                <p className="flex items-center mt-3 text-base text-gray-700">
                  <PiHouseLineBold className="me-2" />
                  {cert.description}
                </p>
                <p className="flex items-center text-base text-gray-700">
                  <IoBookmarksOutline className="me-2" />
                  {cert.purpuse}
                </p>
                <p className="flex items-center mt-3 text-sm text-gray-500">
                  <BsClockHistory className="me-2" />
                  {cert.date}
                </p>
              </div>
            </div>
          ))}

          <Image
            src="/images/trophy.webp"
            alt="Trophy"
            width={200}
            height={200}
            className="mx-auto rounded-xl mobile-none trophy-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Cources;
