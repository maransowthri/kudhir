import React, { useRef } from "react";
import classes from "./Donate.module.css";

const Payments = (props) => {
  const onlineBankingRef = useRef();
  const upiRef = useRef();
  const bankRef = useRef();
  const bitcoinRef = useRef();

  const togglePanel = (accordionRef) => {
    accordionRef.current.classList.toggle(classes.Active);
    var panel = accordionRef.current.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className={classes.Donate}>
      <h2 className={classes.DonateTitle}>Donate</h2>
      <div className={classes.DonateMethods}>
        <h4
          ref={onlineBankingRef}
          onClick={() => togglePanel(onlineBankingRef)}
          className={classes.Accordion}
        >
          Online Banking
        </h4>
        <div className={classes.Panel}>
          <p>Onine Banking</p>
        </div>
        <h4
          ref={upiRef}
          onClick={() => togglePanel(upiRef)}
          className={classes.Accordion}
        >
          UPI Transfer
        </h4>
        <div className={classes.Panel}>
          <p>UPI Transfer</p>
        </div>
        <h4
          ref={bankRef}
          onClick={() => togglePanel(bankRef)}
          className={classes.Accordion}
        >
          Bank Transfer
        </h4>
        <div className={classes.Panel}>
          <p>Bank Transfer</p>
        </div>
        <h4
          ref={bitcoinRef}
          onClick={() => togglePanel(bitcoinRef)}
          className={classes.Accordion}
        >
          Bitcoin Transfer
        </h4>
        <div className={classes.Panel}>
          <p>Bitcoin Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
