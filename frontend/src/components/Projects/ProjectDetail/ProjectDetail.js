import React, { useEffect, useState } from "react";

import classes from "./ProjectDetail.module.css";
import { SAMPLE_PROJECTS } from "../../Projects/Projects";
import Button from "../../UI/Button/Button";
import Carousel from "./Carousel/Carousel";

const ProjectDetail = (props) => {
  const [project, setProject] = useState(null);
  const slug = props.match.params.slug;

  useEffect(() => {
    const currentProject = SAMPLE_PROJECTS.find(
      (project) => project.slug === slug
    );
    setProject(currentProject);
  }, [slug]);

  const projectSection = project && (
    <div>
      <Carousel images={project.images} />
      <div className={classes.ProjectDetailSection}>
        <div className={classes.ProjectDetailLeft}>
          <div className={classes.ProjectObjective}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>This compaign was launched on {project.created_on}</p>
            <p>
              <i className="fas fa-map-marker"></i> {project.city}{" "}
              {project.state}, {project.zipcode}
            </p>
          </div>
          <div className={classes.ProjectAmount}>
            <Button type="secondary" action={() => {}}>
              <i className="fas fa-money-bill-alt"></i> Targeted: ₹{" "}
              {project.targeted_amount}
            </Button>
            <Button type="secondary" action={() => {}}>
              <i className="fas fa-money-bill-alt"></i> Received: ₹{" "}
              {project.received_amount}
            </Button>
            <Button type="secondary" action={() => {}}>
              <i className="fas fa-money-bill-alt"></i> Delivered: ₹{" "}
              {project.delivered_amount}
            </Button>
          </div>
          <div className={classes.HonarableMentions}>
            <h2>Thanks to below individuals for making this happen!</h2>
          </div>
          <div className={classes.Socials}>
            <h2>Let's connect and work together!</h2>
          </div>
        </div>
        <div className={classes.ProjectDetailRight}>
          <h2>Payments</h2>
        </div>
      </div>
    </div>
  );

  const backToHome = () => {
    props.history.push("/");
  };

  return (
    <div className={classes.ProjectDetail}>
      <div className={classes.BreadCrumb}>
        <Button type="secondary" action={backToHome}>
          <i className="fas fa-home"></i> BACK
        </Button>
        <Button type="secondary" action={() => {}}>
          Details
        </Button>
      </div>
      {projectSection}
    </div>
  );
};

export default ProjectDetail;
