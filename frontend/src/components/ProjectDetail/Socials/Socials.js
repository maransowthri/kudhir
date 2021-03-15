import React from "react";
import SocialLinks from "../../UI/SocialLinks/SocialLinks";

import classes from "./Socials.module.css";

const Socials = ({ socials }) => {
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
