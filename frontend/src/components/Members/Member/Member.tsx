import React from "react";
import classes from "./Member.module.css";

interface IProps {
  name: string;
  logo: string;
  website: string;
}

const Member: React.FC<IProps> = ({ name, logo, website }) => {
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
