import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/posts/facade";
import { Post } from "../store/posts/initialState";
import { selectPosts } from "../store/posts/selectors";
import { StoreState } from "../store/store.types";
import PostListItem from "./PostListItem";
import "./PostContainer.scss";

export default function PostContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector<StoreState, Post[]>((state) => selectPosts(state));

  console.log(posts);

  return (
    <div className="PostContainer">
      {posts.map((post: Post) => {
        return <PostListItem post={post}></PostListItem>;
      })}
    </div>
  );
}
