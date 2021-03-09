import React from "react";

import classes from "./Amount.module.css";
import Button from "../../UI/Button/Button";

const Amount = ({ targeted, received, delivered }) => {
  return (
    <div className={classes.Amount}>
      <Button type="secondary" action={() => {}}>
        <i className="fas fa-money-bill-alt"></i> Targeted: ₹ {targeted}
      </Button>
      <Button type="secondary" action={() => {}}>
        <i className="fas fa-money-bill-alt"></i> Received: ₹ {received}
      </Button>
      <Button type="secondary" action={() => {}}>
        <i className="fas fa-money-bill-alt"></i> Delivered: ₹ {delivered}
      </Button>
    </div>
  );
};

export default Amount;
