import React from "react";
import ProjectCrumb from "../../components/ProjectCrumb/ProjectCrumb";

const TargetedFundsPage = (props) => {
  const slug = props.match.params.slug;

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <h2>Targeted Amount</h2>
    </div>
  );
};

export default TargetedFundsPage;
