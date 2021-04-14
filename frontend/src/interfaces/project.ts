export interface IProjectMember {
  user: {
    id: number;
    name: string;
    bio: string;
    portfolio: string;
  };
}

export interface IProjectList {
  id: number;
  title: string;
  slug: string;
  city: string;
  state: string;
  zipcode: string;
  created_on: string;
  images: IProjectImage[];
  socials: IProjectSocial[];
  received_amount: number;
}

export interface IProjectDetail {
  id: number;
  title: string;
  slug: string;
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
  created_on: string;
  images: IProjectImage[];
  socials: IProjectSocial[];
  targeted_amount: number;
  received_amount: number;
  delivered_amount: number;
  members: IProjectMember[];
}

export interface IProjectImage {
  image: string;
}

export interface IProjectSocial {
  link: string;
}

export interface IProjectRouterParams {
  slug: string;
}
