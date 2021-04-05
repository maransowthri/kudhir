import React from "react";
import { IReceivedFund } from "interfaces/project";
import ReceivedFundsTableHead from "./ReceivedFundsHead/ReceivedFundsHead";
import ReceivedFundsTableBody from "./ReceivedFundsBody/ReceivedFundsBody";
import classes from "./ReceivedFundsTable.module.css";

interface IProps {
  fundsList: IReceivedFund[];
  totalAmount: number;
}

const ReceivedFundsTable: React.FC<IProps> = ({ fundsList, totalAmount }) => {
  return (
    <table className={classes.ReceivedFundsTable}>
      <ReceivedFundsTableHead totalAmount={totalAmount} />
      <ReceivedFundsTableBody fundsList={fundsList} />
    </table>
  );
};

export default ReceivedFundsTable;
