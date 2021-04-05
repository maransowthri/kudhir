import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import classes from "./ProjectCrumb.module.css";
import Button from "components/UI/Button/Button";

interface Props extends RouteComponentProps {
  slug: string;
}

const ProjectBreadCrumb: React.FC<Props> = ({ slug, history }) => {
  const backToHome = () => {
    history.push("/");
  };

  const backToProject = () => {
    history.push(`/projects/${slug}`);
  };

  return (
    <div>
      <div className={classes.ProjectCrumb}>
        <Button type="secondary" action={backToHome}>
          <i className="fas fa-home"></i>
        </Button>
        <Button type="secondary" action={backToProject}>
          Project Details
        </Button>
      </div>
    </div>
  );
};

export default withRouter(ProjectBreadCrumb);
