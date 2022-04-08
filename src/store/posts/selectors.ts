import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../store.types";
import { PostsState } from "./initialState";

export const postsStateSelector = (state: StoreState): PostsState =>
  state.posts;

export const selectPosts = createSelector(
  postsStateSelector,
  (state: PostsState) => state.list
);

export const selectPostsError = createSelector(
  postsStateSelector,
  (state: PostsState) => state?.error
);
