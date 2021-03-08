import React from "react";

import classes from "./Description.module.css";

const Description = ({ project }) => {
  return (
    <div className={classes.Description}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>This compaign was launched on {project.created_on}</p>
      <p>
        <i className="fas fa-map-marker"></i> {project.city} {project.state},{" "}
        {project.zipcode}
      </p>
    </div>
  );
};

export default Description;
