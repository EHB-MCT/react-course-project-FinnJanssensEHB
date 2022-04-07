import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { redditService } from "./services/reddit.service";

function App() {
  useEffect(() => {
    redditService.getFrontPage().then((posts) => setPosts(posts));
  }, []);

  let [posts, setPosts] = useState([]);

  function createMarkup(s: string) {
    return { __html: s };
  }

  return (
    <>
      {posts.map((post: any) => {
        return <div dangerouslySetInnerHTML={createMarkup(post.content)} />;
      })}
    </>
  );
}

export default App;
