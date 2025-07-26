"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { LiaUsersSolid } from "react-icons/lia";
import { PiHouseLineBold } from "react-icons/pi";
import { IoBookmarksOutline, IoClose } from "react-icons/io5";

const Cources = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample course data
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

  // Sample certificate data
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
    <div className="relative p-6 text-black bg-white">
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
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Grid Content */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Courses Column */}
        <div>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={400}
                  className="cursor-pointer rounded-2xl"
                  onClick={() => setSelectedImage(course.image)}
                />
                <div>
                  <h4 className="text-3xl font-bold">{course.title}</h4>
                  <p className="flex items-center mt-5 text-lg text-gray-700">
                    <PiHouseLineBold className="font-bold me-3" />
                    {course.description}
                  </p>
                  {course.batch && (
                    <p className="flex items-center text-lg text-gray-700">
                      <LiaUsersSolid className="font-bold me-3" />
                      {course.batch}
                    </p>
                  )}
                  {course.date && (
                    <p className="flex items-center mt-5 text-sm text-gray-500">
                      <BsClockHistory className="font-bold me-3" />
                      {course.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Column */}
        <div>
          <div className="space-y-2">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={400}
                  className="cursor-pointer rounded-2xl"
                  onClick={() => setSelectedImage(cert.image)}
                />
                <div className="">
                  <h4 className="mb-5 text-3xl font-bold">{cert.title}</h4>
                  <p className="flex items-center mt-5 text-lg text-gray-700">
                    <PiHouseLineBold className="font-bold me-3" />
                    {cert.description}
                  </p>
                  <p className="flex items-center text-lg text-gray-700">
                    <IoBookmarksOutline className="font-bold me-3" />
                    {cert.purpuse}
                  </p>
                  {cert.date && (
                    <p className="flex items-center mt-5 text-sm text-gray-500">
                      <BsClockHistory className="font-bold me-3" />
                      {cert.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
