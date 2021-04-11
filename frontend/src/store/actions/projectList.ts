import { IProjectList } from "interfaces/project";
import { ProjectListActionType } from "./actionTypes";

export interface IProjectListDispatchType {
  type: ProjectListActionType;
  payload?: { projects?: IProjectList[] };
}

export const fetchProjectList = (): IProjectListDispatchType => {
  return {
    type: "FETCH_PROJECT_LIST_INIT",
  };
};

export const fetchProjectListInProgress = (): IProjectListDispatchType => {
  return {
    type: "FETCH_PROJECT_LIST_INPROGRESS",
  };
};

export const fetchProjectListSuccess = (
  projects: IProjectList[]
): IProjectListDispatchType => {
  return {
    type: "FETCH_PROJECT_LIST_SUCCESS",
    payload: { projects },
  };
};

export const fetchProjectListFailed = (): IProjectListDispatchType => {
  return {
    type: "FETCH_PROJECT_LIST_FAILED",
  };
};
