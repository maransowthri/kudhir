import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./Funds.module.css";
import Button from "components/UI/Button/Button";
import { fundFormatter } from "utils/fund";

const Amount = ({ targeted, received, delivered, history, location }) => {
  const path = location.pathname;

  const targetedFundsHandler = () => {
    history.push(`${path}/targeted`);
  };

  const receivedFundsHandler = () => {
    history.push(`${path}/received`);
  };
  const deliveredFundsHandler = () => {
    history.push(`${path}/delivered`);
  };

  return (
    <div className={classes.Funds}>
      <Button type="secondary" action={targetedFundsHandler}>
        Targeted: ₹ {fundFormatter(targeted)}
      </Button>
      <Button type="secondary" action={receivedFundsHandler}>
        Received: ₹ {fundFormatter(received)}
      </Button>
      <Button type="secondary" action={deliveredFundsHandler}>
        Delivered: ₹ {fundFormatter(delivered)}
      </Button>
    </div>
  );
};

export default withRouter(Amount);
