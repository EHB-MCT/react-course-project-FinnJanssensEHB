import React, { useState } from "react";
import "./Votes.scss";

interface Props {
  score: number;
}

export default function Votes(props: Props) {
  const [Votes, ChangeVotes] = useState(props.score);
  const [Upvote, SetUpvote] = useState(false);
  const [Downvote, SetDownvote] = useState(false);

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
  );
}
