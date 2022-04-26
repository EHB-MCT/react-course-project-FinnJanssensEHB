import React from "react";
import Search from "./Search";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header box-shadow">
      <div className="logo-container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
          alt="Reddit Logo"
        />
      </div>
      <div className="search-container">
        <Search></Search>
      </div>
      <div className="header-nav">
        <p>
          <span aria-hidden="true" data-icon="&#xe910;"></span>&nbsp; Popular
        </p>
        <p>
          <span aria-hidden="true" data-icon="&#xe911;"></span>&nbsp; All
        </p>
        <p>
          <span aria-hidden="true" data-icon="&#xe912;"></span>&nbsp; Live
        </p>
      </div>
      <div className="notifications-container">
        <p>notifications</p>
      </div>
      <div className="profile-menu-container">
        <p>Profile</p>
      </div>
    </div>
  );
}
