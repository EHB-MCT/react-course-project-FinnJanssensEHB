import React, { useEffect } from "react";
import { useLoading } from "../hooks/useLoading.hook";
import { Comment, PostDetail } from "../store/posts/initialState";
import "./CommentsContainer.scss";

interface Props {
  comments: Comment[];
}

export default function CommentsContainer(props: Props) {
  console.log(props);

  useEffect(() => {}, []);

  return (
    <div className="commentsContainer">
      <p>COMMENTS</p>
      {props.comments.map((comment: Comment) => (
        <h1>{comment.author}</h1>
      ))}
    </div>
  );
}
