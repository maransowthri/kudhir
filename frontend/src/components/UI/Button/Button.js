import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const classNames = [
    classes.Button,
    props.type === "primary"
      ? classes.Primary
      : props.type === "secondary"
      ? classes.Secondary
      : classes.Default,
    props.size === "block" ? classes.Block : classes.Normal,
  ].join(" ");

  return (
    <button className={classNames} onClick={props.action}>
      {props.children}
    </button>
  );
};

export default Button;
