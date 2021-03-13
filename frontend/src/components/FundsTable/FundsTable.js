import React from "react";

import classes from "./FundsTable.module.css";

const FundsTable = ({ header, body }) => {
  return (
    <div>
      <table className={classes.FundsTable}>
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};

export default FundsTable;
