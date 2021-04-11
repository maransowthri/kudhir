import { IMember } from "interfaces/project";
import React from "react";
import classes from "./Members.module.css";

interface IProps {
  members: IMember[];
}

const Mentions: React.FC<IProps> = ({ members }) => {
  const membersList = members.map((member) => (
    <li key={member.user.id}>
      <a href={member.user.portfolio} target="_blank" rel="noreferrer">
        {member.user.name}
      </a>
      <p>{member.user.bio}</p>
    </li>
  ));
  return (
    <div className={classes.Members}>
      <h2>Honorable Mentions</h2>
      <ol>{membersList}</ol>
    </div>
  );
};

export default Mentions;
