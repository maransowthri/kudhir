import {
  IDeliveredFunds,
  IReceivedFunds,
  ITargetedFunds,
} from "interfaces/funds";
import { FundsActionType } from "./actionTypes";

export interface IFundsDispatchType {
  type: FundsActionType;
  payload?: {
    deliveredFunds?: IDeliveredFunds;
    receivedFunds?: IReceivedFunds;
    targetedFunds?: ITargetedFunds;
    slug?: string;
  };
}

export const fetchDeliveredFunds = (slug: string): IFundsDispatchType => {
  return {
    type: "FETCH_DELIVERED_FUNDS_INIT",
    payload: { slug },
  };
};

export const fetchReceivedFunds = (slug: string): IFundsDispatchType => {
  return {
    type: "FETCH_RECEIVED_FUNDS_INIT",
    payload: { slug },
  };
};

export const fetchTargetedFunds = (slug: string): IFundsDispatchType => {
  return {
    type: "FETCH_TARGETED_FUNDS_INIT",
    payload: { slug },
  };
};

export const fetchDeliveredFundsSuccess = (
  deliveredFunds: IDeliveredFunds
): IFundsDispatchType => {
  return {
    type: "FETCH_DELIVERED_FUNDS_SUCCESS",
    payload: { deliveredFunds },
  };
};

export const fetchTargetedFundsSuccess = (
  targetedFunds: ITargetedFunds
): IFundsDispatchType => {
  return {
    type: "FETCH_TARGETED_FUNDS_SUCCESS",
    payload: { targetedFunds },
  };
};

export const fetchReceivedFundsSuccess = (
  receivedFunds: IReceivedFunds
): IFundsDispatchType => {
  return {
    type: "FETCH_RECEIVED_FUNDS_SUCCESS",
    payload: { receivedFunds },
  };
};

export const fetchFundsInProgress = (): IFundsDispatchType => {
  return {
    type: "FETCH_FUNDS_INPROGRESS",
  };
};

export const fetchFundsFailed = (): IFundsDispatchType => {
  return {
    type: "FETCH_FUNDS_FAILED",
  };
};
