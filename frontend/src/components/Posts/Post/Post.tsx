import React from "react";
import classes from "./Post.module.css";
import SocialLinks from "components/UI/SocialLinks/SocialLinks";
import { IPostSocial } from "interfaces/post";

interface IProps {
  title: string;
  message: string;
  postedOn: string;
  socials: IPostSocial[];
}

const Post: React.FC<IProps> = ({ title, message, postedOn, socials }) => {
  return (
    <div className={classes.Post}>
      <h3 className={classes.PostTitle}>{title}</h3>
      <p className={classes.PostInfo}>{message}</p>
      <div className={classes.SocialsLinks}>
        <SocialLinks socials={socials} />
      </div>
      <p className={classes.PostInfo}>Posted On: {postedOn}</p>
    </div>
  );
};

export default Post;
