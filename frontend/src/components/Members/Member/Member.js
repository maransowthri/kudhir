import React from "react";

import classes from "./Member.module.css";

const Member = ({ name, logo, website }) => {
  return (
    <div className={classes.Member}>
      <a href={website} target="_blank" rel="noreferrer">
        <img className={classes.MemberLogo} src={logo} alt={name} />
        <p className={classes.MemberName}>{name}</p>
      </a>
    </div>
  );
};

export default Member;
