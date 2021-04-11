import { IFundsState } from "store/reducers/funds";
import { IProjectDetailState } from "store/reducers/projectDetail";
import { IProjectListState } from "store/reducers/projectList";

export interface IRootReducer {
  projectList: IProjectListState;
  projectDetail: IProjectDetailState;
  funds: IFundsState;
}
