import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import classes from "./NavigationItem.module.css";

interface IProps extends NavLinkProps {}

const NavigationItem: React.FC<IProps> = ({ to, children }) => {
  return (
    <span className={classes.NavigationItem}>
      <NavLink activeClassName={classes.Active} to={to}>
        {children}
      </NavLink>
    </span>
  );
};

export default NavigationItem;
