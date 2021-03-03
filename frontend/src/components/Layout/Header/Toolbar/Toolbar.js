import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../UI/Logo/Logo";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.BurgerIcon}></div>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default Toolbar;
