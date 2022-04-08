import { Store } from "redux";
import { PostsState } from "./posts/initialState";

export interface StoreState extends Store {
  posts: PostsState;
}
