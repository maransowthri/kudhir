export interface ITargetedFunds {
  id: number;
  description: string;
  amount: number;
  delivered: boolean;
}

export interface IReceivedFunds {
  id: number;
  name: string;
  amount: number;
  transaction_id: string;
}

export interface IDeliveredFunds {
  id: number;
  description: string;
  amount: number;
  bill: string;
}

export interface IMembers {
  id: number;
  name: string;
  bio: string;
  portfolio: string;
}

export interface IProject {
  id: number;
  slug: string;
  name: string;
  description: string;
  bank_account_name: string;
  bank_account_number: string;
  ifsc_code: string;
  upi_id: string;
  upi_qr: string;
  bitcoin_wallet_address: string;
  city: string;
  state: string;
  zipcode: string;
  images: string[];
  socials: string[];
  created_on: string;
  is_published: boolean;
  targeted_amount: number;
  received_amount: number;
  delivered_amount: number;
  members: IMembers[];
  targeted_funds: ITargetedFunds[];
  received_funds: IReceivedFunds[];
  delivered_funds: IDeliveredFunds[];
}

export interface IProjectRouterParams {
  slug: string;
}
