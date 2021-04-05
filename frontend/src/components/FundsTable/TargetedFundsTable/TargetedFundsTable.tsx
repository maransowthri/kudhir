import { ITargetedFund } from "interfaces/project";
import React from "react";
import TargetedFundsTableBody from "./TargetedFundsBody/TargetedFundsBody";
import TargetedFundsTableHead from "./TargetedFundsHead/TargetedFundsHead";

import classes from "./TargetedFundsTable.module.css";

interface IProps {
  fundsList: ITargetedFund[];
  totalAmount: number;
}

const TargetedFundsTable: React.FC<IProps> = ({ fundsList, totalAmount }) => {
  return (
    <table className={classes.TargetedFundsTable}>
      <TargetedFundsTableHead totalAmount={totalAmount} />
      <TargetedFundsTableBody fundsList={fundsList} />
    </table>
  );
};

export default TargetedFundsTable;
