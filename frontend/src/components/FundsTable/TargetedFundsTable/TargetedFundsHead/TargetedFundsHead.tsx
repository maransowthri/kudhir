import React from "react";
import { fundFormatter } from "utils/fund";
import FundsTableHead from "components/FundsTable/FundsTableHead/FundsTableHead";

interface IProps {
  totalAmount: number;
}

const TargetedFundsHead: React.FC<IProps> = ({ totalAmount }) => {
  let mobileHeader = (
    <tr>
      <th>Total Targeted Fund: ₹ {fundFormatter(+totalAmount)}</th>
    </tr>
  );

  let desktopHeader = (
    <tr>
      <th>No.</th>
      <th>Description</th>
      <th>Needed</th>
      <th>Delivered</th>
    </tr>
  );

  return (
    <FundsTableHead
      mobileTableHeader={mobileHeader}
      desktopTableHeader={desktopHeader}
    />
  );
};

export default TargetedFundsHead;
