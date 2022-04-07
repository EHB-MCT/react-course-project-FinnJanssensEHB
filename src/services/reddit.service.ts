import React from "react";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";

class RedditService {
  private readonly BASE_URL =
    "https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/.rss";

  parser = new XMLParser();

  public async getFrontPage() {
    return fetch(this.BASE_URL)
      .then((response) => response.text())
      .then((str) => {
        let jObj = this.parser.parse(str);
        console.log(jObj.feed.entry);
        return jObj.feed.entry;
      });
  }
}

export const redditService = new RedditService();
