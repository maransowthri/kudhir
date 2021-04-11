import React from "react";
import { IReceivedFunds } from "interfaces/funds";
import ReceivedFundsTableHead from "./ReceivedFundsHead/ReceivedFundsHead";
import ReceivedFundsTableBody from "./ReceivedFundsBody/ReceivedFundsBody";
import classes from "./ReceivedFundsTable.module.css";

interface IProps {
  fundsList: IReceivedFunds;
}

const ReceivedFundsTable: React.FC<IProps> = ({ fundsList }) => {
  return (
    <table className={classes.ReceivedFundsTable}>
      <ReceivedFundsTableHead totalAmount={fundsList.total_amount} />
      <ReceivedFundsTableBody fundsList={fundsList.funds} />
    </table>
  );
};

export default ReceivedFundsTable;
