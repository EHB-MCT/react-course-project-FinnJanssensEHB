import React, { useEffect } from "react";
import { PostDetail, Post, Comment } from "../store/posts/initialState";
import "./PostDetailComponent.scss";
import Votes from "./Votes";

export default function PostDetailComponent(props: any) {
  const postDetail: PostDetail = props.postDetail;
  const emojiRegex: RegExp = /\:(.*?)\:/g;

  console.log(postDetail);

  return (
    <div className="PostDetailComponent box-shadow">
      <div className="PostDetailHeader">
        <Votes score={postDetail.post.score}></Votes>
        <div className="PostDetailTitleContainer">
          <p
            className="flair"
            style={{ backgroundColor: postDetail.post.flair_background_color }}
          >
            {postDetail.post.flair.replace(emojiRegex, "")}
          </p>
          <h2>{postDetail.post.title}</h2>
          <p>
            r/{postDetail.post.subreddit} - Posted by u/{postDetail.post.author}{" "}
            x hours ago
          </p>
        </div>
      </div>
      {postDetail.post.is_video ? (
        <div className="postDetailMediaContainer">
          <video src={postDetail.post.video_src} controls></video>
        </div>
      ) : postDetail.post.thumbnail.startsWith("http") ? (
        <div className="postDetailMediaContainer">
          <img src={postDetail.post.image_src} alt="" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
