import BlogDetails from "@/components/BlogsPage/BlogDetails/BlogDetails";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(
  props: Promise<{ params: { slug: string } }>
): Promise<Metadata> {
  const { params } = await props;
  const formatted = params.slug.replace(/-/g, " ");
  return {
    title: `${formatted} | Blog`,
    description: `Detailed post about ${formatted}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetails slug={params.slug} />;
}
