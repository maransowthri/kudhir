import React from "react";
import DisabledInput from "components/UI/DisabledInput/DisabledInput";

interface IProps {
  acctName: string;
  acctNo: string;
  ifsc: string;
}

const BankTransfer: React.FC<IProps> = ({ acctName, acctNo, ifsc }) => {
  return (
    <div>
      <DisabledInput id="acctName" label="Name" value={acctName} />
      <DisabledInput id="acctNo" label="Account No." value={acctNo} />
      <DisabledInput id="ifsc" label="IFSC Code" value={ifsc} />
    </div>
  );
};

export default BankTransfer;
