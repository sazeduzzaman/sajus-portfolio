import BlogDetails from "@/components/BlogsPage/BlogDetails/BlogDetails";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } =await params;

  return <div className="">
    <BlogDetails slug={slug}></BlogDetails>
  </div>;
}
