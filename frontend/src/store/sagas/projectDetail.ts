import { IProjectDetail } from "interfaces/project";
import { put } from "redux-saga/effects";
import { IProjectDetailDispatchType } from "store/actions/projectDetail";
import * as actions from "../actions";

export function* fetchProjectDetailSaga(action: IProjectDetailDispatchType) {
  yield put(actions.fetchProjectDetailInProgress());
  try {
    const res: Response = yield fetch(`/api/projects/${action.payload?.slug}`);
    const data: IProjectDetail[] = yield res.json();
    yield put(actions.fetchProjectDetailSuccess(data[0]));
  } catch (err) {
    yield put(actions.fetchProjectDetailFailed());
  }
}
