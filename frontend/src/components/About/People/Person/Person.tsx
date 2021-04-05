import { IPerson } from "interfaces/people";
import React from "react";
import classes from "./Person.module.css";

interface IProps {
  person: IPerson;
}

const Person: React.FC<IProps> = ({ person }) => {
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
