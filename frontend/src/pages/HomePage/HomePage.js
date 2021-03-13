import React from "react";

import Projects from "../../components/Projects/Projects";
import classes from "./HomePage.module.css";
import { SAMPLE_PROJECTS } from "../../projects";

const HomePage = (props) => {
  const projects = SAMPLE_PROJECTS.filter((project) => project.is_published);

  return (
    <div>
      <h3 className={classes.HomePageTitle}>The people who need your help!</h3>
      <Projects projects={projects} />
    </div>
  );
};

export default HomePage;
