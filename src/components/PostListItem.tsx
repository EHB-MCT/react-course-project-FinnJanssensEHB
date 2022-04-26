import React from "react";
import { Post } from "../store/posts/initialState";
import "./PostListItem.scss";

export default function PostListItem(props: any) {
  let post: Post = props.post;
  return (
    <div className="postListItem box-shadow">
      <div className="votes-container">
        <span aria-hidden="true" data-icon="&#xe90e;"></span>
        <p>{post.score}</p>
        <span aria-hidden="true" data-icon="&#xe90d;"></span>
      </div>
      <div className="post-content-container">
        <h2>
          {post.title.length > 50
            ? post.title.substring(0, 49) + "..."
            : post.title}
        </h2>
        <p>
          r/{post.subreddit} - Posted by u/{post.author} x hours ago
        </p>
        <div className="post-actions-container">
          <span aria-hidden="true" data-icon="&#xe901;"></span>
          <span aria-hidden="true" data-icon="&#xe900;"></span>
          <span aria-hidden="true" data-icon="&#xe90a;"></span>
          <span aria-hidden="true" data-icon="&#xe906;"></span>
        </div>
      </div>
      {post.thumbnail.startsWith("http") ? (
        <div className="post-image-container">
          <img src={post.thumbnail} alt="" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
