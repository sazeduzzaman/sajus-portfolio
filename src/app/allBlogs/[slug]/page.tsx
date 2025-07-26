import BlogDetails from "@/components/BlogsPage/BlogDetails/BlogDetails";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import React from "react";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

// ✅ Do NOT make props a Promise type
export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  return (
    <div>
      <CommonBanner
        title={slug.replace(/-/g, " ")}
        currentPage={slug}
        parentPage={{ href: `/allBlogs/${slug}` }}
      />
      <BlogDetails slug={slug} />
    </div>
  );
}
