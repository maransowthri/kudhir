import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveredFundsTable from "components/FundsTable/DeliveredFundsTable/DeliveredFundsTable";
import { IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import { RouteComponentProps } from "react-router";
import { IDeliveredFunds } from "interfaces/funds";
import { IRootReducer } from "interfaces/store";
import { IFundsState } from "store/reducers/funds";
import { fetchFunds } from "store/actions/funds";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const DeliveredFundsPage: React.FC<IProps> = ({ match }) => {
  let result = null;
  const dispatch = useDispatch();
  const slug = match.params.slug;
  const { funds, loading, error } = useSelector<IRootReducer, IFundsState>(
    (state) => ({ ...state.funds })
  );

  useEffect(() => {
    dispatch(fetchFunds(slug, "DELIVERED"));
  }, [dispatch, slug]);

  if (loading) {
    result = <Loader />;
  } else if (funds) {
    result = <DeliveredFundsTable fundsList={funds as IDeliveredFunds} />;
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

export default DeliveredFundsPage;
