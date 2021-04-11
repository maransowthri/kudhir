import {
  FundsType,
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";
import { FundsActionType } from "./actionTypes";

export interface IFundsDispatchType {
  type: FundsActionType;
  payload?: {
    funds?: IDeliveredFunds | IReceivedFunds | ITargetedFunds;
    slug?: string;
    fundsType?: FundsType;
  };
}

export const fetchFunds = (
  slug: string,
  fundsType: FundsType
): IFundsDispatchType => {
  return {
    type: "FETCH_FUNDS_INIT",
    payload: { slug, fundsType },
  };
};

export const fetchFundsInProgress = (): IFundsDispatchType => {
  return {
    type: "FETCH_FUNDS_INPROGRESS",
  };
};

export const fetchFundsSuccess = (
  funds: IDeliveredFunds | IReceivedFunds | ITargetedFunds
): IFundsDispatchType => {
  return {
    type: "FETCH_FUNDS_SUCCESS",
    payload: { funds },
  };
};

export const fetchFundsFailed = (): IFundsDispatchType => {
  return {
    type: "FETCH_FUNDS_FAILED",
  };
};
