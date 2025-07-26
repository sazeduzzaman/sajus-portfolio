import BlogDetails from "@/components/BlogsPage/BlogDetails/BlogDetails";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import React from "react";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  return (
    <div className="">
      <CommonBanner
        title={slug.replace(/-/g, " ")}
        currentPage={slug}
        parentPage={{ href: `/allBlogs/${slug}` }}
      />
      <BlogDetails slug={slug} />
    </div>
  );
}
