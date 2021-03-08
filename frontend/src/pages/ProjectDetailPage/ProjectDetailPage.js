import React, { useRef } from "react";

import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import Button from "../../components/UI/Button/Button";
import classes from "./ProjectDetailPage.module.css";

import { SAMPLE_PROJECTS } from "../../components/Projects/Projects";

const ProjectDetailPage = (props) => {
  const detailsSectionRef = useRef();
  const slug = props.match.params.slug;
  const project = SAMPLE_PROJECTS.find((project) => project.slug === slug);

  const backToHome = () => {
    props.history.push("/");
  };

  const goToProjectDetails = () => {
    detailsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={classes.BreadCrumb}>
        <Button type="secondary" action={backToHome}>
          <i className="fas fa-home"></i> BACK
        </Button>
        <Button type="secondary" action={goToProjectDetails}>
          Details
        </Button>
      </div>
      <ProjectDetail project={project} detailsSectionRef={detailsSectionRef} />
    </>
  );
};

export default ProjectDetailPage;
