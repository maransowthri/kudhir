import React, { useRef } from "react";
import classes from "./Alert.module.css";

interface IProps {
  type: "success" | "info" | "error";
  message: string;
}

const Alert: React.FC<IProps> = ({ type, message }) => {
  const alertRef = useRef<HTMLDivElement>(null);
  let subEl = null;
  let icon = null;
  let classNames = null;

  const removeAlert = () => {
    alertRef.current?.remove();
  };

  if (type === "success") {
    icon = "fas fa-check-circle fa-2x";
    classNames = [classes.Alert, classes.Success].join(" ");
  } else if (type === "error") {
    subEl = <a href="mailto:support@kudhir.org">Report this to fix it ASAP.</a>;
    icon = "fas fa-exclamation-circle fa-2x";
    classNames = [classes.Alert, classes.Error].join(" ");
  } else {
    icon = "fas fa-info-circle fa-2x";
    classNames = [classes.Alert, classes.Info].join(" ");
  }

  return (
    <div ref={alertRef} className={classNames}>
      <i className={icon}></i>
      <div className={classes.Message}>
        <h3>{message}</h3>
        {subEl}
      </div>
      <span className={classes.Close} onClick={removeAlert}>
        &times;
      </span>
    </div>
  );
};

export default Alert;
