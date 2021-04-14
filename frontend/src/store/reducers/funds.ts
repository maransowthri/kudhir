import {
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";

import { IFundsDispatchType } from "../actions/funds";

export interface IFundsState {
  deliveredFunds: IDeliveredFunds | null;
  receivedFunds: IReceivedFunds | null;
  targetedFunds: ITargetedFunds | null;
  loading: boolean;
  error: string;
}

type IFundsMethod = (
  state: IFundsState,
  action: IFundsDispatchType
) => IFundsState;

const initialState: IFundsState = {
  deliveredFunds: null,
  receivedFunds: null,
  targetedFunds: null,
  loading: false,
  error: "",
};

const fetchFundsInProgress: IFundsMethod = (state, _): IFundsState => {
  return {
    ...state,
    loading: true,
  };
};

const fetchFundsFailed: IFundsMethod = (state, _): IFundsState => {
  return {
    ...state,
    loading: false,
    error: "Something went wrong!",
  };
};

const fetchDeliveredFundsSuccess: IFundsMethod = (
  state,
  action
): IFundsState => {
  return {
    ...state,
    loading: false,
    deliveredFunds: action.payload?.deliveredFunds!,
  };
};

const fetchReceivedFundsSuccess: IFundsMethod = (
  state,
  action
): IFundsState => {
  return {
    ...state,
    loading: false,
    receivedFunds: action.payload?.receivedFunds!,
  };
};

const fetchTargetedFundsSuccess: IFundsMethod = (
  state,
  action
): IFundsState => {
  return {
    ...state,
    loading: false,
    targetedFunds: action.payload?.targetedFunds!,
  };
};

function reducer(
  state = initialState,
  action: IFundsDispatchType
): IFundsState {
  switch (action.type) {
    case "FETCH_FUNDS_INPROGRESS":
      return fetchFundsInProgress(state, action);
    case "FETCH_DELIVERED_FUNDS_SUCCESS":
      return fetchDeliveredFundsSuccess(state, action);
    case "FETCH_RECEIVED_FUNDS_SUCCESS":
      return fetchReceivedFundsSuccess(state, action);
    case "FETCH_TARGETED_FUNDS_SUCCESS":
      return fetchTargetedFundsSuccess(state, action);
    case "FETCH_FUNDS_FAILED":
      return fetchFundsFailed(state, action);
    default:
      return state;
  }
}

export default reducer;
