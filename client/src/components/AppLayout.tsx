import { Link, useLocation } from "react-router-dom";
import "../styles/AppLayout.css";
import { useUser } from "@clerk/clerk-react";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const location = useLocation();
  const name = user?.firstName ?? " " + " " + user?.lastName ?? "";
  const currentDate = new Date();

  const isActiveHome = location.pathname === "/";
  const isActiveSearch =
    location.pathname === "/search" || location.pathname.startsWith("/book");
  const isActiveProgress = location.pathname === "/progress";
  const isActiveProfile = location.pathname === "/profile";
  console.log(location.pathname);

  return (
    <div>
      <header>
        <div id="date">{currentDate.toDateString()}</div>
        <div id="account">
          <div
            id="profile-pic"
            style={{ backgroundImage: `url(${user?.profileImageUrl})` }}
          ></div>
          <div id="profile-name">{name}</div>
        </div>
      </header>
      <div id="sidebar">
        <div id="Selection" className={isActiveHome ? "active" : ""}>
          <Link to="/" id="Link">
            <span>
              <i className="gg-home"></i>
            </span>
          </Link>
        </div>
        <div id="Selection" className={isActiveSearch ? "active" : ""}>
          <Link to="/search" id="Link">
            <span>
              <i className="gg-search"></i>
            </span>
          </Link>
        </div>
        <div id="Selection" className={isActiveProgress ? "active" : ""}>
          <Link to="/progress" id="Link">
            <span>
              <i className="gg-open-collective"></i>
            </span>
          </Link>
        </div>
        <div id="Selection" className={isActiveProfile ? "active" : ""}>
          <Link to="/profile" id="Link">
            <span>
              <i className="gg-user"></i>
            </span>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
