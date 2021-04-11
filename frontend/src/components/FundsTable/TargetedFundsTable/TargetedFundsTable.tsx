import { ITargetedFunds } from "interfaces/funds";
import React from "react";
import TargetedFundsTableBody from "./TargetedFundsBody/TargetedFundsBody";
import TargetedFundsTableHead from "./TargetedFundsHead/TargetedFundsHead";

import classes from "./TargetedFundsTable.module.css";

interface IProps {
  fundsList: ITargetedFunds;
}

const TargetedFundsTable: React.FC<IProps> = ({ fundsList }) => {
  return (
    <table className={classes.TargetedFundsTable}>
      <TargetedFundsTableHead totalAmount={fundsList.total_amount} />
      <TargetedFundsTableBody fundsList={fundsList.funds} />
    </table>
  );
};

export default TargetedFundsTable;
