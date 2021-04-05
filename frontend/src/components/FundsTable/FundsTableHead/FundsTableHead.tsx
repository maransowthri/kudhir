import React from "react";
import classes from "./FundsTableHead.module.css";

interface IProps {
  mobileTableHeader: JSX.Element;
  desktopTableHeader: JSX.Element;
}

const FundsTableHead: React.FC<IProps> = ({
  mobileTableHeader,
  desktopTableHeader,
}) => {
  return (
    <>
      <thead className={classes.FundsTableHead + " " + classes.MobileView}>
        {mobileTableHeader}
      </thead>
      <thead className={classes.FundsTableHead + " " + classes.DesktopView}>
        {desktopTableHeader}
      </thead>
    </>
  );
};

export default FundsTableHead;
