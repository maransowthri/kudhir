import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Members from "components/Members/Members";
import classes from "./MembersPage.module.css";
import { IRootReducer } from "interfaces/store";
import { IPagesState } from "store/reducers/pages";
import { fetchMembers } from "store/actions/pages";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

const MembersPage: React.FC = () => {
  let result = null;
  const dispatch = useDispatch();
  const { members, loading, error } = useSelector<IRootReducer, IPagesState>(
    (state) => ({ ...state.pages })
  );

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  if (loading) {
    result = <Loader />;
  } else if (members) {
    result = <Members members={members} />;
  } else {
    result = (
      <>
        <Alert type="error" message={error} />
        <p className={classes.NoDataText}>No members found.</p>
      </>
    );
  }

  return (
    <div>
      <h3 className={classes.PageTitle}>
        Thanks to following organizations for making this happen!
      </h3>
      {result}
    </div>
  );
};

export default MembersPage;
