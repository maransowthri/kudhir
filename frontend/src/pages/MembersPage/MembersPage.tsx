import React from "react";
import Members from "components/Members/Members";
import { MEMBERS } from "dummy/members";
import classes from "./MembersPage.module.css";

const MembersPage: React.FC = () => {
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
