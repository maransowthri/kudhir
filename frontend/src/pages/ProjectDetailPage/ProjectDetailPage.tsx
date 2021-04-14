import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectDetail from "components/ProjectDetail/ProjectDetail";
import { RouteComponentProps } from "react-router";
import { IProjectState } from "store/reducers/projects";
import { fetchProjectDetail } from "store/actions/projects";
import { IRootReducer } from "interfaces/store";
import { IProjectRouterParams } from "interfaces/project";
import ProjectDetailCrumb from "./ProjectDetailCrumb/ProjectDetailCrumb";
import classes from "./ProjectDetailPage.module.css";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ProjectDetailPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const slug = match.params.slug;
  const dispatch = useDispatch();
  const { project, loading, error } = useSelector<IRootReducer, IProjectState>(
    (state) => ({ ...state.projects })
  );

  useEffect(() => {
    dispatch(fetchProjectDetail(slug));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (project) {
    result = (
      <>
        <ProjectDetailCrumb slug={project.slug} />
        <ProjectDetail project={project} />
      </>
    );
  } else {
    result = <Alert type="error" message={error} />;
  }

  return <div className={classes.ProjectDetailPage}>{result}</div>;
};

export default ProjectDetailPage;
