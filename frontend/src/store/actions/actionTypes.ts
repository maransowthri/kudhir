export type ProjectActionType =
  | "FETCH_PROJECT_INPROGRESS"
  | "FETCH_PROJECT_FAILED"
  | "FETCH_PROJECT_LIST_INIT"
  | "FETCH_PROJECT_LIST_SUCCESS"
  | "FETCH_PROJECT_DETAIL_INIT"
  | "FETCH_PROJECT_DETAIL_SUCCESS";

export type FundsActionType =
  | "FETCH_FUNDS_INPROGRESS"
  | "FETCH_FUNDS_FAILED"
  | "FETCH_DELIVERED_FUNDS_INIT"
  | "FETCH_DELIVERED_FUNDS_SUCCESS"
  | "FETCH_RECEIVED_FUNDS_INIT"
  | "FETCH_RECEIVED_FUNDS_SUCCESS"
  | "FETCH_TARGETED_FUNDS_INIT"
  | "FETCH_TARGETED_FUNDS_SUCCESS";

export type PagesActionType =
  | "FETCH_PAGE_DATA_INPROGRESS"
  | "FETCH_PAGE_DATA_FAILED"
  | "FETCH_MEMBERS_INIT"
  | "FETCH_MEMBERS_SUCCESS"
  | "FETCH_PEOPLE_INIT"
  | "FETCH_PEOPLE_SUCCESS"
  | "FETCH_POSTS_INIT"
  | "FETCH_POSTS_SUCCESS";
