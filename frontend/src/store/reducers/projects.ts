import { IProjectDetail } from "interfaces/project";
import { IProjectList } from "interfaces/project";
import { IProjectDispatchType } from "../actions/projects";

export interface IProjectState {
  projects: IProjectList[] | null;
  project: IProjectDetail | null;
  loading: boolean;
  error: string;
}

type IProjectMethod = (
  state: IProjectState,
  action: IProjectDispatchType
) => IProjectState;

const initialState = {
  projects: null,
  project: null,
  loading: false,
  error: "",
} as IProjectState;

const fetchProjectInProgress: IProjectMethod = (state, _): IProjectState => {
  return {
    ...state,
    loading: true,
  };
};

const fetchProjectFailed: IProjectMethod = (state, _): IProjectState => {
  return {
    ...state,
    loading: false,
    error: "Something went wrong!",
  };
};

const fetchProjectDetailSuccess: IProjectMethod = (
  state,
  action
): IProjectState => {
  return {
    ...state,
    loading: false,
    project: action.payload?.project!,
  };
};

const fetchProjectListSuccess: IProjectMethod = (
  state,
  action
): IProjectState => {
  return {
    ...state,
    loading: false,
    projects: action.payload?.projects!,
  };
};

function reducer(
  state = initialState,
  action: IProjectDispatchType
): IProjectState {
  switch (action.type) {
    case "FETCH_PROJECT_INPROGRESS":
      return fetchProjectInProgress(state, action);
    case "FETCH_PROJECT_FAILED":
      return fetchProjectFailed(state, action);
    case "FETCH_PROJECT_DETAIL_SUCCESS":
      return fetchProjectDetailSuccess(state, action);
    case "FETCH_PROJECT_LIST_SUCCESS":
      return fetchProjectListSuccess(state, action);
    default:
      return state;
  }
}

export default reducer;
