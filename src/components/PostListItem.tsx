import React from "react";
import { Post } from "../store/posts/initialState";
import "./PostListItem.scss";

export default function PostListItem(props: any) {
  let post: Post = props.post;
  return (
    <div className="postListItem box-shadow">
      <div className="votes-container">
        <p>up</p>
        <p>{post.score}</p>
        <p>down</p>
      </div>
      <div className="post-content-container">
        <h2>{post.title}</h2>
        <p>
          {post.subreddit} - Posted by {post.author} x hours ago
        </p>
        <div className="post-actions-container">
          <p>award comment share more</p>
        </div>
      </div>
      <div className="post-image-container">
        {post.thumbnail ? <img src={post.thumbnail} alt="" /> : <></>}
      </div>
    </div>
  );
}
