import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../store/posts/initialState";
import "./PostListItem.scss";
import Votes from "./Votes";

export default function PostListItem(props: any) {
  let post: Post = props.post;
  const [MoreActions, ShowMoreActions] = useState(false);

  const emojiRegex: RegExp = /\:(.*?)\:/g;

  return (
    <div className="postListItem box-shadow">
      <Votes score={post.score}></Votes>
      <Link
        to={`/r/${post.subreddit}/${post.id}`}
        className="post-content-container"
      >
        <p
          className="flair"
          style={{ backgroundColor: post.flair_background_color }}
        >
          {post.flair.replace(emojiRegex, "")}
        </p>
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
      </Link>
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
