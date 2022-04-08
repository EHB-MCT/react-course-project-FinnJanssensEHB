import { createReducer } from "@reduxjs/toolkit";
import { PostsState, initialState } from "./initialState";
import * as ACTIONS from "./actions";

export const postsReducer = createReducer<PostsState>(
  initialState,
  (builder) => {
    builder.addCase(ACTIONS.fetchPostsAction, (state): PostsState => {
      return {
        ...state,
        loading: true,
        error: "",
        list: [],
      };
    });

    builder.addCase(
      ACTIONS.fetchPostsSuccesAction,
      (state, action): PostsState => {
        return {
          ...state,
          loading: false,
          error: "",
          list: action.payload,
        };
      }
    );

    builder.addCase(
      ACTIONS.fetchPostsErrorAction,
      (state, action): PostsState => {
        return {
          ...state,
          loading: false,
          error: action.payload.toString(),
          list: [],
        };
      }
    );
  }
);
