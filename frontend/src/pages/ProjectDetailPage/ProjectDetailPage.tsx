import React, { useRef, useState, useEffect } from "react";
import ProjectDetail from "components/ProjectDetail/ProjectDetail";
import Button from "components/UI/Button/Button";
import classes from "./ProjectDetailPage.module.css";
import { RouteComponentProps } from "react-router";
import { IProjectDetail } from "interfaces/project";

interface IRouterParams {
  slug: string;
}

interface IProps extends RouteComponentProps<IRouterParams> {}

const ProjectDetailPage: React.FC<IProps> = ({ match, history }) => {
  const [project, setProject] = useState<IProjectDetail | null>(null);
  const [loadingState, setLoadingState] = useState(false);
  const detailsSectionRef = useRef<HTMLDivElement>(null);
  const donateSectionRef = useRef<HTMLDivElement>(null);
  const slug = match.params.slug;

  useEffect(() => {
    setLoadingState(true);
    fetch(`/api/projects/${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadingState(false);
        setProject(data[0]);
      })
      .catch((err) => {
        setLoadingState(false);
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
      {loadingState ? (
        <p>Loading...</p>
      ) : project ? (
        <ProjectDetail
          project={project}
          donateSectionRef={donateSectionRef}
          detailsSectionRef={detailsSectionRef}
        />
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default ProjectDetailPage;
