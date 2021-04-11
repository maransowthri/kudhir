export interface ITargetedFunds {
  totalAmount: number;
  funds: ITargetedFund[];
}

export interface IReceivedFunds {
  totalAmount: number;
  funds: IReceivedFund[];
}

export interface IDeliveredFunds {
  totalAmount: number;
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
