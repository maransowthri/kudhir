import React from "react";

import classes from "./Amount.module.css";
import Button from "../../UI/Button/Button";

const Amount = ({ targeted, received, delivered }) => {
  return (
    <div className={classes.Amount}>
      <Button type="secondary" action={() => {}}>
        Targeted: ₹ {targeted}
      </Button>
      <Button type="secondary" action={() => {}}>
        Received: ₹ {received}
      </Button>
      <Button type="secondary" action={() => {}}>
        Delivered: ₹ {delivered}
      </Button>
    </div>
  );
};

export default Amount;
