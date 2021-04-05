import React from "react";
import classes from "./Button.module.css";

interface IProps {
  type: "primary" | "secondary";
  size?: "block" | "normal";
  action: () => void;
}

const Button: React.FC<IProps> = ({ type, size, action, children }) => {
  const classNames = [
    classes.Button,
    type === "primary"
      ? classes.Primary
      : type === "secondary"
      ? classes.Secondary
      : classes.Default,
    size === "block" ? classes.Block : classes.Normal,
  ].join(" ");

  return (
    <button className={classNames} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
