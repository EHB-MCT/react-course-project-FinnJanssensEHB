import { createAction } from "@reduxjs/toolkit";
import { Post, PostDetail } from "./initialState";

export const fetchPostsAction = createAction("@@POSTS/FETCH");
export const fetchPostsSuccesAction = createAction<Post[]>(
  "@@POSTS/FETCH/SUCCES"
);
export const fetchPostsErrorAction = createAction<{ results: Post[] }>(
  "@@POSTS/FETCH/ERROR"
);
export const fetchPostDetailAction = createAction("@@POSTS/FETCHDETAIL");
export const fetchPostDetailSuccesAction = createAction<PostDetail>(
  "@@POSTS/FETCHDETAIL/SUCCES"
);
export const fetchPostDetailErrorAction = createAction<{ results: PostDetail }>(
  "@@POSTS/FETCHDETAIL/ERROR"
);
