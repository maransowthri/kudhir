import React from "react";
import Input from "../../../UI/Input/Input";

const BitcoinTransfer = ({ address }) => {
  const attrs = {
    value: address,
    disabled: true,
  };

  return (
    <div>
      <Input id="address" label="Address" attrs={attrs} />
    </div>
  );
};

export default BitcoinTransfer;
