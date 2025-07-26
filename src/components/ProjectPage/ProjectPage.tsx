import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";

const ProjectPage = () => {
  return (
    <div>
      <CommonBanner
        title="Projects"
        currentPage="Project"
        parentPage={{ href: "/projects" }}
      />
    </div>
  );
};

export default ProjectPage;
