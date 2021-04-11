import React from "react";
import { fundFormatter } from "utils/fund";
import FundsTableHead from "components/FundsTable/FundsTableHead/FundsTableHead";

interface IProps {
  totalAmount: number;
}

const ReceivedFundsHead: React.FC<IProps> = ({ totalAmount }) => {
  let mobileFundsHeader = (
    <tr>
      <th>Total Received Fund: ₹ {fundFormatter(+totalAmount)}</th>
    </tr>
  );

  let desktopFundsHeader = (
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Donated Amount</th>
      <th>Transaction ID</th>
    </tr>
  );

  return (
    <FundsTableHead
      mobileTableHeader={mobileFundsHeader}
      desktopTableHeader={desktopFundsHeader}
    />
  );
};

export default ReceivedFundsHead;
