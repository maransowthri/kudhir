import { IPost } from "interfaces/post";
import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

interface IProps {
  posts: IPost[];
}

const Posts: React.FC<IProps> = ({ posts }) => {
  const postList = posts.map((post) => (
    <Post
      key={post.id}
      title={post.title}
      message={post.message}
      postedOn={post.posted_on}
      socials={post.socials}
    />
  ));
  return <div className={classes.Posts}>{postList}</div>;
};

export default Posts;
