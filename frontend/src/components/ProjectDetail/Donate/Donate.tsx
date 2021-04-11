import { IProjectDetail } from "interfaces/project";
import React, { useRef } from "react";
import BankTransfer from "./BankTransfer/BankTransfer";
import BitcoinTransfer from "./BitcoinTransfer/BitcoinTransfer";
import classes from "./Donate.module.css";
import OnlineBanking from "./OnlineBanking/OnlineBanking";
import UPITransfer from "./UPITransfer/UPITransfer";

interface IProps {
  project: IProjectDetail;
}

const Payments: React.FC<IProps> = ({ project }) => {
  const onlineBankingRef = useRef<HTMLHeadingElement>(null);
  const upiRef = useRef<HTMLHeadingElement>(null);
  const bankRef = useRef<HTMLHeadingElement>(null);
  const bitcoinRef = useRef<HTMLHeadingElement>(null);

  const togglePanel = (accordionRef: React.RefObject<HTMLHeadingElement>) => {
    accordionRef!.current!.classList.toggle(classes.Active);
    const panel = accordionRef!.current!.nextElementSibling! as HTMLElement;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = "0px";
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
