import { IPerson } from "interfaces/people";
import { IPost } from "interfaces/post";
import { IMember } from "interfaces/member";
import { PagesActionType } from "./actionTypes";

export interface IPagesDispatchType {
  type: PagesActionType;
  payload?: { people?: IPerson[]; members?: IMember[]; posts?: IPost[] };
}

export const fetchPageDataInProgress = (): IPagesDispatchType => {
  return {
    type: "FETCH_PAGE_DATA_INPROGRESS",
  };
};

export const fetchPageDataFailed = (): IPagesDispatchType => {
  return {
    type: "FETCH_PAGE_DATA_FAILED",
  };
};

export const fetchPeople = (): IPagesDispatchType => {
  return {
    type: "FETCH_PEOPLE_INIT",
  };
};

export const fetchPeopleSuccess = (people: IPerson[]): IPagesDispatchType => {
  return {
    type: "FETCH_PEOPLE_SUCCESS",
    payload: { people },
  };
};

export const fetchMembers = (): IPagesDispatchType => {
  return {
    type: "FETCH_MEMBERS_INIT",
  };
};

export const fetchMembersSuccess = (members: IMember[]): IPagesDispatchType => {
  return {
    type: "FETCH_MEMBERS_SUCCESS",
    payload: { members },
  };
};

export const fetchPosts = (): IPagesDispatchType => {
  return {
    type: "FETCH_POSTS_INIT",
  };
};

export const fetchPostsSuccess = (posts: IPost[]): IPagesDispatchType => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: { posts },
  };
};
