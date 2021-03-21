import classes from "./DisabledInput.module.css";
import React, { useRef } from "react";

const DisabledInput = (props) => {
  const inputRef = useRef();
  const iconRef = useRef();

  const copyToClipboard = (inputRef, iconRef) => {
    navigator.clipboard.writeText(inputRef.current.value);
    iconRef.current.classList = "far fa-check-circle";
    iconRef.current.style.color = "#00d09c";
  };

  return (
    <div className={classes.DisabledInput}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        className={classes.DisabledInputBox}
        id={props.id}
        value={props.value}
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
