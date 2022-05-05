import React from "react";
import { useParams } from "react-router-dom";
import { redditService } from "../services/reddit.service";

export default function Detail() {
  const params = useParams();
  redditService.getPost(params.subreddit || "", params.id || "").then((res) => {
    console.log(res);
  });
  return (
    <>
      {params.id}
      {params.subreddit}
    </>
  );
}
