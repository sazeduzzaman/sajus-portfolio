import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import React from "react";

export default async function page({ params }: any) {
  const { slug } = await params; // <-- no await here

  return (
    <div className="">
      <ProjectDetails slug={slug}></ProjectDetails>
    </div>
  );
}
