import React from "react";
import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import { redditService } from "../services/reddit.service";

export default function Detail() {
  const params = useParams();
  redditService.getPost(params.subreddit || "", params.id || "").then((res) => {
    console.log(res);
  });
  return (
    <>
      <PostDetail
        subreddit={params.subreddit || ""}
        id={params.id || ""}
      ></PostDetail>
    </>
  );
}
