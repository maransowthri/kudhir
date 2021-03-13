import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./Funds.module.css";
import Button from "../../UI/Button/Button";

const Amount = ({ targeted, received, delivered, history, location }) => {
  const targetedFundsHandler = () => {
    history.push(`${location.pathname}/targeted`);
  };

  const receivedFundsHandler = () => {
    history.push(`${location.pathname}/received`);
  };
  const deliveredFundsHandler = () => {
    history.push(`${location.pathname}/delivered`);
  };

  return (
    <div className={classes.Funds}>
      <Button type="secondary" action={targetedFundsHandler}>
        Targeted: ₹ {targeted}
      </Button>
      <Button type="secondary" action={receivedFundsHandler}>
        Received: ₹ {received}
      </Button>
      <Button type="secondary" action={deliveredFundsHandler}>
        Delivered: ₹ {delivered}
      </Button>
    </div>
  );
};

export default withRouter(Amount);
