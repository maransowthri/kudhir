import React from "react";

import Posts from "../../components/Posts/Posts";
import { POSTS } from "../../posts";

const StoryPage = (props) => {
  const posts = POSTS;

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default StoryPage;
