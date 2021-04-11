import { IProjectDetail } from "interfaces/project";
import { ProjectDetailActionType } from "./actionTypes";

export interface IProjectDetailDispatchType {
  type: ProjectDetailActionType;
  payload?: { project?: IProjectDetail; slug?: string };
}

export const fetchProjectDetail = (
  slug: string
): IProjectDetailDispatchType => {
  return {
    type: "FETCH_PROJECT_DETAIL_INIT",
    payload: { slug },
  };
};

export const fetchProjectDetailInProgress = (): IProjectDetailDispatchType => {
  return {
    type: "FETCH_PROJECT_DETAIL_INPROGRESS",
  };
};

export const fetchProjectDetailSuccess = (
  project: IProjectDetail
): IProjectDetailDispatchType => {
  return {
    type: "FETCH_PROJECT_DETAIL_SUCCESS",
    payload: { project },
  };
};

export const fetchProjectDetailFailed = (): IProjectDetailDispatchType => {
  return {
    type: "FETCH_PROJECT_DETAIL_FAILED",
  };
};
