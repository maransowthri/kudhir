import { IProjectDetail } from "interfaces/project";
import { IProjectDetailDispatchType } from "../actions/projectDetail";

export interface IProjectDetailState {
  project: IProjectDetail | null;
  loading: boolean;
  error: string;
}

type IProjectDetailMethod = (
  state: IProjectDetailState,
  action: IProjectDetailDispatchType
) => IProjectDetailState;

const initialState = {
  project: null,
  loading: false,
  error: "",
} as IProjectDetailState;

const fetchProjectDetailInProgress: IProjectDetailMethod = (state, _) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchProjectDetailSuccess: IProjectDetailMethod = (state, action) => {
  return {
    ...state,
    loading: false,
    project: action.payload?.project!,
  };
};

const fetchProjectDetailFailed: IProjectDetailMethod = (state, _) => {
  return {
    ...state,
    loading: false,
    error: "Something went wrong!",
  };
};

function reducer(
  state = initialState,
  action: IProjectDetailDispatchType
): IProjectDetailState {
  switch (action.type) {
    case "FETCH_PROJECT_DETAIL_INPROGRESS":
      return fetchProjectDetailInProgress(state, action);
    case "FETCH_PROJECT_DETAIL_SUCCESS":
      return fetchProjectDetailSuccess(state, action);
    case "FETCH_PROJECT_DETAIL_FAILED":
      return fetchProjectDetailFailed(state, action);
    default:
      return state;
  }
}

export default reducer;
