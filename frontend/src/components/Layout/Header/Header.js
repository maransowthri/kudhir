import React from "react";

import classes from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Toolbar from "./Toolbar/Toolbar";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Computer}>
        <Navbar />
      </div>
      <div className={classes.Mobile}>
        <Toolbar />
      </div>
    </div>
  );
};

export default Header;
