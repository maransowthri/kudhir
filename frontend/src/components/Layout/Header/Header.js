import React from "react";

import classes from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <Navbar />
    </div>
  );
};

export default Header;
