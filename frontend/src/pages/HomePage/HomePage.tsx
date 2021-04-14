import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Projects from "components/Projects/Projects";
import classes from "./HomePage.module.css";
import { fetchProjectList } from "store/actions/projects";
import { IProjectState } from "store/reducers/projects";
import { IRootReducer } from "interfaces/store";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

const HomePage: React.FC = () => {
  let result = null;
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector<IRootReducer, IProjectState>(
    (state) => ({ ...state.projects })
  );

  useEffect(() => {
    dispatch(fetchProjectList());
  }, [dispatch]);

  if (loading) {
    result = <Loader />;
  } else if (projects) {
    result = <Projects projects={projects} />;
  } else {
    result = <Alert type="error" message={error} />;
  }

  return (
    <div>
      <h3 className={classes.HomePageTitle}>The people who need your help!</h3>
      {result}
    </div>
  );
};

export default HomePage;
