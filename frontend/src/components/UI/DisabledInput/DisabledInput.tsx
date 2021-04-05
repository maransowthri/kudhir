import classes from "./DisabledInput.module.css";
import React, { useRef } from "react";

interface IProps {
  id: string;
  value: string;
  label: string;
}

const DisabledInput: React.FC<IProps> = ({ id, value, label }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (
    inputRef: React.RefObject<HTMLInputElement>,
    iconRef: React.RefObject<HTMLDivElement>
  ) => {
    navigator.clipboard.writeText(inputRef!.current!.value);
    const iconEl = iconRef!.current!;
    iconEl.classList.value = "far fa-check-circle";
    iconEl.style.color = "#00d09c";
  };

  return (
    <div className={classes.DisabledInput}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        className={classes.DisabledInputBox}
        id={id}
        value={value}
        disabled
      />
      <i
        ref={iconRef}
        onClick={() => copyToClipboard(inputRef, iconRef)}
        className="far fa-copy"
      ></i>
    </div>
  );
};

export default DisabledInput;
