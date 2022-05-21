import React from "react";
import { Post, PostDetail, Comment } from "../store/posts/initialState";

class RedditService {
  private readonly BASE_URL =
    "https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/.json";

  public async getFrontPage() {
    return fetch(this.BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        return data.data.children;
      })
      .catch(function (error) {
        return error;
      });
  }

  private mapComments(data: any[]): Comment[] {
    if (Array.isArray(data) && data.length > 0 && data != null) {
      const comments: Comment[] = data.map((comment: any): Comment => {
        return {
          id: comment.data.id || "",
          author: comment.data.author || "",
          body: comment.data.body || "",
          score: comment.data.score || 0,
          children: [],
        };
      });
      return comments;
    } else {
      return [];
    }
  }

  public async getPost(subreddit: string, id: string) {
    return fetch(
      `https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/r/${subreddit}/${id}.json`
    )
      .then(async (response) => {
        if (response.ok) {
          console.log(response);
          console.log(
            `https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/r/${subreddit}/${id}.json`
          );

          return response.json();
        }
      })
      .then((res: any) => {
        console.log("HERE", res[0].data.children[0].data.is_video);

        const post: Post = {
          id: res[0].data.children[0].data.id || "",
          is_video: res[0].data.children[0].data.is_video || false,
          video_src:
            res[0].data.children[0].data.media?.reddit_video?.fallback_url ||
            "",
          title: res[0].data.children[0].data.title || "",
          author: res[0].data.children[0].data.author || "",
          content: res[0].data.children[0].data.selftext || "",
          thumbnail: res[0].data.children[0].data.thumbnail || "",
          subreddit: res[0].data.children[0].data.subreddit,
          created: res[0].data.children[0].data.created_utc || 0,
          score: res[0].data.children[0].data.score || 0,
          flair: res[0].data.children[0].data.link_flair_text || "",
          flair_background_color:
            res[0].data.children[0].data.link_flair_background_color || "",
          image_src: res[0].data.children[0].data.url || "",
        };

        let comments: Comment[] = [];
        comments =
          res[1].data.children.map((comment: any): Comment => {
            return {
              id: comment?.data?.id || "",
              author: comment?.data?.author || "",
              body: comment?.data?.body || "",
              score: comment?.data?.score || 0,
            };
          }) || [];

        comments.pop();
        const postDetail: PostDetail = { post: post, comments: comments };
        console.log("COMMENTS", postDetail.comments);

        return postDetail;
      });
  }
}

export const redditService = new RedditService();
