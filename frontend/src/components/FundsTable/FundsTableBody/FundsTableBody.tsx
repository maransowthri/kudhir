import React from "react";
import classes from "./FundsTableBody.module.css";

interface IProps {
  mobileTableBody: JSX.Element[];
  desktopTableBody: JSX.Element[];
}

const FundsTableBody: React.FC<IProps> = ({
  mobileTableBody,
  desktopTableBody,
}) => {
  return (
    <>
      <tbody className={classes.FundsTableBody + " " + classes.MobileView}>
        {mobileTableBody}
      </tbody>
      <tbody className={classes.FundsTableBody + " " + classes.DesktopView}>
        {desktopTableBody}
      </tbody>
    </>
  );
};

export default FundsTableBody;
