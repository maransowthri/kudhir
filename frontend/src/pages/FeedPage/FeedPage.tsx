import React from "react";
import Posts from "components/Posts/Posts";
import { SAMPLE_POSTS } from "dummy/posts";

const StoryPage: React.FC = () => {
  const posts = SAMPLE_POSTS;

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default StoryPage;
