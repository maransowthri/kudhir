import { IProjectList } from "interfaces/project";
import { ProjectListActionType } from "../actions/actionTypes";

export interface IProjectListState {
  projects: IProjectList[] | null;
  loading: boolean;
  error: string;
}

export interface IProjectListAction {
  type: ProjectListActionType;
  payload: {
    projects: IProjectList[];
  };
}

type IProjectListMethod = (
  state: IProjectListState,
  action: IProjectListAction
) => IProjectListState;

const initialState = {
  projects: null,
  loading: false,
  error: "",
} as IProjectListState;

const fetchProjectListInProgress: IProjectListMethod = (state, _) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchProjectListSuccess: IProjectListMethod = (state, action) => {
  return {
    ...state,
    loading: false,
    projects: action.payload.projects,
  };
};

const fetchProjectListFailed: IProjectListMethod = (state, _) => {
  return {
    ...state,
    loading: false,
    error: "Something went wrong!",
  };
};

function reducer(
  state = initialState,
  action: IProjectListAction
): IProjectListState {
  switch (action.type) {
    case "FETCH_PROJECT_LIST_INPROGRESS":
      return fetchProjectListInProgress(state, action);
    case "FETCH_PROJECT_LIST_SUCCESS":
      return fetchProjectListSuccess(state, action);
    case "FETCH_PROJECT_LIST_FAILED":
      return fetchProjectListFailed(state, action);
    default:
      return state;
  }
}

export default reducer;
