import React, { useState, useEffect } from "react";
import Projects from "components/Projects/Projects";
import classes from "./HomePage.module.css";
import { IProject } from "interfaces/project";

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loadingState, setloadingState] = useState(false);

  useEffect(() => {
    setloadingState(true);
    fetch("/api/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProjects(data);
        setloadingState(false);
      })
      .catch((err) => {
        console.log(err);
        setloadingState(false);
      });
  }, []);

  return (
    <div>
      <h3 className={classes.HomePageTitle}>The people who need your help!</h3>
      {loadingState ? <p>Loading...</p> : <Projects projects={projects} />}
    </div>
  );
};

export default HomePage;
