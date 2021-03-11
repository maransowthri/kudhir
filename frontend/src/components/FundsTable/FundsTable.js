import React from "react";

import classes from "./FundsTable.module.css";

const FundsTable = (props) => {
  return <table className={classes.FundsTable}>{props.children}</table>;
};

export default FundsTable;
