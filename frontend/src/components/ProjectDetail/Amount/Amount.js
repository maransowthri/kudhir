import React from "react";

import classes from "./Amount.module.css";
import Button from "../../UI/Button/Button";

const Amount = ({ project }) => {
  return (
    <div className={classes.Amount}>
      <Button type="secondary" action={() => {}}>
        <i className="fas fa-money-bill-alt"></i> Targeted: ₹{" "}
        {project.targeted_amount}
      </Button>
      <Button type="secondary" action={() => {}}>
        <i className="fas fa-money-bill-alt"></i> Received: ₹{" "}
        {project.received_amount}
      </Button>
      <Button type="secondary" action={() => {}}>
        <i className="fas fa-money-bill-alt"></i> Delivered: ₹{" "}
        {project.delivered_amount}
      </Button>
    </div>
  );
};

export default Amount;
