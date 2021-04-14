import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveredFundsTable from "components/FundsTable/DeliveredFundsTable/DeliveredFundsTable";
import { IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import { RouteComponentProps } from "react-router";
import { IRootReducer } from "interfaces/store";
import { IFundsState } from "store/reducers/funds";
import { fetchDeliveredFunds } from "store/actions/funds";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";
import classes from "./DeliveredFundsPage.module.css";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const DeliveredFundsPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const dispatch = useDispatch();
  const slug = match.params.slug;
  const { deliveredFunds, loading, error } = useSelector<
    IRootReducer,
    IFundsState
  >((state) => ({ ...state.funds }));

  useEffect(() => {
    dispatch(fetchDeliveredFunds(slug));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (deliveredFunds) {
    result = <DeliveredFundsTable fundsList={deliveredFunds} />;
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
      <h3 className={classes.PageTitle}>Delivered Funds Details</h3>
      {result}
    </div>
  );
};

export default DeliveredFundsPage;
