import React from "react";
import { fundFormatter } from "utils/fund";
import FundsTableHead from "components/FundsTable/FundsTableHead/FundsTableHead";

interface IProps {
  totalAmount: number;
}

const DeliveredFundsTableHead: React.FC<IProps> = ({ totalAmount }) => {
  let mobileFundsHeader = (
    <tr>
      <th>Total Delivered Fund: ₹ {fundFormatter(+totalAmount)}</th>
    </tr>
  );

  let desktopFundsHeader = (
    <tr>
      <th>No.</th>
      <th>Description</th>
      <th>Order Amount</th>
      <th>Bill</th>
    </tr>
  );

  return (
    <FundsTableHead
      mobileTableHeader={mobileFundsHeader}
      desktopTableHeader={desktopFundsHeader}
    />
  );
};

export default DeliveredFundsTableHead;
