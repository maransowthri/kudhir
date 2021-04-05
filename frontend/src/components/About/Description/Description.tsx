import React from "react";
import classes from "./Description.module.css";

const Description: React.FC = () => {
  return (
    <div className={classes.Description}>
      <img
        className={classes.Logo}
        src="/logo192.png"
        alt="Kudhir Foundation"
      />
      <h2 className={classes.Title}>Kudhir Foundation</h2>
      <p className={classes.Info}>Donate your hard earned money wisely!</p>
    </div>
  );
};

export default Description;
