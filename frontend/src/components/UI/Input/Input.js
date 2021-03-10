import classes from "./Input.module.css";
import React, { useRef } from "react";

const Input = (props) => {
  const inputRef = useRef();
  const iconRef = useRef();

  const inputClassName = [
    classes.InputBox,
    props.attrs.disabled && classes.Disabled,
  ].join(" ");

  const copyToClipboard = (inputRef, iconRef) => {
    navigator.clipboard.writeText(inputRef.current.value);
    iconRef.current.classList = "far fa-check-circle";
    iconRef.current.style.color = "#00d09c";
  };

  const icon = props.attrs.disabled ? (
    <i
      ref={iconRef}
      onClick={() => copyToClipboard(inputRef, iconRef)}
      className="far fa-copy"
    ></i>
  ) : null;

  return (
    <div className={classes.Input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        className={inputClassName}
        id={props.id}
        {...props.attrs}
      />
      {icon}
    </div>
  );
};

export default Input;
