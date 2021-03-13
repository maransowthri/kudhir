import React from "react";

import ProjectCrumb from "../../components/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "../../projects";
import ReceivedFundsTable from "../../components/ReceivedFundsTable/ReceivedFundsTable";

const ReceivedFundsPage = (props) => {
  const slug = props.match.params.slug;
  const project = SAMPLE_PROJECTS.find((project) => project.slug === slug);
  const receivedFunds = project.received_funds;
  const totalAmount = project.received_amount;

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <ReceivedFundsTable fundsList={receivedFunds} totalAmount={totalAmount} />
    </div>
  );
};

export default ReceivedFundsPage;
