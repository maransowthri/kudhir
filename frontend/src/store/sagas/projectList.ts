import { IProjectList } from "interfaces/project";
import { put } from "redux-saga/effects";
import { IProjectListDispatchType } from "store/actions/projectList";
import * as actions from "../actions";

export function* fetchProjectListSaga(_: IProjectListDispatchType) {
  yield put(actions.fetchProjectListInProgress());
  try {
    const res: Response = yield fetch("/api/projects");
    const data: IProjectList[] = yield res.json();
    yield put(actions.fetchProjectListSuccess(data));
  } catch (err) {
    yield put(actions.fetchProjectListFailed());
  }
}
