import React from "react";
import FundsTable from "../FundsTable/FundsTable";

import classes from "./ReceivedFundsTable.module.css";

const ReceivedFundsTable = ({ fundsList, totalAmount }) => {
  let fundsHeader = "";
  let fundsBody = [];

  if (window.screen.width <= 550) {
    fundsHeader = (
      <tr>
        <th>Total Received Fund: ₹ {totalAmount}</th>
      </tr>
    );
    fundsBody = fundsList.map((item, index) => (
      <tr key={index}>
        <td>
          {index + 1 + ". " + item.name}
          <span className={classes.TableDataBlock}>
            Donated: ₹ {item.amount}
          </span>
          <span className={classes.TableDataBlock}>
            Transaction ID: {item.transaction_id}
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
    fundsBody = fundsList.map((item, index) => (
      <tr key={item.transaction_id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>₹ {item.amount}</td>
        <td>{item.transaction_id}</td>
      </tr>
    ));
  }

  return <FundsTable header={fundsHeader} body={fundsBody} />;
};

export default ReceivedFundsTable;
