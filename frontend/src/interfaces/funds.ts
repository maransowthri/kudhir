export type FundsType = "DELIVERED" | "RECEIVED" | "TARGETED";

export interface ITargetedFunds {
  total_amount: number;
  funds: ITargetedFund[];
}

export interface IReceivedFunds {
  total_amount: number;
  funds: IReceivedFund[];
}

export interface IDeliveredFunds {
  total_amount: number;
  funds: IDeliveredFund[];
}

export interface ITargetedFund {
  id: number;
  description: string;
  amount: number;
  delivered: boolean;
}

export interface IReceivedFund {
  id: number;
  user: {
    name: string;
    portfolio: string;
  };
  amount: number;
  transaction_id: string;
}

export interface IDeliveredFund {
  id: number;
  description: string;
  amount: number;
  bill: string;
}
