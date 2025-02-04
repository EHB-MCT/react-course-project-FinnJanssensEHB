import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/posts/facade";
import { Post } from "../store/posts/initialState";
import { selectPosts } from "../store/posts/selectors";
import { StoreState } from "../store/store.types";
import PostListItem from "./PostListItem";
import "./PostContainer.scss";
import { useLoading } from "../hooks/useLoading.hook";
import Loader from "./Loader";
import CreatePost from "./CreatePost";

export default function PostContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector<StoreState, Post[]>((state) => selectPosts(state));
  const loading = useLoading(posts);

  return (
    <div className="PostContainer box-shadow">
      <CreatePost></CreatePost>
      {loading ? (
        <Loader instances={10} />
      ) : (
        posts.map((post: Post) => {
          return <PostListItem post={post} key={post.id}></PostListItem>;
        })
      )}
    </div>
  );
}
