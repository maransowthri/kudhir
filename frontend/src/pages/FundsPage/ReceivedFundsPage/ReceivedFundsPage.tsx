import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import ReceivedFundsTable from "components/FundsTable/ReceivedFundsTable/ReceivedFundsTable";
import { RouteComponentProps } from "react-router";
import { IReceivedFunds } from "interfaces/funds";
import { IRootReducer } from "interfaces/store";
import { IFundsState } from "store/reducers/funds";
import { fetchFunds } from "store/actions/funds";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ReceivedFundsPage: React.FC<IProps> = ({ match }) => {
  const dispatch = useDispatch();
  const slug = match.params.slug;
  const { funds, loading, error } = useSelector<IRootReducer, IFundsState>(
    (state) => ({ ...state.funds })
  );
  console.log(funds);

  useEffect(() => {
    dispatch(fetchFunds(slug, "RECEIVED"));
  }, [dispatch, slug]);

  return (
    <div>
      <ProjectCrumb slug={slug} />
      {loading ? (
        <p>Loading...</p>
      ) : funds ? (
        <ReceivedFundsTable fundsList={funds as IReceivedFunds} />
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default ReceivedFundsPage;
