import React, { useState } from "react";
import { Post } from "../store/posts/initialState";
import "./PostListItem.scss";

export default function PostListItem(props: any) {
  const [MoreActions, ShowMoreActions] = useState(false);
  let post: Post = props.post;
  return (
    <div className="postListItem box-shadow">
      <div className="votes-container">
        <span aria-hidden="true" data-icon="&#xe907;"></span>
        <p>{post.score}</p>
        <span aria-hidden="true" data-icon="&#xe908;"></span>
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
          <span aria-hidden="true" data-icon="&#xe903;"></span>
          <span aria-hidden="true" data-icon="&#xe904;"></span>
          <span aria-hidden="true" data-icon="&#xe905;"></span>
          <div className="more-actions-toggle">
            <span
              aria-hidden="true"
              data-icon="&#xe906;"
              onClick={() => ShowMoreActions(!MoreActions)}
            ></span>
            {MoreActions ? (
              <div className="more-actions-container box-shadow">
                <div>
                  <span aria-hidden="true" data-icon="&#xe901;"></span>
                  <p>Save</p>
                </div>
                <div>
                  <span aria-hidden="true" data-icon="&#xe902;"></span>
                  <p>Hide</p>
                </div>
                <div>
                  <span aria-hidden="true" data-icon="&#xe909;"></span>
                  <p>Report</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
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
