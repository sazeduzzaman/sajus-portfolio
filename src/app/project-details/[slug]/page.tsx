import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import React from "react";


  export async function Page({ params }: any) {
  const { slug } = await params; // <-- no await here


  return (
    <div className="">
      <ProjectDetails slug={slug}></ProjectDetails>
    </div>
  );
}
