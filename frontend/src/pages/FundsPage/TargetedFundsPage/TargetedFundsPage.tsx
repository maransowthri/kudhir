import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import TargetedFundsTable from "components/FundsTable/TargetedFundsTable/TargetedFundsTable";
import { IProjectRouterParams } from "interfaces/project";
import { ITargetedFunds } from "interfaces/funds";
import { IRootReducer } from "interfaces/store";
import { IFundsState } from "store/reducers/funds";
import { fetchFunds } from "store/actions/funds";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const TargetedFundsPage: React.FC<IProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { funds, loading, error } = useSelector<IRootReducer, IFundsState>(
    (state) => ({ ...state.funds })
  );
  const slug = match.params.slug;

  useEffect(() => {
    dispatch(fetchFunds(slug, "TARGETED"));
  }, [dispatch, slug]);

  return (
    <div>
      <ProjectCrumb slug={slug} />
      {loading ? (
        <p>Loading...</p>
      ) : funds ? (
        <TargetedFundsTable fundsList={funds as ITargetedFunds} />
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default TargetedFundsPage;
