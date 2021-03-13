import React from "react";
import Members from "../../components/Members/Members";

import { MEMBERS } from "../../members";
import classes from "./MembersPage.module.css";

const MembersPage = (props) => {
  const members = MEMBERS;

  return (
    <div>
      <h3 className={classes.MembersPageTitle}>
        Thanks to following organizations for making this happen!
      </h3>
      <Members members={members} />
    </div>
  );
};

export default MembersPage;
