import React from "react";
import Input from "../../../UI/Input/Input";

const BankTransfer = ({ acctName, acctNo, ifsc }) => {
  const acctNameAttrs = {
    value: acctName,
    disabled: true,
  };

  const acctNoAttrs = {
    value: acctNo,
    disabled: true,
  };

  const ifscAttrs = {
    value: ifsc,
    disabled: true,
  };

  return (
    <div>
      <Input id="acctName" label="Name" attrs={acctNameAttrs} />
      <Input id="acctNo" label="Account No." attrs={acctNoAttrs} />
      <Input id="ifsc" label="IFSC Code" attrs={ifscAttrs} />
    </div>
  );
};

export default BankTransfer;
