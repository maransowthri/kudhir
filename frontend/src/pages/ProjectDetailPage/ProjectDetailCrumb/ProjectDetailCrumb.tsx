import Button from "components/UI/Button/Button";
import { FundsType } from "interfaces/funds";
import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./ProjectDetailCrumb.module.css";

interface IProps {
  slug: string;
}

const ProjectDetailCrumb: React.FC<IProps> = ({ slug }) => {
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
  };

  const goToFundsPage = (page: FundsType) => {
    history.push(`/projects/${slug}/${page.toLowerCase()}`);
  };

  return (
    <div>
      <div className={classes.BreadCrumb}>
        <Button type="secondary" action={backToHome}>
          <i className="fas fa-home"></i>
        </Button>
        <Button type="secondary" action={() => goToFundsPage("DELIVERED")}>
          Delivered
        </Button>
        <Button type="secondary" action={() => goToFundsPage("RECEIVED")}>
          Received
        </Button>
        <Button type="secondary" action={() => goToFundsPage("TARGETED")}>
          Targeted
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetailCrumb;
