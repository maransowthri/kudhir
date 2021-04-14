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
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ReceivedFundsPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const dispatch = useDispatch();
  const { funds, loading, error } = useSelector<IRootReducer, IFundsState>(
    (state) => ({ ...state.funds })
  );
  const slug = match.params.slug;

  useEffect(() => {
    console.log("ComponentDidMount");
    dispatch(fetchFunds(slug, "RECEIVED"));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (funds) {
    result = <ReceivedFundsTable fundsList={funds as IReceivedFunds} />;
  } else {
    result = <Alert type="error" message={error} />;
  }

  return (
    <div>
      <ProjectCrumb slug={slug} />
      {result}
    </div>
  );
};

export default ReceivedFundsPage;
