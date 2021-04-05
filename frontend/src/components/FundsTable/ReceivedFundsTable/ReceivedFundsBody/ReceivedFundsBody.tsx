import React from "react";
import { fundFormatter } from "utils/fund";
import { IReceivedFund } from "interfaces/project";
import FundsTableBody from "components/FundsTable/FundsTableBody/FundsTableBody";

interface IProps {
  fundsList: IReceivedFund[];
}

const ReceivedFundsBody: React.FC<IProps> = ({ fundsList }) => {
  let mobileFundsBody = fundsList.map((fund, index) => (
    <tr key={fund.id}>
      <td>
        {index + 1 + ". " + fund.name}
        <p>Donated: ₹ {fundFormatter(fund.amount)}</p>
        <p>Transaction ID: {fund.transaction_id}</p>
      </td>
    </tr>
  ));

  let dekstopFundsBody = fundsList.map((fund, index) => (
    <tr key={fund.id}>
      <td>{index + 1}</td>
      <td>{fund.name}</td>
      <td>₹ {fundFormatter(fund.amount)}</td>
      <td>{fund.transaction_id}</td>
    </tr>
  ));

  return (
    <FundsTableBody
      mobileTableBody={mobileFundsBody}
      desktopTableBody={dekstopFundsBody}
    />
  );
};

export default ReceivedFundsBody;
