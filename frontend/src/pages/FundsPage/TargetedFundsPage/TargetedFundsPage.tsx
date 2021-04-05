import React from "react";
import { RouteComponentProps } from "react-router";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "dummy/projects";
import TargetedFundsTable from "components/FundsTable/TargetedFundsTable/TargetedFundsTable";
import { IProject, IProjectRouterParams } from "interfaces/project";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const TargetedFundsPage: React.FC<IProps> = (props) => {
  const slug = props.match.params.slug;
  const project: IProject = SAMPLE_PROJECTS.find(
    (project) => project.slug === slug
  )!;
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
