import React from "react";
import classes from "./EditableInput.module.css";

interface IProps {
  id: string;
  label: string;
  attrs: object;
}

const EditableInput: React.FC<IProps> = ({ id, label, attrs }) => {
  return (
    <div className={classes.EditableInput}>
      <input id={id} {...attrs} />
      <label htmlFor={id}>
        <span className={classes.ContentName}>{label}</span>
      </label>
    </div>
  );
};

export default EditableInput;
