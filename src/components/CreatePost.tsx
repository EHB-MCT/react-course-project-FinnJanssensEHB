import React from "react";
import "./CreatePost.scss";

export default function CreatePost() {
  return (
    <div className="createPost box-shadow">
      <img src="./profile-picture.jpg" alt="" />
      <div className="createPostInput">
        <span
          aria-hidden="true"
          data-icon="&#xe914;"
          className="plus-icon"
        ></span>
        <input type="text" name="" id="" placeholder="Create Post" />
      </div>
      <div className="createPostActionsContainer">
        <span aria-hidden="true" data-icon="&#xe90a;"></span>
        <span aria-hidden="true" data-icon="&#xe90b;"></span>
      </div>
    </div>
  );
}
