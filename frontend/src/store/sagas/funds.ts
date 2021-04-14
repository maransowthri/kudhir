import {
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";
import { put } from "redux-saga/effects";
import {
  fetchFundsFailed,
  fetchFundsInProgress,
  fetchFundsSuccess,
  IFundsDispatchType,
} from "store/actions/funds";

export function* fetchFundsSaga(action: IFundsDispatchType) {
  console.log(action);
  yield put(fetchFundsInProgress());
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
    yield put(fetchFundsSuccess(data));
  } catch (err) {
    yield put(fetchFundsFailed());
  }
}
