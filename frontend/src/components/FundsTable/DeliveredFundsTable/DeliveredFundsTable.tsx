import React from "react";
import { IDeliveredFund } from "interfaces/project";
import classes from "./DeliveredFundsTable.module.css";
import DeliveredFundsHead from "./DeliveredFundsHead/DeliveredFundsHead";
import DeliveredFundsBody from "./DeliveredFundsBody/DeliveredFundsBody";

interface IProps {
  fundsList: IDeliveredFund[];
  totalAmount: number;
}

const DeliveredFundsTable: React.FC<IProps> = ({ fundsList, totalAmount }) => {
  return (
    <table className={classes.DeliveredFundsTable}>
      <DeliveredFundsHead totalAmount={totalAmount} />
      <DeliveredFundsBody fundsList={fundsList} />
    </table>
  );
};

export default DeliveredFundsTable;
