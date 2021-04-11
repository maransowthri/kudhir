import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import TargetedFundsTable from "components/FundsTable/TargetedFundsTable/TargetedFundsTable";
import { IProjectRouterParams } from "interfaces/project";
import { ITargetedFunds } from "interfaces/funds";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const TargetedFundsPage: React.FC<IProps> = (props) => {
  const slug = props.match.params.slug;
  const [fundsList, setFundsList] = useState<ITargetedFunds | null>(null);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    fetch(`/api/funds/${slug}/targeted`)
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
        <p>Loading...</p>
      ) : fundsList ? (
        <TargetedFundsTable fundsList={fundsList} />
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default TargetedFundsPage;
