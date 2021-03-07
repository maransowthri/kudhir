import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <span className={classes.NavigationItem}>
      <NavLink activeClassName={classes.Active} to={props.to}>
        {props.children}
      </NavLink>
    </span>
  );
};

export default NavigationItem;
