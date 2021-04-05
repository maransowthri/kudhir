import React from "react";
import classes from "./ProjectDetail.module.css";
import Carousel from "./Carousel/Carousel";
import Description from "./Description/Description";
import Donate from "./Donate/Donate";
import Funds from "./Funds/Funds";
import Members from "./Members/Members";
import Socials from "./Socials/Socials";
import { IProject } from "interfaces/project";

interface IProps {
  project: IProject;
  detailsSectionRef: React.RefObject<HTMLDivElement>;
  donateSectionRef: React.RefObject<HTMLDivElement>;
}

const ProjectDetail: React.FC<IProps> = ({
  project,
  detailsSectionRef,
  donateSectionRef,
}) => {
  return (
    <div className={classes.ProjectDetail}>
      <div>
        <Carousel images={project.images} />
        <div className={classes.ProjectDetailSection}>
          <div ref={detailsSectionRef} className={classes.ProjectDetailLeft}>
            <Description project={project} />
            <Funds
              targeted={project.targeted_amount}
              received={project.received_amount}
              delivered={project.delivered_amount}
            />
            <Members members={project.members} />
          </div>
          <div ref={donateSectionRef} className={classes.ProjectDetailRight}>
            <Donate project={project} />
            <Socials socials={project.socials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
