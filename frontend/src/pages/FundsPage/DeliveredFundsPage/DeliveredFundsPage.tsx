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

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const DeliveredFundsPage: React.FC<IProps> = ({ match }) => {
  const dispatch = useDispatch();
  const slug = match.params.slug;
  const { funds, loading, error } = useSelector<IRootReducer, IFundsState>(
    (state) => ({ ...state.funds })
  );

  useEffect(() => {
    dispatch(fetchFunds(slug, "DELIVERED"));
  }, [dispatch, slug]);

  return (
    <div>
      <ProjectCrumb slug={slug} />
      {loading ? (
        <p>Loading</p>
      ) : funds ? (
        <DeliveredFundsTable fundsList={funds as IDeliveredFunds} />
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default DeliveredFundsPage;
