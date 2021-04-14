import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import TargetedFundsTable from "components/FundsTable/TargetedFundsTable/TargetedFundsTable";
import { IProjectRouterParams } from "interfaces/project";
import { IRootReducer } from "interfaces/store";
import { IFundsState } from "store/reducers/funds";
import { fetchTargetedFunds } from "store/actions/funds";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";
import classes from "./TargetedFundsPage.module.css";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const TargetedFundsPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const dispatch = useDispatch();
  const { targetedFunds, loading, error } = useSelector<
    IRootReducer,
    IFundsState
  >((state) => ({ ...state.funds }));
  const slug = match.params.slug;

  useEffect(() => {
    dispatch(fetchTargetedFunds(slug));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (targetedFunds) {
    result = <TargetedFundsTable fundsList={targetedFunds} />;
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
      <h3 className={classes.PageTitle}>Targeted Funds Details</h3>
      {result}
    </div>
  );
};

export default TargetedFundsPage;
