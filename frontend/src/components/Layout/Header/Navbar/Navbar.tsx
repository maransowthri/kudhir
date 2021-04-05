import React from "react";
import Logo from "components/UI/Logo/Logo";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Navbar: React.FC = () => {
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
