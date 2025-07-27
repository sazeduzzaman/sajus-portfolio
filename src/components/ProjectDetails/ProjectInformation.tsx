"use client";

import React, { useEffect, useState } from "react";
import ProjectSingleInfo from "./ProjectSingleInfo";

type Props = {
  slug: string;
};

const ProjectInformation = ({ slug }: Props) => {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch("/data/project.json");
      const data = await res.json();
      const matched = data.find((p: any) => p.slug === slug);
      setProject(matched);
    };

    fetchProject();
  }, [slug]);

  if (!project) {
    return (
      <div className="py-20 text-center text-red-500">
        Project not found for slug: <strong>{slug}</strong>
      </div>
    );
  }

  // Don't render the object directly — instead render a component!
  return (
    <div className="text-gray-800 bg-white">
      <ProjectSingleInfo project={project} />
    </div>
  );
};

export default ProjectInformation;
