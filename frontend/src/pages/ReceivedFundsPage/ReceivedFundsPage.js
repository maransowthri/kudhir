import React from "react";
import FundsTable from "../../components/FundsTable/FundsTable";

import ProjectCrumb from "../../components/ProjectCrumb/ProjectCrumb";
import { SAMPLE_PROJECTS } from "../../components/Projects/Projects";

const ReceivedFundsPage = (props) => {
  const slug = props.match.params.slug;
  const project = SAMPLE_PROJECTS.find((project) => project.slug === slug);
  const receivedFunds = project.received_amount_details.map((item, index) => (
    <tr key={item.transaction_id}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>₹ {item.donated_amount}</td>
      <td>{item.transaction_id}</td>
    </tr>
  ));

  return (
    <div>
      <ProjectCrumb slug={slug} />
      <FundsTable>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Donated Amount</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>{receivedFunds}</tbody>
      </FundsTable>
    </div>
  );
};

export default ReceivedFundsPage;
