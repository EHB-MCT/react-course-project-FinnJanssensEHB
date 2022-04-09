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
          console.log(post);

          return {
            id: post.data.id || "",
            title: post.data.title || "",
            author: post.data.author || "",
            content: "",
            thumbnail: post.data.thumbnail || "",
            subreddit: post.data.subreddit,
            created: post.data.created_utc || 0,
            score: post.data.score || 0,
          };
        });
        dispatch(ACTIONS.fetchPostsSuccesAction(posts));
      })
      .catch((error) => {
        dispatch(ACTIONS.fetchPostsErrorAction(error));
      });
  };
};
