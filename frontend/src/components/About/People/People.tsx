import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./People.module.css";
import { IRootReducer } from "interfaces/store";
import { IPagesState } from "store/reducers/pages";
import { fetchPeople } from "store/actions/pages";
import Person from "./Person/Person";
import Loader from "components/UI/Loader/Loader";

const People: React.FC = () => {
  let result = null;
  const dispatch = useDispatch();
  const { people, loading } = useSelector<IRootReducer, IPagesState>(
    (state) => ({ ...state.pages })
  );
  const peopleList = people
    ? people.map((person) => <Person key={person.id} person={person} />)
    : null;

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  if (loading) {
    result = <Loader />;
  } else if (people) {
    result = <div className={classes.People}>{peopleList}</div>;
  } else {
    result = (
      <>
        <p className={classes.NoPeopleText}>No people found.</p>
      </>
    );
  }

  return (
    <>
      <h2 className={classes.Title}>People</h2>
      {result}
    </>
  );
};

export default People;
