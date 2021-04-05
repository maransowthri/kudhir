import React from "react";
import FundsTable from "../FundsTable";
import classes from "./ReceivedFundsTable.module.css";
import { fundFormatter } from "utils/fund";
import { IReceivedFunds } from "interfaces/project";

interface IProps {
  fundsList: IReceivedFunds[];
  totalAmount: number;
}

const ReceivedFundsTable: React.FC<IProps> = ({ fundsList, totalAmount }) => {
  let mobileFundsHeader = (
    <tr>
      <th>Total Received Fund: ₹ {fundFormatter(totalAmount)}</th>
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

  let mobileFundsBody = fundsList.map((fund, index) => (
    <tr key={fund.id}>
      <td>
        {index + 1 + ". " + fund.name}
        <span className={classes.TableDataBlock}>
          Donated: ₹ {fundFormatter(fund.amount)}
        </span>
        <span className={classes.TableDataBlock}>
          Transaction ID: {fund.transaction_id}
        </span>
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
    <FundsTable
      mobileTableHeader={mobileFundsHeader}
      desktopTableHeader={desktopFundsHeader}
      mobileTableBody={mobileFundsBody}
      desktopTableBody={dekstopFundsBody}
    />
  );
};

export default ReceivedFundsTable;
