import { IFundsState } from "store/reducers/funds";
import { IPagesState } from "store/reducers/pages";
import { IProjectState } from "store/reducers/projects";

export interface IRootReducer {
  projects: IProjectState;
  funds: IFundsState;
  pages: IPagesState;
}
