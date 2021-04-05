import React from "react";
import Posts from "components/Posts/Posts";
import { POSTS } from "dummy/posts";

const StoryPage: React.FC = () => {
  const posts = POSTS;

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default StoryPage;
