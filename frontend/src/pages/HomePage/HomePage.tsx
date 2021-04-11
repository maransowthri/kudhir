import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Projects from "components/Projects/Projects";
import classes from "./HomePage.module.css";
import { fetchProjectList } from "store/actions/projectList";
import { IProjectListState } from "store/reducers/projectList";
import { IRootReducer } from "interfaces/store";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector<
    IRootReducer,
    IProjectListState
  >((state) => ({ ...state.projectList }));

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
