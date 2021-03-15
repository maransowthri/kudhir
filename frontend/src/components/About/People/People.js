import React from "react";

import { PEOPLE } from "../../../people";
import Person from "./Person/Person";
import classes from "./People.module.css";

const People = (props) => {
  const peopleList = PEOPLE.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return (
    <>
      <h2 className={classes.Title}>People</h2>
      <div className={classes.People}>{peopleList}</div>
    </>
  );
};

export default People;
