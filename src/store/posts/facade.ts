import { Dispatch } from "redux";
import { Post } from "./initialState";
import * as ACTIONS from "./actions";
import { redditService } from "../../services/reddit.service";

export const fetchPosts = () => {
  return (dispatch: Dispatch): void => {
    dispatch(ACTIONS.fetchPostsAction());
    redditService
      .getFrontPage()
      .then((res) => {
        const posts: Post[] = res.map((post: any): Post => {
          return {
            id: post.id || "",
            title: post.title || "",
            author: post.author?.name || "",
            content: "",
            img: "",
            subreddit: "",
            published: post.published || "",
            updated: post.updated || "",
          };
        });
        dispatch(ACTIONS.fetchPostsSuccesAction(posts));
      })
      .catch((error) => {
        dispatch(ACTIONS.fetchPostsErrorAction(error));
      });
  };
};
