import { IMember } from "interfaces/member";
import React from "react";
import Member from "./Member/Member";
import classes from "./Members.module.css";

interface IProps {
  members: IMember[];
}

const Members: React.FC<IProps> = ({ members }) => {
  const memberList = members.map((member) => (
    <Member
      key={member.id}
      name={member.name}
      logo={member.logo}
      website={member.website}
    />
  ));

  return <div className={classes.Members}>{memberList}</div>;
};

export default Members;
