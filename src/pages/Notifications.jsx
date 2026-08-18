
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaBell,
    FaHeart,
    FaComment,
    FaUserPlus,
    FaUserCheck,
    FaAt
} from "react-icons/fa";

import "./Notifications.css";

function Notifications() {

    const navigate = useNavigate();

    const [activeFilter, setActiveFilter] = useState("All");

    const [followingUsers, setFollowingUsers] = useState([]);

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            user: "Ananya",
            avatar: "A",
            type: "like",
            message: "liked your post",
            time: "2 minutes ago",
            unread: true,
            postId: 1
        },

        {
            id: 2,
            user: "Rahul",
            avatar: "R",
            type: "comment",
            message: "commented on your post",
            time: "15 minutes ago",
            unread: true,
            postId: 2
        },

        {
            id: 3,
            user: "Priya",
            avatar: "P",
            type: "follow",
            message: "started following you",
            time: "1 hour ago",
            unread: true,
            userId: 101
        },

        {
            id: 4,
            user: "Kiran",
            avatar: "K",
            type: "mention",
            message: "mentioned you in a post",
            time: "3 hours ago",
            unread: false,
            postId: 3
        },

        {
            id: 5,
            user: "Sneha",
            avatar: "S",
            type: "like",
            message: "liked your profile update",
            time: "5 hours ago",
            unread: false,
            postId: 4
        },

        {
            id: 6,
            user: "Arjun",
            avatar: "A",
            type: "comment",
            message: "commented on your photo",
            time: "Yesterday",
            unread: false,
            postId: 5
        },

        {
            id: 7,
            user: "Meghana",
            avatar: "M",
            type: "follow",
            message: "started following you",
            time: "Yesterday",
            unread: false,
            userId: 102
        }
    ]);


    /* =========================================
       FILTER NOTIFICATIONS
    ========================================= */

    const filteredNotifications =
        activeFilter === "All"
            ? notifications
            : notifications.filter(
                (notification) =>
                    notification.type ===
                    activeFilter.toLowerCase()
            );


    /* =========================================
       UNREAD COUNT
    ========================================= */

    const unreadCount = notifications.filter(
        (notification) => notification.unread
    ).length;


    /* =========================================
       MARK ALL AS READ
    ========================================= */

    const markAllAsRead = () => {

        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                unread: false
            }))
        );
    };


    /* =========================================
       MARK SINGLE NOTIFICATION AS READ
    ========================================= */

    const markAsRead = (notificationId) => {

        setNotifications(
            notifications.map((notification) =>
                notification.id === notificationId
                    ? {
                        ...notification,
                        unread: false
                    }
                    : notification
            )
        );
    };


    /* =========================================
       GET NOTIFICATION ICON
    ========================================= */

    const getNotificationIcon = (type) => {

        if (type === "like") {
            return <FaHeart />;
        }

        if (type === "comment") {
            return <FaComment />;
        }

        if (type === "follow") {
            return <FaUserPlus />;
        }

        if (type === "mention") {
            return <FaAt />;
        }

        return <FaBell />;
    };


    /* =========================================
       FOLLOW BACK
    ========================================= */

    const handleFollowBack = (notification) => {

        const userId = notification.userId;

        if (followingUsers.includes(userId)) {

            setFollowingUsers(
                followingUsers.filter(
                    (id) => id !== userId
                )
            );

        } else {

            setFollowingUsers([
                ...followingUsers,
                userId
            ]);
        }

        markAsRead(notification.id);
    };


    /* =========================================
       VIEW POST
    ========================================= */

    const handleViewPost = (notification) => {

        markAsRead(notification.id);

        if (notification.postId) {
            navigate(
                `/explore/post/${notification.postId}`
            );
        }
    };


    /* =========================================
       CLICK NOTIFICATION
    ========================================= */

    const handleNotificationClick = (notification) => {

        markAsRead(notification.id);

        if (
            notification.type !== "follow" &&
            notification.postId
        ) {
            navigate(
                `/explore/post/${notification.postId}`
            );
        }
    };


    return (

        <main className="notifications-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <div className="notifications-header">

                <div className="notifications-title">

                    <div className="notifications-title-icon">
                        <FaBell />
                    </div>

                    <div>

                        <h1>
                            Notifications
                        </h1>

                        <p>
                            Stay updated with your latest activity
                        </p>

                    </div>

                </div>


                <button
                    className="mark-read-button"
                    type="button"
                    onClick={markAllAsRead}
                >
                    Mark all as read
                </button>

            </div>


            {/* =========================================
                UNREAD COUNT
            ========================================= */}

            {unreadCount > 0 && (

                <div className="notification-count">

                    <FaBell />

                    <span>
                        {unreadCount} new{" "}
                        {unreadCount === 1
                            ? "notification"
                            : "notifications"}
                    </span>

                </div>

            )}


            {/* =========================================
                FILTERS
            ========================================= */}

            <div className="notification-filters">

                <button
                    type="button"
                    className={
                        activeFilter === "All"
                            ? "notification-filter active"
                            : "notification-filter"
                    }
                    onClick={() =>
                        setActiveFilter("All")
                    }
                >
                    All
                </button>


                <button
                    type="button"
                    className={
                        activeFilter === "Like"
                            ? "notification-filter active"
                            : "notification-filter"
                    }
                    onClick={() =>
                        setActiveFilter("Like")
                    }
                >
                    Likes
                </button>


                <button
                    type="button"
                    className={
                        activeFilter === "Comment"
                            ? "notification-filter active"
                            : "notification-filter"
                    }
                    onClick={() =>
                        setActiveFilter("Comment")
                    }
                >
                    Comments
                </button>


                <button
                    type="button"
                    className={
                        activeFilter === "Follow"
                            ? "notification-filter active"
                            : "notification-filter"
                    }
                    onClick={() =>
                        setActiveFilter("Follow")
                    }
                >
                    Follows
                </button>


                <button
                    type="button"
                    className={
                        activeFilter === "Mention"
                            ? "notification-filter active"
                            : "notification-filter"
                    }
                    onClick={() =>
                        setActiveFilter("Mention")
                    }
                >
                    Mentions
                </button>

            </div>


            {/* =========================================
                NOTIFICATION LIST
            ========================================= */}

            <div className="notifications-list">

                {filteredNotifications.length > 0 ? (

                    filteredNotifications.map(
                        (notification) => {

                            const isFollowing =
                                followingUsers.includes(
                                    notification.userId
                                );

                            return (

                                <div
                                    className={
                                        notification.unread
                                            ? "notification-card unread"
                                            : "notification-card"
                                    }
                                    key={notification.id}
                                    onClick={() =>
                                        handleNotificationClick(
                                            notification
                                        )
                                    }
                                >

                                    {/* Avatar */}

                                    <div className="notification-avatar">

                                        {notification.avatar}

                                    </div>


                                    {/* Notification Type */}

                                    <div
                                        className={`notification-type-icon ${notification.type}`}
                                    >
                                        {getNotificationIcon(
                                            notification.type
                                        )}
                                    </div>


                                    {/* Content */}

                                    <div className="notification-content">

                                        <p className="notification-message">

                                            <strong>
                                                {notification.user}
                                            </strong>{" "}

                                            {notification.message}

                                        </p>

                                        <span className="notification-time">
                                            {notification.time}
                                        </span>

                                    </div>


                                    {/* Unread */}

                                    {notification.unread && (

                                        <span className="unread-dot"></span>

                                    )}


                                    {/* =================================
                                        FOLLOW BACK
                                    ================================= */}

                                    {notification.type === "follow" && (

                                        <button
                                            type="button"
                                            className={
                                                isFollowing
                                                    ? "notification-action following-action"
                                                    : "notification-action"
                                            }
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                handleFollowBack(
                                                    notification
                                                );

                                            }}
                                        >

                                            {isFollowing ? (
                                                <>
                                                    <FaUserCheck />
                                                    Following
                                                </>
                                            ) : (
                                                <>
                                                    <FaUserPlus />
                                                    Follow Back
                                                </>
                                            )}

                                        </button>

                                    )}


                                    {/* =================================
                                        COMMENT
                                    ================================= */}

                                    {notification.type === "comment" && (

                                        <button
                                            type="button"
                                            className="notification-action"
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                handleViewPost(
                                                    notification
                                                );

                                            }}
                                        >
                                            <FaComment />
                                            View
                                        </button>

                                    )}


                                    {/* =================================
                                        LIKE
                                    ================================= */}

                                    {notification.type === "like" && (

                                        <button
                                            type="button"
                                            className="notification-action"
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                handleViewPost(
                                                    notification
                                                );

                                            }}
                                        >
                                            <FaHeart />
                                            View Post
                                        </button>

                                    )}


                                    {/* =================================
                                        MENTION
                                    ================================= */}

                                    {notification.type === "mention" && (

                                        <button
                                            type="button"
                                            className="notification-action"
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                handleViewPost(
                                                    notification
                                                );

                                            }}
                                        >
                                            <FaAt />
                                            View Post
                                        </button>

                                    )}

                                </div>

                            );
                        }

                    )

                ) : (

                    /* =========================================
                       EMPTY STATE
                    ========================================= */

                    <div className="notifications-empty">

                        <div className="notifications-empty-icon">
                            <FaBell />
                        </div>

                        <h3>
                            No notifications
                        </h3>

                        <p>
                            You don't have any notifications
                            in this category yet.
                        </p>

                    </div>

                )}

            </div>

        </main>
    );
}

export default Notifications;
