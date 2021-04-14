import { IProjectDetail, IProjectList } from "interfaces/project";
import { put } from "redux-saga/effects";
import {
  IProjectDispatchType,
  fetchProjectFailed,
  fetchProjectInProgress,
  fetchProjectDetailSuccess,
  fetchProjectListSuccess,
} from "store/actions/projects";

export function* fetchProjectListSaga(_: IProjectDispatchType) {
  yield put(fetchProjectInProgress());
  try {
    const res: Response = yield fetch(`/api/projects/`);
    const data: IProjectList[] = yield res.json();
    yield put(fetchProjectListSuccess(data));
  } catch (err) {
    yield put(fetchProjectFailed());
  }
}

export function* fetchProjectDetailSaga(action: IProjectDispatchType) {
  yield put(fetchProjectInProgress());
  try {
    const res: Response = yield fetch(`/api/projects/${action.payload?.slug}`);
    const data: IProjectDetail[] = yield res.json();
    yield put(fetchProjectDetailSuccess(data[0]));
  } catch (err) {
    yield put(fetchProjectFailed());
  }
}
