import React from "react";
import { FaHandsClapping } from "react-icons/fa6";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  return (
    <div className="container px-4 py-20 mx-auto">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="flex items-center mb-5 font-bold text-black text-1xl">
          <FaHandsClapping className="text-2xl me-5 site-text-two" />
          Latest News
        </h1>
        <h4 className="mb-4 font-medium text-black banner-title">
          Blogs & <span className="typing-text">Articles</span>
        </h4>
      </div>
      <BlogsCard />
    </div>
  );
};

export default Blogs;
