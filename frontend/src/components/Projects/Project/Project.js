import React from "react";
import { withRouter } from "react-router-dom";

import Button from "../../UI/Button/Button";
import classes from "./Project.module.css";

const Project = ({ project, history }) => {
  const openProjectDetails = () => {
    history.push(`projects/${project.slug}`);
  };

  return (
    <div className={classes.Project}>
      <div className={classes.ProjectImageSection}>
        <img
          className={classes.ProjectImage}
          src={project.images[0]}
          alt={project.name}
        />
        <h3>
          <span className={classes.Badge}>
            Received: ₹{project.received_amount}
          </span>
        </h3>
      </div>
      <div className={classes.ProjectContent}>
        <div className={classes.ProjectDetails}>
          <h3 className={classes.ProjectTitle}>{project.name}</h3>
          <p className={classes.ProjectAddress}>
            <i className="fas fa-map-marker"></i> {project.city} {project.state}
            , {project.zipcode}
          </p>
        </div>
        <div className={classes.ProjectSocials}>
          <a href={project.youtube_link} target="_blank" rel="noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href={project.instagram_link} target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href={project.facebook_link} rel="noreferrer" target="_blank">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href={project.twitter_link} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
        <div className={classes.CreatedTime}>
          <p>Created on {project.created_on}</p>
        </div>
        <div className={classes.MoreInfo}>
          <Button action={openProjectDetails} type="primary" size="block">
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Project);
