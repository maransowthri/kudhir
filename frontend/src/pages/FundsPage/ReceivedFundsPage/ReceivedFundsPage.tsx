import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import ReceivedFundsTable from "components/FundsTable/ReceivedFundsTable/ReceivedFundsTable";
import { RouteComponentProps } from "react-router";
import { IRootReducer } from "interfaces/store";
import { IFundsState } from "store/reducers/funds";
import { fetchReceivedFunds } from "store/actions/funds";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";
import classes from "./ReceivedFundsPage.module.css";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ReceivedFundsPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const dispatch = useDispatch();
  const { receivedFunds, loading, error } = useSelector<
    IRootReducer,
    IFundsState
  >((state) => ({ ...state.funds }));
  const slug = match.params.slug;

  useEffect(() => {
    dispatch(fetchReceivedFunds(slug));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (receivedFunds) {
    result = <ReceivedFundsTable fundsList={receivedFunds} />;
  } else {
    result = (
      <>
        <Alert type="error" message={error} />
        <p className={classes.NoDataText}>No details found.</p>
      </>
    );
  }

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <h3 className={classes.PageTitle}>Received Funds Details</h3>
      {result}
    </div>
  );
};

export default ReceivedFundsPage;
