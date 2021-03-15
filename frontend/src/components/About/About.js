import React from "react";

import Contacts from "./Contacts/Contacts";
import Description from "./Description/Description";
import People from "./People/People";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <div className={classes.About}>
      <Description />
      <Contacts />
      <People />
    </div>
  );
};

export default About;
