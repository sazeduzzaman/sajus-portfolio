import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="">
      <ProjectDetails slug={slug}></ProjectDetails>
    </div>
  );
}
