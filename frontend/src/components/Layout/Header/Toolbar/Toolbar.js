import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../UI/Logo/Logo";
import SideDrawer from "./SideDrawer/SideDrawer";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  const [sideDrawerState, setSideDrawerState] = useState(false)

  const toggleSideDrawer = () => {
    setSideDrawerState(!sideDrawerState)
  }

  return (
    <div className={classes.Toolbar}>
      <SideDrawer drawerState={sideDrawerState} toggleDrawer={toggleSideDrawer} />
      <div onClick={toggleSideDrawer} className={classes.BurgerIcon}></div>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default Toolbar;
