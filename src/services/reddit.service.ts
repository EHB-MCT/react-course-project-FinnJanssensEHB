import React from "react";

class RedditService {
  private readonly BASE_URL =
    "https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/.json";

  public async getFrontPage() {
    return fetch(this.BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch", data.data.children);

        return data.data.children;
      })
      .catch(function (error) {
        console.log("error", error);

        return error;
      });
  }

  public async getPost(subreddit: string, id: string) {
    return fetch(
      `https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/r/${subreddit}/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch", data);

        return data;
      })
      .catch(function (error) {
        console.log("error", error);

        return error;
      });
  }
}

export const redditService = new RedditService();
