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
        let parser = new DOMParser();
        const posts: Post[] = res.map((post: any): Post => {
          const doc = parser.parseFromString(post.content, "text/html");

          let subr = post.content.substring(post.content.indexOf(" r/"));

          return {
            id: post.id || "",
            title: post.title || "",
            author: post.author?.name || "",
            content: "",
            img: doc.getElementsByTagName("img")[0]?.src || "",
            subreddit: subr.substring(0, subr.indexOf("</")),
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
