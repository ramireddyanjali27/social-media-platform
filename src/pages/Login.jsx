
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaGlobe,
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Check empty fields
    if (
      username.trim() === "" ||
      password.trim() === ""
    ) {
      setError("Please enter username and password.");
      return;
    }

    // =========================
    // GET REGISTERED USER
    // =========================

    const savedUser = localStorage.getItem("registeredUser");

    // No account found
    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );
      return;
    }

    // Convert JSON to object
    let user;

    try {
      user = JSON.parse(savedUser);
    } catch (error) {
      setError("Account data is invalid. Please register again.");
      return;
    }

    // =========================
    // CHECK LOGIN DETAILS
    // =========================

    if (
      username.trim() !== user.username ||
      password !== user.password
    ) {
      setError("Invalid username or password.");
      return;
    }

    // =========================
    // LOGIN SUCCESS
    // =========================

    localStorage.setItem("isLoggedIn", "true");

    // Store currently logged-in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: user.username,
        email: user.email || "",
      })
    );

    // Go to Home
    navigate("/home");
  };

  return (
    <div className="login-page">

      {/* =========================
          LEFT BRAND SECTION
      ========================= */}

      <div className="login-brand">

        <div className="login-brand-icon">
          <FaGlobe />
        </div>

        <h1>
          Social<span>Connect</span>
        </h1>

        <p>
          Connect with people, share your ideas,
          and build meaningful connections.
        </p>

        <div className="login-features">

          <div>
            <strong>Connect</strong>

            <span>
              Meet amazing people
            </span>
          </div>

          <div>
            <strong>Share</strong>

            <span>
              Share your thoughts
            </span>
          </div>

          <div>
            <strong>Inspire</strong>

            <span>
              Inspire your community
            </span>
          </div>

        </div>

      </div>

      {/* =========================
          RIGHT LOGIN SECTION
      ========================= */}

      <div className="login-container">

        <div className="login-card">

          {/* Header */}

          <div className="login-header">

            <h2>
              Welcome Back!
            </h2>

            <p>
              Login to continue to SocialConnect
            </p>

          </div>

          {/* Login Form */}

          <form onSubmit={handleLogin}>

            {/* Username */}

            <div className="login-form-group">

              <label>
                Username
              </label>

              <div className="login-input">

                <FaUser />

                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                />

              </div>

            </div>

            {/* Password */}

            <div className="login-form-group">

              <div className="password-label">

                <label>
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <div className="login-input">

                <FaLock />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* Error */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* Login Button */}

            <button
              type="submit"
              className="login-submit-button"
            >
              Login
            </button>

          </form>

          {/* Register */}

          <div className="register-section">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>

        {/* Footer */}

        <p className="login-footer">
          © 2026 SocialConnect. All rights reserved.
        </p>

      </div>

    </div>
  );
}

export default Login;
