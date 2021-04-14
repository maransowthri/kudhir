import { IProjectDetail } from "interfaces/project";
import { IProjectList } from "interfaces/project";
import { ProjectActionType } from "./actionTypes";

export interface IProjectDispatchType {
  type: ProjectActionType;
  payload?: {
    projects?: IProjectList[];
    project?: IProjectDetail;
    slug?: string;
  };
}

export const fetchProjectInProgress = (): IProjectDispatchType => {
  return {
    type: "FETCH_PROJECT_INPROGRESS",
  };
};

export const fetchProjectFailed = (): IProjectDispatchType => {
  return {
    type: "FETCH_PROJECT_FAILED",
  };
};

export const fetchProjectList = (): IProjectDispatchType => {
  return {
    type: "FETCH_PROJECT_LIST_INIT",
  };
};

export const fetchProjectDetail = (slug: string): IProjectDispatchType => {
  return {
    type: "FETCH_PROJECT_DETAIL_INIT",
    payload: { slug },
  };
};

export const fetchProjectListSuccess = (
  projects: IProjectList[]
): IProjectDispatchType => {
  return {
    type: "FETCH_PROJECT_LIST_SUCCESS",
    payload: { projects },
  };
};

export const fetchProjectDetailSuccess = (
  project: IProjectDetail
): IProjectDispatchType => {
  return {
    type: "FETCH_PROJECT_DETAIL_SUCCESS",
    payload: { project },
  };
};
