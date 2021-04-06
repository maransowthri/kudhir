import React from "react";
import Contact from "./Contact/Contact";
import classes from "./Contacts.module.css";

export const CONTACTS = [
  {
    icon: "fas fa-envelope fa-2x",
    content: "support@kudhir.com",
    link: "mailto:support@kudhir.com",
  },
  {
    icon: "fab fa-linkedin-in fa-2x",
    content: "@Kudhir",
    link: "https://www.linkedin.com/in/kudhir",
  },
  {
    icon: "fas fa-map-signs fa-2x",
    content: "1/13 Sivaganga Tamil Nadu",
    link: "https://goo.gl/maps/KY5JhWxBLkLVprEA8",
  },
];

const Contacts: React.FC = () => {
  const contactList = CONTACTS.map(({ link, icon, content }) => (
    <Contact key={link} icon={icon} content={content} link={link} />
  ));
  return <div className={classes.Contacts}>{contactList}</div>;
};

export default Contacts;
