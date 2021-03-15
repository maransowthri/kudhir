import React from "react";

import classes from "./Person.module.css";

const Person = ({ person }) => {
  return (
    <div className={classes.Person}>
      <div>
        <a href={person.portfolio}>
          <img
            className={classes.Picture}
            src={person.image}
            alt={person.name}
          />
        </a>
      </div>
      <div>
        <a href={person.portfolio}>
          <h4>{person.name}</h4>
        </a>
        <p>{person.designation}</p>
      </div>
    </div>
  );
};

export default Person;
