import React from "react";
import Votes from "./Votes";
import { Comment, PostDetail } from "../store/posts/initialState";
import "./CommentComponent.scss";

interface Props {
  comment: Comment;
}

export default function CommentComponent(props: Props) {
  return (
    <div className="Comment">
      <Votes score={props.comment.score}></Votes>
      <img
        src="https://iconape.com/wp-content/png_logo_vector/user-circle.png"
        alt=""
      />
      <div className="commentContentContainer">
        <h2>{props.comment.author}</h2>
        <div className="truncate"> {props.comment.body}</div>
      </div>
    </div>
  );
}
