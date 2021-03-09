import React, { useRef } from "react";

import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import Button from "../../components/UI/Button/Button";
import classes from "./ProjectDetailPage.module.css";

import { SAMPLE_PROJECTS } from "../../components/Projects/Projects";

const ProjectDetailPage = (props) => {
  const detailsSectionRef = useRef();
  const donateSectionRef = useRef();
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

  const goToDonate = () => {
    donateSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={classes.BreadCrumb}>
        <Button type="secondary" action={backToHome}>
          <i className="fas fa-home"></i>
        </Button>
        <Button type="secondary" action={goToDonate}>
          Donate
        </Button>
        <Button type="secondary" action={goToProjectDetails}>
          Project Details
        </Button>
        <Button type="secondary" action={() => {}}>
          Targeted Fund Details
        </Button>
        <Button type="secondary" action={() => {}}>
          Received Fund Details
        </Button>
        <Button type="secondary" action={() => {}}>
          Delivered Fund Details
        </Button>
      </div>
      <ProjectDetail
        project={project}
        donateSectionRef={donateSectionRef}
        detailsSectionRef={detailsSectionRef}
      />
    </>
  );
};

export default ProjectDetailPage;
