import React from "react";
import DeliveredFundsTable from "../../components/DeliveredFundsTable/DeliveredFundsTable";

import ProjectCrumb from "../../components/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "../../projects";

const DeliveredFundsPage = (props) => {
  const slug = props.match.params.slug;
  const project = SAMPLE_PROJECTS.find((project) => project.slug === slug);
  const deliveredFunds = project.delivered_funds;
  const deliveredAmount = project.delivered_amount;

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <DeliveredFundsTable
        fundsList={deliveredFunds}
        totalAmount={deliveredAmount}
      />
    </div>
  );
};

export default DeliveredFundsPage;
