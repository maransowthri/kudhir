import React from "react";

import classes from "./Mentions.module.css";

const Mentions = ({ project }) => {
  const mentions = project.members.map((member) => (
    <li>
      <strong>
        <a href={member.portfolio} target="_blank" rel="noreferrer">
          {member.name}
        </a>
      </strong>
      <p>{member.bio}</p>
    </li>
  ));
  return (
    <div className={classes.Mentions}>
      <h2>Honorable Mentions!</h2>
      <ul>{mentions}</ul>
    </div>
  );
};

export default Mentions;
