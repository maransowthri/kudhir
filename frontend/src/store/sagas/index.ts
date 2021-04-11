import { takeEvery } from "redux-saga/effects";
import { ProjectListActionType } from "../actions";
import { fetchProjectListSaga } from "./projectList";

export function* watchProjectList() {
  const actionType: ProjectListActionType = "FETCH_PROJECT_LIST_INIT";
  yield takeEvery(actionType, fetchProjectListSaga);
}
