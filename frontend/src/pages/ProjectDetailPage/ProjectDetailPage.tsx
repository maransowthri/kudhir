import React, { useRef } from "react";
import ProjectDetail from "components/ProjectDetail/ProjectDetail";
import Button from "components/UI/Button/Button";
import classes from "./ProjectDetailPage.module.css";
import { SAMPLE_PROJECTS } from "dummy/projects";
import { RouteComponentProps } from "react-router";

interface IRouterParams {
  slug: string;
}

interface IProps extends RouteComponentProps<IRouterParams> {}

const ProjectDetailPage: React.FC<IProps> = ({ match, history }) => {
  const detailsSectionRef = useRef<HTMLDivElement>(null);
  const donateSectionRef = useRef<HTMLDivElement>(null);
  const slug = match.params.slug;
  const project = SAMPLE_PROJECTS.find((project) => project.slug === slug)!;

  const backToHome = () => {
    history.push("/");
  };

  const goToReceivedFundsPage = () => {
    history.push(`/projects/${project.slug}/received`);
  };

  const goToDeliveredFundsPage = () => {
    history.push(`/projects/${project.slug}/delivered`);
  };

  const goToTargetedFundsPage = () => {
    history.push(`/projects/${project.slug}/targeted`);
  };

  const goToProjectDetails = () => {
    detailsSectionRef.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToDonate = () => {
    donateSectionRef.current!.scrollIntoView({
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
          About
        </Button>
        <Button type="secondary" action={goToTargetedFundsPage}>
          Targeted Funds
        </Button>
        <Button type="secondary" action={goToReceivedFundsPage}>
          Received Funds
        </Button>
        <Button type="secondary" action={goToDeliveredFundsPage}>
          Delivered Funds
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
