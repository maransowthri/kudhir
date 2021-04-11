import {
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";

import { IFundsDispatchType } from "../actions/funds";

export interface IFundsState {
  funds: IDeliveredFunds | IReceivedFunds | ITargetedFunds | null;
  loading: boolean;
  error: string;
}

type IFundsMethod = (
  state: IFundsState,
  action: IFundsDispatchType
) => IFundsState;

const initialState = {
  funds: null,
  loading: false,
  error: "",
} as IFundsState;

const fetchFundsInProgress: IFundsMethod = (state, _) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchFundsSuccess: IFundsMethod = (state, action) => {
  return {
    ...state,
    loading: false,
    funds: action.payload?.funds!,
  };
};

const fetchFundsFailed: IFundsMethod = (state, _) => {
  return {
    ...state,
    loading: false,
    error: "Something went wrong!",
  };
};

function reducer(
  state = initialState,
  action: IFundsDispatchType
): IFundsState {
  switch (action.type) {
    case "FETCH_FUNDS_INPROGRESS":
      return fetchFundsInProgress(state, action);
    case "FETCH_FUNDS_SUCCESS":
      return fetchFundsSuccess(state, action);
    case "FETCH_FUNDS_FAILED":
      return fetchFundsFailed(state, action);
    default:
      return state;
  }
}

export default reducer;
