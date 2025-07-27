import ButtonTwo from "@/components/Buttons/ButtonTwo";
import Link from "next/link";
import React from "react";
import './blog.css'

const blogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    slug: "react-server-components",
    description:
      "Explore the power and performance benefits of React Server Components in modern web development.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS Layouts",
    slug: "tailwind-css-layouts",
    description:
      "Learn how to craft beautiful and responsive UI layouts using Tailwind CSS best practices.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
  {
    id: 3,
    title: "Next.js 14 App Router Guide",
    slug: "nextjs-14-app-router",
    description:
      "A complete walkthrough of the new App Router in Next.js 14 with examples and patterns.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
  {
    id: 4,
    title: "Understanding React Server Components",
    slug: "react-server-components",
    description:
      "Explore the power and performance benefits of React Server Components in modern web development.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
  {
    id: 5,
    title: "Mastering Tailwind CSS Layouts",
    slug: "tailwind-css-layouts",
    description:
      "Learn how to craft beautiful and responsive UI layouts using Tailwind CSS best practices.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
  {
    id: 6,
    title: "Next.js 14 App Router Guide",
    slug: "nextjs-14-app-router",
    description:
      "A complete walkthrough of the new App Router in Next.js 14 with examples and patterns.",
    image: "https://jahirul.amaderkaj.com/wp-content/uploads/2025/05/16.jpg",
  },
];

const BlogsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {blogs.map((blog) => (
        <Link href={`/allBlogs/${blog.slug}`} key={blog.id}>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full h-48"
            />
            <div className="p-5 h-65 blog-info">
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <span>UI/UX Design</span>
                <span>26 Jul 25</span>
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{blog.title}</h3>
              <p className="mb-4 text-gray-600">{blog.description}</p>
              <ButtonTwo text="Read More" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsCard;
