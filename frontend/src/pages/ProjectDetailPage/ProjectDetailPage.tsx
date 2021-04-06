import React, { useRef, useState, useEffect } from "react";
import ProjectDetail from "components/ProjectDetail/ProjectDetail";
import Button from "components/UI/Button/Button";
import classes from "./ProjectDetailPage.module.css";
import { RouteComponentProps } from "react-router";
import { IProject } from "interfaces/project";

interface IRouterParams {
  slug: string;
}

interface IProps extends RouteComponentProps<IRouterParams> {}

const ProjectDetailPage: React.FC<IProps> = ({ match, history }) => {
  const [project, setProject] = useState<IProject | null>(null);
  const detailsSectionRef = useRef<HTMLDivElement>(null);
  const donateSectionRef = useRef<HTMLDivElement>(null);
  const slug = match.params.slug;

  useEffect(() => {
    fetch(`/api/projects/${slug}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProject(data.project);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  const backToHome = () => {
    history.push("/");
  };

  const goToReceivedFundsPage = () => {
    if (project) {
      history.push(`/projects/${project.slug}/received`);
    }
  };

  const goToDeliveredFundsPage = () => {
    if (project) {
      history.push(`/projects/${project.slug}/delivered`);
    }
  };

  const goToTargetedFundsPage = () => {
    if (project) {
      history.push(`/projects/${project.slug}/targeted`);
    }
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
      {project ? (
        <ProjectDetail
          project={project}
          donateSectionRef={donateSectionRef}
          detailsSectionRef={detailsSectionRef}
        />
      ) : (
        <p>Customized 404 Page</p>
      )}
    </>
  );
};

export default ProjectDetailPage;
