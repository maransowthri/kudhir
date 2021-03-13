import React from "react";
import FundsTable from "../FundsTable/FundsTable";

import classes from "./TargetedFundsTable.module.css";

const TargetedFundsTable = ({ fundsList, totalAmount }) => {
  let fundsHeader = "";
  let fundsBody = [];

  if (window.screen.width <= 550) {
    fundsHeader = (
      <tr>
        <th>Total Targeted Fund: ₹ {totalAmount}</th>
      </tr>
    );
    fundsBody = fundsList.map((item, index) => (
      <tr key={index}>
        <td>
          {index + 1 + ". " + item.description}
          <span className={classes.TableDataBlock}>
            Needed: ₹ {item.amount}
          </span>
          <span className={classes.TableDataBlock}>
            Shop Details: <br />{" "}
            {item.shop_details.split(",").map((item) => (
              <React.Fragment key={item}>
                {item} <br />
              </React.Fragment>
            ))}
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
        <th>Shop Details</th>
      </tr>
    );
    fundsBody = fundsList.map((item, index) => (
      <tr key={item.transaction_id}>
        <td>{index + 1}</td>
        <td>{item.description}</td>
        <td>₹ {item.amount}</td>
        <td>
          {item.shop_details.split(",").map((item) => (
            <React.Fragment key={item}>
              {item} <br />
            </React.Fragment>
          ))}
        </td>
      </tr>
    ));
  }

  return <FundsTable header={fundsHeader} body={fundsBody} />;
};

export default TargetedFundsTable;
