import React, { useState, useEffect } from "react";
import { IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import ReceivedFundsTable from "components/FundsTable/ReceivedFundsTable/ReceivedFundsTable";
import { RouteComponentProps } from "react-router";
import { IReceivedFunds } from "interfaces/funds";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ReceivedFundsPage: React.FC<IProps> = (props) => {
  const slug = props.match.params.slug;
  const [fundsList, setFundsList] = useState<IReceivedFunds | null>(null);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    fetch(`/api/funds/${slug}/received`)
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
        <ReceivedFundsTable fundsList={fundsList} />
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default ReceivedFundsPage;
