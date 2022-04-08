import React from "react";
import { Post } from "../store/posts/initialState";
import "./PostListItem.scss";

export default function PostListItem(props: any) {
  let post: Post = props.post;
  return (
    <div className="postListItem">
      <h2>{post.title}</h2>
      <h3>
        posted to {post.subreddit} by {post.author} on {post.published}
      </h3>
    </div>
  );
}
