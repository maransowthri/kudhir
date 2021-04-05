import classes from "./UPITransfer.module.css";
import React from "react";
import DisabledInput from "components/UI/DisabledInput/DisabledInput";

const UPITransfer = ({ upi_id, upi_qr }) => {
  return (
    <div>
      <img className={classes.QRImage} src={upi_qr} alt="QR Code" />
      <DisabledInput id="upiID" label="UPI ID" value={upi_id} />
    </div>
  );
};

export default UPITransfer;
