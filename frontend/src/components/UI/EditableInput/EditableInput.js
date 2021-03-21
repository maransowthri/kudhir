import React from "react";

import classes from "./EditableInput.module.css";

export default function EditableInput(props) {
  return (
    <div className={classes.EditableInput}>
      <input id={props.id} {...props.attrs} />
      <label htmlFor={props.id}>
        <span className={classes.ContentName}>{props.label}</span>
      </label>
    </div>
  );
}
