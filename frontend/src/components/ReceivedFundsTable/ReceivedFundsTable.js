import React from "react";

import FundsTable from "../FundsTable/FundsTable";
import classes from "./ReceivedFundsTable.module.css";
import { fundFormatter } from "../../utils/fund";

const ReceivedFundsTable = ({ fundsList, totalAmount }) => {
  let fundsHeader = "";
  let fundsBody = [];

  if (window.screen.width <= 550) {
    fundsHeader = (
      <tr>
        <th>Total Received Fund: ₹ {fundFormatter(totalAmount)}</th>
      </tr>
    );
    fundsBody = fundsList.map((fund, index) => (
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
  } else {
    fundsHeader = (
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Donated Amount</th>
        <th>Transaction ID</th>
      </tr>
    );
    fundsBody = fundsList.map((fund, index) => (
      <tr key={fund.id}>
        <td>{index + 1}</td>
        <td>{fund.name}</td>
        <td>₹ {fundFormatter(fund.amount)}</td>
        <td>{fund.transaction_id}</td>
      </tr>
    ));
  }

  return <FundsTable header={fundsHeader} body={fundsBody} />;
};

export default ReceivedFundsTable;
