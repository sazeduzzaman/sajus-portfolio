import BlogDetails from "@/components/BlogsPage/BlogDetails/BlogDetails";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="">
      <CommonBanner
        title={slug}
        currentPage={slug}
        parentPage={{ href: `/projects/${slug}` }} // fixed here
      />
      <BlogDetails slug={slug}></BlogDetails>
    </div>
  );
}
