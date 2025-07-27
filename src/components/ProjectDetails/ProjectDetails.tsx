import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import ProjectInformation from "./ProjectInformation";

type Props = {
  slug: string;
};

const ProjectDetails = ({ slug }: Props) => {
  console.log(slug);
  return (
    <div>
      <CommonBanner
        title={slug}
        currentPage={slug}
        parentPage={{ href: `/projects/${slug}` }} // fixed here
      />
      <ProjectInformation slug={slug} />
    </div>
  );
};

export default ProjectDetails;
