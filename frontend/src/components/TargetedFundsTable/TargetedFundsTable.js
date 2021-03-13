import React from "react";
import FundsTable from "../FundsTable/FundsTable";

import classes from "./TargetedFundsTable.module.css";

const TargetedFundsTable = ({ fundsList, totalAmount }) => {
  let fundsHeader = "";
  let fundsBody = [];

  const deliveredHandler = (deliveredFlag) => {
    const classeNames = deliveredFlag ? classes.Delivered : classes.Undelivered;
    const icon = `fas fa-${deliveredFlag ? "check-circle" : "hourglass-half"}`;
    return (
      <span className={classeNames}>
        <i className={icon}></i>
      </span>
    );
  };

  if (window.screen.width <= 550) {
    fundsHeader = (
      <tr>
        <th>Total Targeted Fund: ₹ {totalAmount}</th>
      </tr>
    );
    fundsBody = fundsList.map((fund, index) => (
      <tr key={fund.id}>
        <td>
          {index + 1 + ". " + fund.description}
          <span className={classes.TableDataBlock}>
            Needed: ₹ {fund.amount}
          </span>
          <span className={classes.TableDataBlock}>
            Delivered: {deliveredHandler(fund.delivered)}
          </span>
        </td>
      </tr>
    ));
  } else {
    fundsHeader = (
      <tr>
        <th>No.</th>
        <th>Description</th>
        <th>Needed</th>
        <th>Delivered</th>
      </tr>
    );
    fundsBody = fundsList.map((fund, index) => (
      <tr key={fund.id}>
        <td>{index + 1}</td>
        <td>{fund.description}</td>
        <td>₹ {fund.amount}</td>
        <td>{deliveredHandler(fund.delivered)}</td>
      </tr>
    ));
  }

  return <FundsTable header={fundsHeader} body={fundsBody} />;
};

export default TargetedFundsTable;
