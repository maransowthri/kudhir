import { IPerson } from "interfaces/people";
import { IPost } from "interfaces/post";
import { IMember } from "interfaces/member";
import { put } from "redux-saga/effects";
import {
  fetchMembersSuccess,
  fetchPageDataFailed,
  fetchPageDataInProgress,
  fetchPeopleSuccess,
  fetchPostsSuccess,
  IPagesDispatchType,
} from "store/actions/pages";

export function* fetchPeopleSaga(_: IPagesDispatchType) {
  yield put(fetchPageDataInProgress());
  try {
    const res: Response = yield fetch("/api/pages/people/");
    const data: IPerson[] = yield res.json();
    yield put(fetchPeopleSuccess(data));
  } catch (err) {
    yield put(fetchPageDataFailed());
  }
}

export function* fetchMembersSaga(_: IPagesDispatchType) {
  yield put(fetchPageDataInProgress());
  try {
    const res: Response = yield fetch("/api/pages/members/");
    const data: IMember[] = yield res.json();
    yield put(fetchMembersSuccess(data));
  } catch (err) {
    yield put(fetchPageDataFailed());
  }
}

export function* fetchPostsSaga(_: IPagesDispatchType) {
  yield put(fetchPageDataInProgress());
  try {
    const res: Response = yield fetch("/api/pages/posts/");
    const data: IPost[] = yield res.json();
    yield put(fetchPostsSuccess(data));
  } catch (err) {
    yield put(fetchPageDataFailed());
  }
}
