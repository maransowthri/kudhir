import React from "react";
import Backdrop from "components/UI/Backdrop/Backdrop";
import NavigationItems from "../../NavigationItems/NavigationItems";

import classes from "./SideDrawer.module.css";

interface IProps {
  drawerState: boolean;
  toggleDrawer: () => void;
}

const SideDrawer: React.FC<IProps> = ({ drawerState, toggleDrawer }) => {
  const classNames = [
    classes.SideDrawer,
    drawerState ? classes.OpenDrawer : classes.CloseDrawer,
  ].join(" ");

  return (
    <>
      <Backdrop show={drawerState} toggleState={toggleDrawer} />
      <div className={classNames} onClick={toggleDrawer}>
        <NavigationItems />
      </div>
    </>
  );
};

export default SideDrawer;
