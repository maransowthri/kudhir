import React from "react";
import classes from "./TargetedFundsBody.module.css";
import { fundFormatter } from "utils/fund";
import { ITargetedFund } from "interfaces/project";
import FundsTableBody from "components/FundsTable/FundsTableBody/FundsTableBody";

interface IProps {
  fundsList: ITargetedFund[];
}

const TargetedFundsBody: React.FC<IProps> = ({ fundsList }) => {
  const deliveredHandler = (deliveredFlag: boolean) => {
    const classeNames = deliveredFlag ? classes.Delivered : classes.Undelivered;
    const icon = `fas fa-${deliveredFlag ? "check-circle" : "hourglass-half"}`;
    return (
      <span className={classeNames}>
        <i className={icon}></i>
      </span>
    );
  };

  let mobileFundsBody = fundsList.map((fund, index) => (
    <tr key={fund.id}>
      <td>
        {index + 1 + ". " + fund.description}
        <p>Needed: ₹ {fundFormatter(fund.amount)}</p>
        <p>Delivered: {deliveredHandler(fund.delivered)}</p>
      </td>
    </tr>
  ));

  let desktopFundsBody = fundsList.map((fund, index) => (
    <tr key={fund.id}>
      <td>{index + 1}</td>
      <td>{fund.description}</td>
      <td>₹ {fundFormatter(fund.amount)}</td>
      <td>{deliveredHandler(fund.delivered)}</td>
    </tr>
  ));

  return (
    <FundsTableBody
      mobileTableBody={mobileFundsBody}
      desktopTableBody={desktopFundsBody}
    />
  );
};

export default TargetedFundsBody;
