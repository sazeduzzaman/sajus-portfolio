import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import FeatureProject from "../Home/Projects/FeatureProject";

const ProjectPage = () => {
  return (
    <div>
      <CommonBanner
        title="Projects"
        currentPage="Project"
        parentPage={{ href: "/projects" }}
      />
      <FeatureProject />
    </div>
  );
};

export default ProjectPage;
