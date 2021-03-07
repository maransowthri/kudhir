import React from "react";

import Projects from "../../components/Projects/Projects";
import classes from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <div>
      <p className={classes.HomePageTitle}>The people who need your help!</p>
      <Projects />
    </div>
  );
};

export default HomePage;
