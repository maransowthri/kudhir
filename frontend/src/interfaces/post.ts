export interface IPost {
  id: number;
  title: string;
  message: string;
  socials: IPostSocial[];
  posted_on: string;
}

export interface IPostSocial {
  link: string;
}
