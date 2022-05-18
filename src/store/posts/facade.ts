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
          console.log(post);

          return {
            id: post.data.id || "",
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

export const fetchPostDetail = (subreddit: string, id: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(ACTIONS.fetchPostDetailAction());
    redditService
      .getPost(subreddit, id)
      .then((res) => {
        const post: Post = {
          id: res[0].data.id || "",
          title: res[0].data.title || "",
          author: res[0].data.author || "",
          content: res[0].data.selftext || "",
          thumbnail: res[0].data.thumbnail || "",
          subreddit: res[0].data.subreddit,
          created: res[0].data.created_utc || 0,
          score: res[0].data.score || 0,
          flair: res[0].data.link_flair_text || "",
          flair_background_color: res[0].data.link_flair_background_color || "",
        };
        const comments: Comment[] = res[1].data.children.map(
          (comment: any): Comment => {
            console.log(comment);

            return {
              id: comment.data.id || "",
              author: comment.data.author || "",
              body: comment.data.body || "",
              score: comment.data.score || 0,
            };
          }
        );

        const postDetail: PostDetail = { post: post, comments: comments };
        console.log(postDetail);
        dispatch(ACTIONS.fetchPostDetailSuccesAction(postDetail));
      })
      .catch((error) => {
        dispatch(ACTIONS.fetchPostDetailErrorAction(error));
      });
  };
};
