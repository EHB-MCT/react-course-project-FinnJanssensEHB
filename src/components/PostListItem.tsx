import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../store/posts/initialState";
import "./PostListItem.scss";

export default function PostListItem(props: any) {
  let post: Post = props.post;
  const [MoreActions, ShowMoreActions] = useState(false);
  const [Votes, ChangeVotes] = useState(post.score);
  const [Upvote, SetUpvote] = useState(false);
  const [Downvote, SetDownvote] = useState(false);

  const emojiRegex: RegExp = /\:(.*?)\:/g;

  function upVote() {
    if (!Upvote) {
      ChangeVotes(Votes + 1);
      SetUpvote(true);
      SetDownvote(false);
    } else {
      ChangeVotes(Votes - 1);
      SetUpvote(false);
      SetDownvote(false);
    }
  }

  function downVote() {
    if (!Downvote) {
      ChangeVotes(Votes - 1);
      SetDownvote(true);
      SetUpvote(false);
    } else {
      ChangeVotes(Votes + 1);
      SetDownvote(false);
      SetUpvote(false);
    }
  }

  return (
    <Link className="postListItem box-shadow" to={"/post/" + post.id}>
      <div className="votes-container">
        <span
          aria-hidden="true"
          data-icon="&#xe907;"
          onClick={upVote}
          className={Upvote ? "orange" : ""}
        ></span>
        <p className={Upvote || Downvote ? "orange" : ""}>{Votes}</p>
        <span
          aria-hidden="true"
          data-icon="&#xe908;"
          onClick={downVote}
          className={Downvote ? "orange" : ""}
        ></span>
      </div>
      <div className="post-content-container">
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
      </div>
      {post.thumbnail.startsWith("http") ? (
        <div className="post-image-container">
          <img src={post.thumbnail} alt="" />
        </div>
      ) : (
        <></>
      )}
    </Link>
  );
}
