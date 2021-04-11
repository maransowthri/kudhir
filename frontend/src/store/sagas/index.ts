import { takeEvery } from "redux-saga/effects";
import { FundsActionType, ProjectListActionType } from "../actions";
import { ProjectDetailActionType } from "../actions";
import { fetchProjectListSaga } from "./projectList";
import { fetchProjectDetailSaga } from "./projectDetail";
import { fetchFundsSaga } from "./funds";

export function* watchProjectList() {
  const actionType: ProjectListActionType = "FETCH_PROJECT_LIST_INIT";
  yield takeEvery(actionType, fetchProjectListSaga);
}

export function* watchProjectDetail() {
  const actionType: ProjectDetailActionType = "FETCH_PROJECT_DETAIL_INIT";
  yield takeEvery(actionType, fetchProjectDetailSaga);
}

export function* watchFunds() {
  const actionType: FundsActionType = "FETCH_FUNDS_INIT";
  yield takeEvery(actionType, fetchFundsSaga);
}
