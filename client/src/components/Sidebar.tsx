import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function AppLayout() {
  const isActiveHome = location.pathname === "/";
  const isActiveSearch = location.pathname === "/search";
  const isActiveProgress = location.pathname === "/progress";
  const isActiveProfile = location.pathname === "/profile";

  return (
    <div id="sidebar">
      <div id="Home" className={isActiveHome ? "active" : ""}>
        <Link to="/" id="Link">
          <span>
            <i className="gg-home"></i>
          </span>
        </Link>
      </div>
      <div id="Search" className={isActiveSearch ? "active" : ""}>
        <Link to="/search" id="Link">
          <span>
            <i className="gg-search"></i>
          </span>
        </Link>
      </div>
      <div id="Progress" className={isActiveProgress ? "active" : ""}>
        <Link to="/progress" id="Link">
          <span>
            <i className="gg-open-collective"></i>
          </span>
        </Link>
      </div>
      <div id="Profile" className={isActiveProfile ? "active" : ""}>
        <Link to="/profile" id="Link">
          <span>
            <i className="gg-user"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AppLayout;
