import React from "react";
import FundsTable from "../FundsTable";
import { fundFormatter } from "utils/fund";
import { IDeliveredFunds } from "interfaces/project";

interface IProps {
  fundsList: IDeliveredFunds[];
  totalAmount: number;
}

const DeliveredFundsTable: React.FC<IProps> = ({ fundsList, totalAmount }) => {
  let mobileFundsHeader = (
    <tr>
      <th>Total Delivered Fund: ₹ {fundFormatter(totalAmount)}</th>
    </tr>
  );

  let desktopFundsHeader = (
    <tr>
      <th>No.</th>
      <th>Description</th>
      <th>Order Amount</th>
      <th>Bill</th>
    </tr>
  );

  let mobileFundsBody = fundsList.map((fund, index) => (
    <tr key={fund.id}>
      <td>
        {index + 1 + ". " + fund.description}
        <p>Order Amount: ₹ {fundFormatter(fund.amount)}</p>
        <p>
          <a href={fund.bill} rel="noreferrer" target="_blank" download>
            <i className="fas fa-file-invoice fa-2x"></i>
          </a>
        </p>
      </td>
    </tr>
  ));

  let desktopFundsBody = fundsList.map((fund, index) => (
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
  return (
    <FundsTable
      mobileTableHeader={mobileFundsHeader}
      desktopTableHeader={desktopFundsHeader}
      mobileTableBody={mobileFundsBody}
      desktopTableBody={desktopFundsBody}
    />
  );
};

export default DeliveredFundsTable;
