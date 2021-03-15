import React from "react";

import classes from "./Contact.module.css";

const Contact = ({ icon, content, link }) => {
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
