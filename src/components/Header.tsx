import React from "react";
import Search from "./Search";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div className="Header box-shadow">
      <div className="logo-container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
          alt="Reddit Logo"
          onClick={routeChange}
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
        <span aria-hidden="true" data-icon="&#xe90d;"></span>
      </div>
      <div className="profile-menu-container">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/user-circle.png"
          alt=""
        />
        <span aria-hidden="true" data-icon="&#xe908;"></span>
      </div>
    </div>
  );
}
