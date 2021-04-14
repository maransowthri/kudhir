import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "components/Posts/Posts";
import { IRootReducer } from "interfaces/store";
import { IPagesState } from "store/reducers/pages";
import { fetchPosts } from "store/actions/pages";
import Loader from "components/UI/Loader/Loader";
import Alert from "components/UI/Alert/Alert";

const StoryPage: React.FC = () => {
  let result = null;
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector<IRootReducer, IPagesState>(
    (state) => ({ ...state.pages })
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    result = <Loader />;
  } else if (posts) {
    result = <Posts posts={posts} />;
  } else {
    result = <Alert type="error" message={error} />;
  }

  return <div>{result}</div>;
};

export default StoryPage;
