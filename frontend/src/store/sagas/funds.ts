import {
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";
import { put } from "redux-saga/effects";
import { IFundsDispatchType } from "store/actions/funds";
import * as actions from "../actions";

export function* fetchFundsSaga(action: IFundsDispatchType) {
  yield put(actions.fetchFundsInProgress());
  try {
    const res: Response = yield fetch(
      `/api/funds/${
        action.payload?.slug
      }/${action.payload?.fundsType?.toLowerCase()}`
    );
    const data:
      | IDeliveredFunds
      | IReceivedFunds
      | ITargetedFunds = yield res.json();
    yield put(actions.fetchFundsSuccess(data));
  } catch (err) {
    yield put(actions.fetchFundsFailed());
  }
}
