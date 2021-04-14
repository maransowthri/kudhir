import {
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";
import { put } from "redux-saga/effects";
import {
  fetchFundsFailed,
  fetchFundsInProgress,
  fetchDeliveredFundsSuccess,
  IFundsDispatchType,
  fetchReceivedFundsSuccess,
  fetchTargetedFundsSuccess,
} from "store/actions/funds";

export function* fetchDeliveredFundsSaga(action: IFundsDispatchType) {
  yield put(fetchFundsInProgress());
  try {
    const res: Response = yield fetch(
      `/api/funds/${action.payload?.slug}/delivered`
    );
    const deliveredFunds: IDeliveredFunds = yield res.json();
    yield put(fetchDeliveredFundsSuccess(deliveredFunds));
  } catch (err) {
    yield put(fetchFundsFailed());
  }
}

export function* fetchReceivedFundsSaga(action: IFundsDispatchType) {
  yield put(fetchFundsInProgress());
  try {
    const res: Response = yield fetch(
      `/api/funds/${action.payload?.slug}/received`
    );
    const receivedFunds: IReceivedFunds = yield res.json();
    yield put(fetchReceivedFundsSuccess(receivedFunds));
  } catch (err) {
    yield put(fetchFundsFailed());
  }
}

export function* fetchTargetedFundsSaga(action: IFundsDispatchType) {
  yield put(fetchFundsInProgress());
  try {
    const res: Response = yield fetch(
      `/api/funds/${action.payload?.slug}/targeted`
    );
    const targetedFunds: ITargetedFunds = yield res.json();
    yield put(fetchTargetedFundsSuccess(targetedFunds));
  } catch (err) {
    yield put(fetchFundsFailed());
  }
}
