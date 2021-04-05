import { IProject } from "interfaces/project";
import React from "react";
import classes from "./Description.module.css";

interface IProps {
  project: IProject;
}

const Description: React.FC<IProps> = ({ project }) => {
  return (
    <div className={classes.Description}>
      <h2 className={classes.ProjectTitle}>{project.name}</h2>
      <p className={classes.ProjectInfo}>{project.description}</p>
      <p className={classes.ProjectInfo}>
        This compaign was launched on {project.created_on}
      </p>
      <p className={classes.ProjectInfo}>
        <i className="fas fa-map-marker"></i> {project.city} {project.state},{" "}
        {project.zipcode}
      </p>
    </div>
  );
};

export default Description;
