import React, { useEffect } from "react";
import { PostDetail, Post, Comment } from "../store/posts/initialState";
import "./PostDetailComponent.scss";
import Votes from "./Votes";

export default function PostDetailComponent(props: any) {
  const postDetail: PostDetail = props.postDetail;
  const emojiRegex: RegExp = /\:(.*?)\:/g;

  console.log("FLAIR", postDetail.post.flair);

  return (
    <div className="PostDetailComponent box-shadow">
      <div className="PostDetailHeader">
        <Votes score={postDetail.post.score}></Votes>
        <div className="PostDetailTitleContainer">
          {postDetail.post.flair ? (
            <p
              className="flair"
              style={{
                backgroundColor: postDetail.post.flair_background_color,
              }}
            >
              {postDetail.post.flair.replace(emojiRegex, "")}
            </p>
          ) : (
            <></>
          )}
          <h2 className="postTitle">{postDetail.post.title}</h2>
          <p className="postSubTitle">
            r/
            <a
              href={`https://frontend-reddit-angular.web.app/r/${postDetail.post.subreddit}`}
            >
              {postDetail.post.subreddit}
            </a>
            &nbsp;- Posted by u/{postDetail.post.author} x hours ago
          </p>
          {postDetail.post.url?.startsWith("https://i.redd.it/") ||
          postDetail.post.url?.startsWith("https://v.redd.it/") ||
          postDetail.post.url?.startsWith("https://www.reddit.com/") ? (
            <></>
          ) : (
            <a href={postDetail.post.url}>{postDetail.post.url}</a>
          )}
        </div>
      </div>
      {postDetail.post.is_video ? (
        <div className="postDetailMediaContainer">
          <video src={postDetail.post.video_src} controls></video>
        </div>
      ) : postDetail.post.thumbnail.startsWith("http") ? (
        <div className="postDetailMediaContainer">
          <img src={postDetail.post.url} alt="" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
