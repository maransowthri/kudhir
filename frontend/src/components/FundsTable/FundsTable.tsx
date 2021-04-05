import React from "react";
import classes from "./FundsTable.module.css";

interface IProps {
  mobileTableHeader: JSX.Element;
  desktopTableHeader: JSX.Element;
  mobileTableBody: JSX.Element[];
  desktopTableBody: JSX.Element[];
}

const FundsTable: React.FC<IProps> = ({
  mobileTableHeader,
  desktopTableHeader,
  mobileTableBody,
  desktopTableBody,
}) => {
  return (
    <div>
      <table className={classes.FundsTable}>
        <thead className={classes.FundsTableHead + " " + classes.MobileView}>
          {mobileTableHeader}
        </thead>
        <thead className={classes.FundsTableHead + " " + classes.DesktopView}>
          {desktopTableHeader}
        </thead>
        <tbody className={classes.FundsTableBody + " " + classes.MobileView}>
          {mobileTableBody}
        </tbody>
        <tbody className={classes.FundsTableBody + " " + classes.DesktopView}>
          {desktopTableBody}
        </tbody>
      </table>
    </div>
  );
};

export default FundsTable;
