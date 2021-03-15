import React from "react";

import FundsTable from "../FundsTable/FundsTable";
import classes from "./DeliveredFundsTable.module.css";
import { fundFormatter } from "../../utils/fund";

const DeliveredFundsTable = ({ fundsList, totalAmount }) => {
  let fundsHeader = "";
  let fundsBody = [];

  if (window.screen.width <= 550) {
    fundsHeader = (
      <tr>
        <th>Total Delivered Fund: ₹ {fundFormatter(totalAmount)}</th>
      </tr>
    );
    fundsBody = fundsList.map((fund, index) => (
      <tr key={fund.id}>
        <td>
          {index + 1 + ". " + fund.description}
          <span className={classes.TableDataBlock}>
            Order Amount: ₹ {fundFormatter(fund.amount)}
          </span>
          <span className={classes.TableDataBlock}>
            <a href={fund.bill} rel="noreferrer" target="_blank" download>
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
    fundsBody = fundsList.map((fund, index) => (
      <tr key={fund.id}>
        <td>{index + 1}</td>
        <td>{fund.description}</td>
        <td>₹ {fundFormatter(fund.amount)}</td>
        <td>
          <a href={fund.bill} rel="noreferrer" target="_blank" download>
            <i className="fas fa-file-invoice fa-2x"></i>
          </a>
        </td>
      </tr>
    ));
  }

  return <FundsTable header={fundsHeader} body={fundsBody} />;
};

export default DeliveredFundsTable;
