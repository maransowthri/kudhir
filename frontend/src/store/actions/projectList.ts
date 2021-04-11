import { IProjectList } from "interfaces/project";
import { ProjectListActionType } from "./actionTypes";

type IProjectActionReturnType = {
  type: ProjectListActionType;
  payload?: { projects?: IProjectList[] };
};

export const fetchProjectList = (): IProjectActionReturnType => {
  return {
    type: "FETCH_PROJECT_LIST_INIT",
  };
};

export const fetchProjectListInProgress = (): IProjectActionReturnType => {
  return {
    type: "FETCH_PROJECT_LIST_INPROGRESS",
  };
};

export const fetchProjectListSuccess = (
  projects: IProjectList[]
): IProjectActionReturnType => {
  return {
    type: "FETCH_PROJECT_LIST_SUCCESS",
    payload: { projects },
  };
};

export const fetchProjectListFailed = (): IProjectActionReturnType => {
  return {
    type: "FETCH_PROJECT_LIST_FAILED",
  };
};
