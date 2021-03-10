import classes from "./UPITransfer.module.css";
import React from "react";
import Input from "../../../UI/Input/Input";

const UPITransfer = ({ upi_id, upi_qr }) => {
  const attrs = {
    value: upi_id,
    disabled: true,
  };
  return (
    <div>
      <img className={classes.QRImage} src={upi_qr} alt="QR Code" />
      <Input id="upiID" label="UPI ID" attrs={attrs} />
    </div>
  );
};

export default UPITransfer;
