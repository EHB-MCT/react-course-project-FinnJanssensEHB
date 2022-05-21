import React, { useEffect } from "react";
import { useLoading } from "../hooks/useLoading.hook";
import { Comment, PostDetail } from "../store/posts/initialState";
import CommentComponent from "./CommentComponent";
import "./CommentsContainer.scss";

interface Props {
  comments: Comment[];
}

export default function CommentsContainer(props: Props) {
  console.log(props);

  useEffect(() => {}, []);

  return (
    <div className="commentsContainer box-shadow">
      <p className="commentsContainerTitle">COMMENTS</p>
      {props.comments.map((comment: Comment) => (
        <CommentComponent key={comment.id} comment={comment}></CommentComponent>
      ))}
    </div>
  );
}
