import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { redditService } from "./services/reddit.service";

function App() {
  redditService.getFrontPage();
  return <h1>Hello world</h1>;
}

export default App;
