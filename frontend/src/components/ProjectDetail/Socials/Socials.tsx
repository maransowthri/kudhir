import React from "react";
import SocialLinks from "components/UI/SocialLinks/SocialLinks";
import classes from "./Socials.module.css";

interface IProps {
  socials: string[];
}

const Socials: React.FC<IProps> = ({ socials }) => {
  return (
    <div className={classes.Socials}>
      <h2 className={classes.SocialsTitle}>Let's connect!</h2>
      <div className={classes.SocialsLinks}>
        <SocialLinks socials={socials} />
      </div>
    </div>
  );
};

export default Socials;
