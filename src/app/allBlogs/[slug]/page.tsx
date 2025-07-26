import BlogDetails from "@/components/BlogsPage/BlogDetails/BlogDetails";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import React from "react";

// The function must be async and you must await params
export default async function BlogPage(props: Promise<{ params: { slug: string } }>) {
  const { params } = await props;
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
