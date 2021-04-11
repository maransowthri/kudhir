import { IProjectList } from "interfaces/project";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { IProjectListAction } from "../reducers/projectList";

export function* fetchProjectListSaga(_: IProjectListAction) {
  yield put(actions.fetchProjectListInProgress());
  try {
    const res: Response = yield fetch("/api/projects");
    const data: IProjectList[] = yield res.json();
    yield put(actions.fetchProjectListSuccess(data));
  } catch (err) {
    yield put(actions.fetchProjectListFailed());
  }
}
