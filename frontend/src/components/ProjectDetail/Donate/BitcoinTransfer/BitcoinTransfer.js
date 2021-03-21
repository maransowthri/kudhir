import React from "react";
import DisabledInput from "../../../UI/DisabledInput/DisabledInput";

const BitcoinTransfer = ({ address }) => {
  return (
    <div>
      <DisabledInput id="address" label="Address" value={address} />
    </div>
  );
};

export default BitcoinTransfer;
