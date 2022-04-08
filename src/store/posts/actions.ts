import { createAction } from "@reduxjs/toolkit";
import { Post } from "./initialState";

export const fetchPostsAction = createAction("@@POSTS/FETCH");
export const fetchPostsSuccesAction = createAction<Post[]>(
  "@@POSTS/FETCH/SUCCES"
);
export const fetchPostsErrorAction = createAction<{ results: Post[] }>(
  "@@POSTS/FETCH/ERROR"
);
