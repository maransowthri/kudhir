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
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const TargetedFundsPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const dispatch = useDispatch();
  const { funds, loading, error } = useSelector<IRootReducer, IFundsState>(
    (state) => ({ ...state.funds })
  );
  const slug = match.params.slug;

  useEffect(() => {
    dispatch(fetchFunds(slug, "TARGETED"));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (funds) {
    result = <TargetedFundsTable fundsList={funds as ITargetedFunds} />;
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

export default TargetedFundsPage;
