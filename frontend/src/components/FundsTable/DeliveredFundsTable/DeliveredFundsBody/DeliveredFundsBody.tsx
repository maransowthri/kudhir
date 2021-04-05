import React from "react";
import { fundFormatter } from "utils/fund";
import { IDeliveredFund } from "interfaces/project";
import FundsTableBody from "components/FundsTable/FundsTableBody/FundsTableBody";

interface IProps {
  fundsList: IDeliveredFund[];
}

const DeliveredFundsBody: React.FC<IProps> = ({ fundsList }) => {
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
    <FundsTableBody
      mobileTableBody={mobileFundsBody}
      desktopTableBody={desktopFundsBody}
    />
  );
};

export default DeliveredFundsBody;
