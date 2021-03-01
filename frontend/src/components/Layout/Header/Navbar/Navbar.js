import React from "react";
import Logo from "../../../UI/Logo/Logo";
import { Link } from "react-router-dom";

import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <Link to="/">
        <Logo />
      </Link>

      <ul>
        <li>
          <NavigationItem to="/mvc">MVC</NavigationItem>
          <NavigationItem to="/story">Story</NavigationItem>
          <NavigationItem to="/about">About</NavigationItem>
          <NavigationItem to="/signin">SignIn</NavigationItem>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
