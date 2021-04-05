import React from "react";
import Backdrop from "components/UI/Backdrop/Backdrop";
import NavigationItems from "../../NavigationItems/NavigationItems";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const classNames = [
    classes.SideDrawer,
    props.drawerState ? classes.OpenDrawer : classes.CloseDrawer,
  ].join(" ");

  return (
    <>
      <Backdrop show={props.drawerState} toggleState={props.toggleDrawer} />
      <div className={classNames} onClick={props.toggleDrawer}>
        <NavigationItems />
      </div>
    </>
  );
};

export default SideDrawer;
