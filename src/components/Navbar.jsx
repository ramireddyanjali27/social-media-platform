
import {
  FaGlobe,
  FaHome,
  FaSearch,
  FaUsers,
  FaBell,
  FaComments,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove login information
    localStorage.removeItem("isLoggedIn");

    // Go to Login page
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* =========================
          LOGO
      ========================= */}

      <Link to="/home" className="navbar-logo">

        <div className="logo-icon">
          <FaGlobe />
        </div>

        <div className="logo-content">
          <h2>
            Social<span>Connect</span>
          </h2>

          <p>
            Connect • Share • Inspire
          </p>
        </div>

      </Link>


      {/* =========================
          NAVIGATION
      ========================= */}

      <div className="navbar-menu">

        <Link to="/home" className="nav-link">
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/explore" className="nav-link">
          <FaSearch />
          <span>Explore</span>
        </Link>

        <Link to="/community" className="nav-link">
          <FaUsers />
          <span>Community</span>
        </Link>

        <Link
          to="/notifications"
          className="nav-link notification-link"
        >
          <FaBell />

          <span>
            Notifications
          </span>

          <small className="notification-badge">
            3
          </small>
        </Link>

        <Link to="/messages" className="nav-link">
          <FaComments />
          <span>Messages</span>
        </Link>

        <Link to="/profile" className="nav-link">
          <FaUser />
          <span>Profile</span>
        </Link>

      </div>


      {/* =========================
          LOGOUT
          Only this button changed
      ========================= */}

      <div className="navbar-actions">

        <button
          type="button"
          className="nav-link logout-button"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
