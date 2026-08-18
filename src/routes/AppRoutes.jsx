
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import LandingPage from "../pages/LandingPage";
import Explore from "../pages/Explore";
import ExplorePostDetails from "../pages/ExplorePostDetails";

import Community from "../pages/Community";
import CommunityDetails from "../pages/CommunityDetails";

import Notifications from "../pages/Notifications";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";

import Login from "../pages/Login";
import Register from "../pages/Register";

import ProtectedRoute from "../components/ProtectedRoute";


function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* =================================
                    LOGIN
                    No Navbar
                ================================= */}

                <Route
                    path="/"
                    element={<Login />}
                />


                {/* =================================
                    REGISTER
                    No Navbar
                ================================= */}

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* =================================
                    HOME
                    Protected
                ================================= */}

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <LandingPage />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    EXPLORE
                    Protected
                ================================= */}

                <Route
                    path="/explore"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Explore />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    EXPLORE POST DETAILS
                    Example:
                    /explore/post/1
                    /explore/post/2
                ================================= */}

                <Route
                    path="/explore/post/:id"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <ExplorePostDetails />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    COMMUNITY
                    Protected
                ================================= */}

                <Route
                    path="/community"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Community />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    COMMUNITY DETAILS
                    Example:
                    /community/1
                    /community/2
                ================================= */}

                <Route
                    path="/community/:id"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <CommunityDetails />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    NOTIFICATIONS
                    Protected
                ================================= */}

                <Route
                    path="/notifications"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Notifications />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    MESSAGES
                    Protected
                ================================= */}

                <Route
                    path="/messages"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Messages />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    PROFILE
                    Protected
                ================================= */}

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Profile />
                        </ProtectedRoute>
                    }
                />


                {/* =================================
                    UNKNOWN URL
                    Redirect to Login
                ================================= */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}


export default AppRoutes;
