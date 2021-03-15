import React from "react";
import Contact from "./Contact/Contact";

import classes from "./Contacts.module.css";
import { CONTACTS } from "../../../contacts";

const Contacts = (props) => {
  const contactList = CONTACTS.map(({ link, icon, content }) => (
    <Contact key={link} icon={icon} content={content} link={link} />
  ));
  return <div className={classes.Contacts}>{contactList}</div>;
};

export default Contacts;
