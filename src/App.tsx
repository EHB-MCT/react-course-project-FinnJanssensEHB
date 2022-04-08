import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/posts/facade";
import { selectPosts } from "./store/posts/selectors";
import { Post } from "./store/posts/initialState";
import { StoreState } from "./store/store.types";
import PostListItem from "./components/PostListItem";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector<StoreState, Post[]>((state) => selectPosts(state));

  console.log(posts);

  return (
    <>
      {posts.map((post: Post) => {
        return <PostListItem post={post}></PostListItem>;
      })}
    </>
  );
}

export default App;
