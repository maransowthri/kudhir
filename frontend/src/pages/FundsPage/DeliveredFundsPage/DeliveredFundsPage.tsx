import React, { useState, useEffect } from "react";
import DeliveredFundsTable from "components/FundsTable/DeliveredFundsTable/DeliveredFundsTable";
import { IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import { RouteComponentProps } from "react-router";
import { IDeliveredFunds } from "interfaces/funds";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const DeliveredFundsPage: React.FC<IProps> = (props) => {
  const slug = props.match.params.slug;
  const [fundsList, setFundsList] = useState<IDeliveredFunds | null>(null);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    fetch(`/api/funds/${slug}/delivered`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFundsList(data);
        setLoadingState(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingState(false);
      });
  }, [slug]);

  return (
    <div>
      <ProjectCrumb slug={slug} />
      {loadingState ? (
        <p>Loading</p>
      ) : fundsList ? (
        <DeliveredFundsTable fundsList={fundsList} />
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default DeliveredFundsPage;
