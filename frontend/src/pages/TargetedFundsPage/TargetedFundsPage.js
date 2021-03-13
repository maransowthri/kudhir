import React from "react";

import ProjectCrumb from "../../components/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "../../projects";
import TargetedFundsTable from "../../components/TargetedFundsTable/TargetedFundsTable";

const TargetedFundsPage = (props) => {
  const slug = props.match.params.slug;
  const project = SAMPLE_PROJECTS.find((project) => project.slug === slug);
  const targetedFunds = project.targeted_funds;
  const targetedAmount = project.targeted_amount;

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <TargetedFundsTable
        fundsList={targetedFunds}
        totalAmount={targetedAmount}
      />
    </div>
  );
};

export default TargetedFundsPage;
