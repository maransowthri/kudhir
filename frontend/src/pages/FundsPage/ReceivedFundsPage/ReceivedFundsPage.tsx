import React from "react";
import { IProject, IProjectRouterParams } from "interfaces/project";
import ProjectCrumb from "components/UI/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "dummy/projects";
import ReceivedFundsTable from "components/FundsTable/ReceivedFundsTable/ReceivedFundsTable";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps<IProjectRouterParams> {}

const ReceivedFundsPage: React.FC<IProps> = (props) => {
  const slug = props.match.params.slug;
  const project: IProject = SAMPLE_PROJECTS.find(
    (project) => project.slug === slug
  )!;
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
