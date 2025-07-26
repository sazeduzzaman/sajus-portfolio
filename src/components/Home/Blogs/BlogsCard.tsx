import ButtonTwo from "@/components/Buttons/ButtonTwo";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    description:
      "Explore the power and performance benefits of React Server Components in modern web development.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg", // Make sure this path exists in your public folder
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS Layouts",
    description:
      "Learn how to craft beautiful and responsive UI layouts using Tailwind CSS best practices.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
  {
    id: 3,
    title: "Next.js 14 App Router Guide",
    description:
      "A complete walkthrough of the new App Router in Next.js 14 with examples and patterns.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
];

const BlogsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
              <span>UI/UX Design</span>
              <span>26 Jul 25</span>
            </div>
            <h3 className="mb-2 text-2xl font-semibold">{blog.title}</h3>
            <p className="mb-4 text-gray-600">{blog.description}</p>
            <ButtonTwo text="Read More" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsCard;
