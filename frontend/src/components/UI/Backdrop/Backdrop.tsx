import React from "react";
import classes from "./Backdrop.module.css";

interface IProps {
  show: boolean;
  toggleState: () => void;
}

const Backdrop: React.FC<IProps> = ({ show, toggleState }) => {
  const backdrop = show ? (
    <div onClick={toggleState} className={classes.Backdrop}></div>
  ) : null;

  return backdrop;
};

export default Backdrop;
