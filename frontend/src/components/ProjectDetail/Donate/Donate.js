import React, { useRef } from "react";
import BankTransfer from "./BankTransfer/BankTransfer";
import BitcoinTransfer from "./BitcoinTransfer/BitcoinTransfer";
import classes from "./Donate.module.css";
import OnlineBanking from "./OnlineBanking/OnlineBanking";
import UPITransfer from "./UPITransfer/UPITransfer";

const Payments = ({ project }) => {
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
          <OnlineBanking />
        </div>
        <h4
          ref={upiRef}
          onClick={() => togglePanel(upiRef)}
          className={classes.Accordion}
        >
          UPI Transfer
        </h4>
        <div className={classes.Panel}>
          <UPITransfer upi_id={project.upi_id} upi_qr={project.upi_qr} />
        </div>
        <h4
          ref={bankRef}
          onClick={() => togglePanel(bankRef)}
          className={classes.Accordion}
        >
          Bank Transfer
        </h4>
        <div className={classes.Panel}>
          <BankTransfer
            acctName={project.bank_account_name}
            acctNo={project.bank_account_number}
            ifsc={project.ifsc_code}
          />
        </div>
        <h4
          ref={bitcoinRef}
          onClick={() => togglePanel(bitcoinRef)}
          className={classes.Accordion}
        >
          Bitcoin Transfer
        </h4>
        <div className={classes.Panel}>
          <BitcoinTransfer address={project.bitcoin_wallet_address} />
        </div>
      </div>
    </div>
  );
};

export default Payments;
