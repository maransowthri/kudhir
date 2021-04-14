import { takeEvery, all } from "redux-saga/effects";
import { fetchProjectListSaga, fetchProjectDetailSaga } from "./projects";
import { fetchMembersSaga, fetchPeopleSaga, fetchPostsSaga } from "./pages";
import {
  fetchDeliveredFundsSaga,
  fetchReceivedFundsSaga,
  fetchTargetedFundsSaga,
} from "./funds";
import {
  FundsActionType,
  PagesActionType,
  ProjectActionType,
} from "store/actions/actionTypes";

export function* watchProjects() {
  const projectListActionType: ProjectActionType = "FETCH_PROJECT_LIST_INIT";
  const projectDetailActionType: ProjectActionType =
    "FETCH_PROJECT_DETAIL_INIT";
  yield all([
    takeEvery(projectListActionType, fetchProjectListSaga),
    takeEvery(projectDetailActionType, fetchProjectDetailSaga),
  ]);
}

export function* watchFunds() {
  const deliveredFundsActionType: FundsActionType =
    "FETCH_DELIVERED_FUNDS_INIT";
  const receivedFundsActionType: FundsActionType = "FETCH_RECEIVED_FUNDS_INIT";
  const targetedFundsActionType: FundsActionType = "FETCH_TARGETED_FUNDS_INIT";
  yield all([
    takeEvery(deliveredFundsActionType, fetchDeliveredFundsSaga),
    takeEvery(receivedFundsActionType, fetchReceivedFundsSaga),
    takeEvery(targetedFundsActionType, fetchTargetedFundsSaga),
  ]);
}

export function* watchPages() {
  const peopleActionType: PagesActionType = "FETCH_PEOPLE_INIT";
  const membersActionType: PagesActionType = "FETCH_MEMBERS_INIT";
  const postsActionType: PagesActionType = "FETCH_POSTS_INIT";
  yield all([
    takeEvery(peopleActionType, fetchPeopleSaga),
    takeEvery(membersActionType, fetchMembersSaga),
    takeEvery(postsActionType, fetchPostsSaga),
  ]);
}
