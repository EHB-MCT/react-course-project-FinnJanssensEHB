import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetailComponent from "../components/PostDetailComponent";
import { redditService } from "../services/reddit.service";
import { PostDetail } from "../store/posts/initialState";
import CommentsContainer from "../components/CommentsContainer";

export default function Detail() {
  const params = useParams();
  const [postDetail, setPostDetail] = useState<PostDetail>();

  useEffect(() => {
    console.log("Use Effect");

    redditService
      .getPost(params.subreddit || "", params.id || "")
      .then((p: any) => {
        console.log(p);
        setPostDetail(p);
      });
  }, []);

  return (
    <>
      {postDetail ? (
        <>
          <PostDetailComponent postDetail={postDetail}></PostDetailComponent>
          <CommentsContainer comments={postDetail.comments}></CommentsContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
