
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FaGlobe,
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

import "./Register.css";


function Register() {

    const navigate = useNavigate();

    // =========================
    // FORM STATE
    // =========================

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [error, setError] = useState("");


    // =========================
    // REGISTER
    // =========================

    const handleRegister = (e) => {

        e.preventDefault();

        setError("");


        // =========================
        // EMPTY FIELD VALIDATION
        // =========================

        if (
            username.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === ""
        ) {
            setError("Please fill all fields.");
            return;
        }


        // =========================
        // USERNAME VALIDATION
        // =========================

        const cleanUsername = username.trim();

        if (cleanUsername.length < 3) {
            setError(
                "Username must contain at least 3 characters."
            );
            return;
        }


        // =========================
        // EMAIL VALIDATION
        // =========================

        const cleanEmail = email.trim().toLowerCase();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(cleanEmail)) {
            setError("Please enter a valid email address.");
            return;
        }


        // =========================
        // PASSWORD VALIDATION
        // =========================

        if (password.length < 6) {
            setError(
                "Password must contain at least 6 characters."
            );
            return;
        }


        // =========================
        // CONFIRM PASSWORD
        // =========================

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }


        // =========================
        // CHECK EXISTING ACCOUNT
        // =========================

        const savedUser =
            localStorage.getItem("registeredUser");


        if (savedUser) {

            try {

                const existingUser =
                    JSON.parse(savedUser);


                if (
                    existingUser.username?.toLowerCase() ===
                    cleanUsername.toLowerCase()
                ) {

                    setError(
                        "Username already exists. Please login."
                    );

                    return;
                }


                if (
                    existingUser.email?.toLowerCase() ===
                    cleanEmail
                ) {

                    setError(
                        "Email already exists. Please login."
                    );

                    return;
                }

            } catch (error) {

                // Remove invalid stored data
                localStorage.removeItem("registeredUser");
            }
        }


        // =========================
        // CREATE USER
        // =========================

        const user = {

            username: cleanUsername,

            email: cleanEmail,

            password: password,
        };


        // =========================
        // SAVE USER
        // =========================

        localStorage.setItem(
            "registeredUser",
            JSON.stringify(user)
        );


        // =========================
        // CLEAR LOGIN DATA
        // =========================

        localStorage.removeItem("isLoggedIn");

        localStorage.removeItem("currentUser");


        // =========================
        // GO TO LOGIN
        // =========================

        navigate("/");

    };


    return (

        <div className="register-page">


            {/* =========================
                LEFT BRAND SECTION
            ========================= */}

            <div className="register-brand">

                <div className="register-brand-icon">
                    <FaGlobe />
                </div>


                <h1>
                    Social<span>Connect</span>
                </h1>


                <p>
                    Create your account and start
                    connecting with your community.
                </p>


                <div className="register-features">

                    <div>

                        <strong>
                            Connect
                        </strong>

                        <span>
                            Meet amazing people
                        </span>

                    </div>


                    <div>

                        <strong>
                            Share
                        </strong>

                        <span>
                            Share your thoughts
                        </span>

                    </div>


                    <div>

                        <strong>
                            Inspire
                        </strong>

                        <span>
                            Inspire your community
                        </span>

                    </div>

                </div>

            </div>


            {/* =========================
                RIGHT REGISTER SECTION
            ========================= */}

            <div className="register-container">

                <div className="register-card">


                    {/* =========================
                        HEADER
                    ========================= */}

                    <div className="register-header">

                        <h2>
                            Create Account
                        </h2>

                        <p>
                            Join SocialConnect today
                        </p>

                    </div>


                    {/* =========================
                        FORM
                    ========================= */}

                    <form onSubmit={handleRegister}>


                        {/* Username */}

                        <div className="register-form-group">

                            <label>
                                Username
                            </label>

                            <div className="register-input">

                                <FaUser />

                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        {/* Email */}

                        <div className="register-form-group">

                            <label>
                                Email
                            </label>

                            <div className="register-input">

                                <FaEnvelope />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        {/* Password */}

                        <div className="register-form-group">

                            <label>
                                Password
                            </label>

                            <div className="register-input">

                                <FaLock />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Create password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                />


                                <button
                                    type="button"
                                    className="register-password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
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


                        {/* Confirm Password */}

                        <div className="register-form-group">

                            <label>
                                Confirm Password
                            </label>

                            <div className="register-input">

                                <FaLock />

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                />


                                <button
                                    type="button"
                                    className="register-password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >

                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}

                                </button>

                            </div>

                        </div>


                        {/* Error */}

                        {error && (

                            <div className="register-error">
                                {error}
                            </div>

                        )}


                        {/* Register Button */}

                        <button
                            type="submit"
                            className="register-submit-button"
                        >
                            Create Account
                        </button>

                    </form>


                    {/* =========================
                        LOGIN LINK
                    ========================= */}

                    <div className="login-section">

                        <span>
                            Already have an account?
                        </span>

                        <Link to="/">
                            Login
                        </Link>

                    </div>

                </div>


                {/* Footer */}

                <p className="register-footer">
                    © 2026 SocialConnect. All rights reserved.
                </p>

            </div>

        </div>
    );
}


export default Register;
