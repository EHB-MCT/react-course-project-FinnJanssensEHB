import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <>
      <div className="search">
        <span
          aria-hidden="true"
          data-icon="&#xe913;"
          className="search-icon"
        ></span>
        <input type="text" name="" id="" placeholder="       Search Reddit" />
      </div>
    </>
  );
}
