import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Projects from "components/Projects/Projects";
import classes from "./HomePage.module.css";
import { fetchProjectList } from "store/actions/projectList";
import { IProjectListState } from "store/reducers/projectList";
import { IProjectList } from "interfaces/project";

type ProjectListSelectorType = { projectList: IProjectListState };

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector<ProjectListSelectorType, IProjectList[] | null>(
    (state) => state.projectList.projects
  );
  const loading = useSelector<ProjectListSelectorType, boolean>(
    (state) => state.projectList.loading
  );
  const error = useSelector<ProjectListSelectorType, string>(
    (state) => state.projectList.error
  );

  useEffect(() => {
    dispatch(fetchProjectList());
  }, [dispatch]);

  return (
    <div>
      <h3 className={classes.HomePageTitle}>The people who need your help!</h3>
      {loading ? (
        <p>Loading...</p>
      ) : projects ? (
        <Projects projects={projects} />
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default HomePage;
