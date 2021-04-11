import React from "react";
import classes from "./DeliveredFundsTable.module.css";
import DeliveredFundsHead from "./DeliveredFundsHead/DeliveredFundsHead";
import DeliveredFundsBody from "./DeliveredFundsBody/DeliveredFundsBody";
import { IDeliveredFunds } from "interfaces/funds";

interface IProps {
  fundsList: IDeliveredFunds;
}

const DeliveredFundsTable: React.FC<IProps> = ({ fundsList }) => {
  return (
    <table className={classes.DeliveredFundsTable}>
      <DeliveredFundsHead totalAmount={fundsList.totalAmount} />
      <DeliveredFundsBody fundsList={fundsList.funds} />
    </table>
  );
};

export default DeliveredFundsTable;
