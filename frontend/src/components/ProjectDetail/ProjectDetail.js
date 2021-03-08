import React from "react";

import classes from "./ProjectDetail.module.css";
import Carousel from "./Carousel/Carousel";
import Description from "./Description/Description";
import Payments from "./Payments/Payments";
import Amount from "./Amount/Amount";
import Mentions from "./Mentions/Mentions";
import Socials from "./Socials/Socials";

const ProjectDetail = ({ project, detailsSectionRef }) => {
  return (
    <div className={classes.ProjectDetail}>
      <div>
        <Carousel images={project.images} />
        <div ref={detailsSectionRef} className={classes.ProjectDetailSection}>
          <div className={classes.ProjectDetailLeft}>
            <Description project={project} />
            <Amount project={project} />
            <Mentions project={project} />
            <Socials project={project} />
          </div>
          <div className={classes.ProjectDetailRight}>
            <Payments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
