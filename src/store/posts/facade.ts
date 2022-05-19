import { Dispatch } from "redux";
import { Post, PostDetail, Comment } from "./initialState";
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
            id: post.data.id || "",
            is_video: post.data.is_video || false,
            title: post.data.title || "",
            author: post.data.author || "",
            content: post.data.selftext || "",
            thumbnail: post.data.thumbnail || "",
            subreddit: post.data.subreddit,
            created: post.data.created_utc || 0,
            score: post.data.score || 0,
            flair: post.data.link_flair_text || "",
            flair_background_color: post.data.link_flair_background_color || "",
          };
        });
        dispatch(ACTIONS.fetchPostsSuccesAction(posts));
      })
      .catch((error) => {
        dispatch(ACTIONS.fetchPostsErrorAction(error));
      });
  };
};
