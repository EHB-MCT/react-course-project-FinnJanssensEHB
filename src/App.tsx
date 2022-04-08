import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/posts/facade";
import { selectPosts } from "./store/posts/selectors";
import { Post } from "./store/posts/initialState";
import { StoreState } from "./store/store.types";

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
        return (
          <div>
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <h4>{post.subreddit}</h4>
            <img src={post.img} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default App;
