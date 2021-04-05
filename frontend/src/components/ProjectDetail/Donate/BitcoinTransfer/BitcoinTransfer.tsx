import React from "react";
import DisabledInput from "components/UI/DisabledInput/DisabledInput";

interface IProps {
  address: string;
}

const BitcoinTransfer: React.FC<IProps> = ({ address }) => {
  return (
    <div>
      <DisabledInput id="address" label="Address" value={address} />
    </div>
  );
};

export default BitcoinTransfer;
