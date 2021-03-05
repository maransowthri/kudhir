import React from "react";
import Logo from "../../../UI/Logo/Logo";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={classes.NavigationItems}>
        <NavigationItems />
      </div>
    </div>
  );
};

export default Navbar;
