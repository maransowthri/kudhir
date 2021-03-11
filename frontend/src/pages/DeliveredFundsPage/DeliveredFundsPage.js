import React from "react";
import ProjectCrumb from "../../components/ProjectCrumb/ProjectCrumb";

const DeliveredFundsPage = (props) => {
  const slug = props.match.params.slug;

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <h2>Delivered Funds Page</h2>
    </div>
  );
};

export default DeliveredFundsPage;
