import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectDetail from "components/ProjectDetail/ProjectDetail";
import { RouteComponentProps } from "react-router";
import { IProjectDetailState } from "store/reducers/projectDetail";
import { fetchProjectDetail } from "store/actions/projectDetail";
import { IRootReducer } from "interfaces/store";
import { IProjectRouterParams } from "interfaces/project";
import ProjectDetailCrumb from "./ProjectDetailCrumb/ProjectDetailCrumb";
import classes from "./ProjectDetailPage.module.css";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ProjectDetailPage: React.FC<IProps> = ({ match }) => {
  const slug = match.params.slug;
  const dispatch = useDispatch();
  const { project, loading, error } = useSelector<
    IRootReducer,
    IProjectDetailState
  >((state) => ({ ...state.projectDetail }));

  useEffect(() => {
    dispatch(fetchProjectDetail(slug));
  }, [dispatch, slug]);

  return (
    <div className={classes.ProjectDetailPage}>
      {loading ? (
        <p>Loading...</p>
      ) : project ? (
        <>
          <ProjectDetailCrumb slug={project.slug} />
          <ProjectDetail project={project} />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default ProjectDetailPage;
