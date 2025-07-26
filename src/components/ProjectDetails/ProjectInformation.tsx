import Image from "next/image";
import React from "react";
import ButtonThree from "../Buttons/ButtonThree";

const ProjectInformation = () => {
  return (
    <div className="text-gray-800 bg-white">
      <div className="container px-4 mx-auto max-w-7xl lg:px-0">
        {/* Banner Image */}
        <div className="py-10">
          <Image
            src="/images/project-single.jpg"
            width={1200}
            height={600}
            alt="Project Cover"
            className="object-cover w-full h-auto shadow-md rounded-3xl"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 my-10 lg:grid-cols-12">
          {/* Main Content */}
          <div className="space-y-10 lg:col-span-9">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-600">
                Create a seamless and engaging food ordering experience.
              </p>
              <h1 className="mt-2 text-2xl font-bold md:text-4xl">
                Food Delivery & Restaurant Website
              </h1>
            </div>

            {/* Description */}
            <p className="leading-relaxed text-gray-700">
              At <strong>Your Restaurant Name</strong>, food is more than just a
              meal—it’s an experience. Whether you’re craving comfort food or
              gourmet dishes, we deliver quality, flavor, and consistency. Fresh
              ingredients, user-friendly ordering, and a commitment to excellence
              make this project a complete package for digital food services.
            </p>

            {/* Research & Insights */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold">
                Research & User Insights
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Understanding customer behavior through surveys and feedback.</li>
                <li>Analyzing user flow and refining the checkout process.</li>
                <li>Ensuring accessibility across all devices.</li>
              </ul>
            </div>

            {/* Problem Statement */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Problem Statement</h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Users struggled with long, complex ordering steps.</li>
                <li>Mobile performance and clarity needed improvement.</li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Key Features</h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Instant order confirmation and live tracking</li>
                <li>Multi-language support</li>
                <li>Admin dashboard for managing orders and menus</li>
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Challenges</h2>
              <p className="leading-relaxed text-gray-700">
                One major challenge was optimizing real-time updates for order
                tracking across devices without impacting performance.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Solutions</h2>
              <p className="leading-relaxed text-gray-700">
                We used WebSockets and a queue-based backend to handle real-time
                data efficiently.
              </p>
            </div>

            {/* Screenshot Gallery */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Image
                src="/images/project-single.jpg"
                width={600}
                height={400}
                alt="Screenshot 1"
                className="object-cover w-full rounded-2xl"
              />
              <Image
                src="/images/project-single.jpg"
                width={600}
                height={400}
                alt="Screenshot 2"
                className="object-cover w-full rounded-2xl"
              />
            </div>

            {/* Client Feedback */}
            <div className="p-6 shadow-sm bg-gray-50 rounded-2xl">
              <h2 className="mb-3 text-2xl font-semibold">Client Feedback</h2>
              <blockquote className="italic text-gray-600">
                “Working with this developer was a great experience. The delivery
                platform exceeded expectations!”
              </blockquote>
              <p className="mt-2 text-sm text-right text-gray-500">
                — GourmetHub CEO
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-first lg:col-span-3 lg:order-last">
            <div className="p-6 space-y-4 bg-gray-100 shadow-sm rounded-2xl">
              <h2 className="mb-2 text-xl font-semibold">Project Info</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Category:</strong> Food / Restaurant
                </li>
                <li>
                  <strong>Client:</strong> GourmetHub
                </li>
                <li>
                  <strong>Role:</strong> Frontend Developer
                </li>
                <li>
                  <strong>Duration:</strong> 3 Months
                </li>
              </ul>

              <h2 className="mt-6 mb-2 text-xl font-semibold">Tech Stack</h2>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-white border rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </ul>

              <div className="mt-6 space-y-2">
                <a
                  href="https://your-live-site.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 text-sm text-center text-white transition bg-green-600 rounded-lg hover:bg-green-700"
                >
                  🌐 Live Preview
                </a>
                <a
                  href="https://github.com/your/repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 text-sm text-center text-white transition bg-gray-800 rounded-lg hover:bg-gray-900"
                >
                  💻 View Code
                </a>
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
              <h2 className="mb-1 text-3xl font-bold">Don't Hesitate To</h2>
              <h2 className="mb-4 text-xl font-bold">Contact Me</h2>
              <p className="mb-6 text-sm text-gray-700">+880 15766 14451</p>
              <ButtonThree text="Get In Touch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
