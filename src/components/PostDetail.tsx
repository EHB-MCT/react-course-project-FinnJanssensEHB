import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetail } from "../store/posts/facade";

interface Props {
  subreddit: string;
  id: string;
}

export default function PostDetail(props: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetail(props.subreddit, props.id));
  }, [dispatch]);

  return <></>;
}
