import { IProjectList } from "interfaces/project";
import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css";

interface IProps {
  projects: IProjectList[];
}

const Projects: React.FC<IProps> = ({ projects }) => {
  const projectList = projects.map((project) => (
    <Project key={project.id} project={project} />
  ));

  return (
    <>
      <div className={classes.Projects}>{projectList}</div>
    </>
  );
};

export default Projects;
