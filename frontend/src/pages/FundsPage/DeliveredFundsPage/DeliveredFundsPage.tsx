import React from "react";
import DeliveredFundsTable from "components/FundsTable/DeliveredFundsTable/DeliveredFundsTable";
import { IProject, IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "dummy/projects";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const DeliveredFundsPage: React.FC<IProps> = (props) => {
  const slug = props.match.params.slug;
  const project: IProject = SAMPLE_PROJECTS.find(
    (project) => project.slug === slug
  )!;
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
