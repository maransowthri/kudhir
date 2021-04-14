import { IPerson } from "interfaces/people";
import { IPost } from "interfaces/post";
import { IMember } from "interfaces/member";
import { IPagesDispatchType } from "store/actions/pages";

export interface IPagesState {
  people: IPerson[] | null;
  members: IMember[] | null;
  posts: IPost[] | null;
  loading: boolean;
  error: string;
}

type IPagesMethod = (
  state: IPagesState,
  action: IPagesDispatchType
) => IPagesState;

const initialState = {
  people: null,
  members: null,
  posts: null,
  loading: false,
  error: "",
} as IPagesState;

const fetchPageDataInProgress: IPagesMethod = (state, _) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchPageDataFailed: IPagesMethod = (state, _) => {
  return {
    ...state,
    loading: false,
    error: "Something went wrong!",
  };
};

const fetchPeopleSuccess: IPagesMethod = (state, action) => {
  return {
    ...state,
    loading: false,
    people: action.payload?.people!,
  };
};

const fetchMembersSuccess: IPagesMethod = (state, action) => {
  return {
    ...state,
    loading: false,
    members: action.payload?.members!,
  };
};

const fetchPostsSuccess: IPagesMethod = (state, action) => {
  return {
    ...state,
    loading: false,
    posts: action.payload?.posts!,
  };
};

function reducer(
  state = initialState,
  action: IPagesDispatchType
): IPagesState {
  switch (action.type) {
    case "FETCH_PAGE_DATA_INPROGRESS":
      return fetchPageDataInProgress(state, action);
    case "FETCH_PEOPLE_SUCCESS":
      return fetchPeopleSuccess(state, action);
    case "FETCH_MEMBERS_SUCCESS":
      return fetchMembersSuccess(state, action);
    case "FETCH_POSTS_SUCCESS":
      return fetchPostsSuccess(state, action);
    case "FETCH_PAGE_DATA_FAILED":
      return fetchPageDataFailed(state, action);
    default:
      return state;
  }
}

export default reducer;
