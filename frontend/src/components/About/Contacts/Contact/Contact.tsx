import React from "react";
import classes from "./Contact.module.css";

interface IProps {
  icon: string;
  content: string;
  link: string;
}

const Contact: React.FC<IProps> = ({ icon, content, link }) => {
  return (
    <div className={classes.Contact}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={classes.Logo}>
          <i className={icon}></i>
        </div>
        <p className={classes.Content}>{content}</p>
      </a>
    </div>
  );
};

export default Contact;
