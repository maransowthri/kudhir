import React from "react";

import FundsTable from "../FundsTable/FundsTable";
import classes from "./DeliveredFundsTable.module.css";

const DeliveredFundsTable = ({ fundsList, totalAmount }) => {
  let fundsHeader = "";
  let fundsBody = [];

  if (window.screen.width <= 550) {
    fundsHeader = (
      <tr>
        <th>Total Delivered Fund: ₹ {totalAmount}</th>
      </tr>
    );
    fundsBody = fundsList.map((item, index) => (
      <tr key={index}>
        <td>
          {index + 1 + ". " + item.description}
          <span className={classes.TableDataBlock}>
            Order Amount: ₹ {item.amount}
          </span>
          <span className={classes.TableDataBlock}>
            <a href={item.bill} rel="noreferrer" target="_blank" download>
              <i className="fas fa-file-invoice fa-2x"></i>
            </a>
          </span>
        </td>
      </tr>
    ));
  } else {
    fundsHeader = (
      <tr>
        <th>No.</th>
        <th>Description</th>
        <th>Order Amount</th>
        <th>Bill</th>
      </tr>
    );
    fundsBody = fundsList.map((item, index) => (
      <tr key={item.index}>
        <td>{index + 1}</td>
        <td>{item.description}</td>
        <td>₹ {item.amount}</td>
        <td>
          <a href={item.bill} rel="noreferrer" target="_blank" download>
            <i className="fas fa-file-invoice fa-2x"></i>
          </a>
        </td>
      </tr>
    ));
  }

  return <FundsTable header={fundsHeader} body={fundsBody} />;
};

export default DeliveredFundsTable;
