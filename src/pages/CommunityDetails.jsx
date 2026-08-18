
import { useState } from "react";

import {
    FaArrowLeft,
    FaUsers,
    FaUserPlus,
    FaCheck,
    FaHeart,
    FaRegHeart,
    FaComment,
    FaShare,
    FaEllipsisH,
    FaFire,
    FaCalendarAlt,
    FaGlobe,
    FaCode,
    FaCamera,
    FaGamepad,
    FaMusic,
    FaBook,
    FaPlane,
    FaPaperPlane,
    FaLink,
    FaRocket
} from "react-icons/fa";

import {
    Link,
    useParams
} from "react-router-dom";

import "../styles/CommunityDetails.css";


function CommunityDetails() {

    // =========================================
    // GET COMMUNITY ID FROM URL
    // =========================================

    const { id } = useParams();


    // =========================================
    // STATES
    // =========================================

    const [joined, setJoined] = useState(false);

    const [likedPosts, setLikedPosts] = useState([]);

    const [commentInputs, setCommentInputs] = useState({});

    const [comments, setComments] = useState({
        1: [
            "This is a great idea!",
            "I am also building something similar."
        ],

        2: [
            "Coursera is a good option for beginners."
        ],

        3: [
            "I personally prefer Python for AI."
        ]
    });


    // =========================================
    // COMMUNITY DATA
    // =========================================

    const communities = {

        1: {
            name: "AI & Machine Learning Hub",
            category: "Technology",

            description:
                "A community for AI enthusiasts to learn machine learning, discuss new technologies, share projects and exchange ideas.",

            members: "12.8K",
            posts: "2.4K",
            online: "1.2K",

            created: "January 2026",

            icon: <FaCode />,
            iconClass: "technology"
        },

        2: {
            name: "Photography Lovers",
            category: "Photography",

            description:
                "Share your photography, discover creative ideas, improve your skills and connect with photographers around the world.",

            members: "98K",
            posts: "8.7K",
            online: "3.4K",

            created: "December 2025",

            icon: <FaCamera />,
            iconClass: "photography"
        },

        3: {
            name: "Gaming Arena",
            category: "Gaming",

            description:
                "Connect with gamers, discuss your favorite games, share gaming tips and discover new gaming experiences.",

            members: "87K",
            posts: "6.2K",
            online: "5.1K",

            created: "November 2025",

            icon: <FaGamepad />,
            iconClass: "gaming"
        },

        4: {
            name: "Music World",
            category: "Music",

            description:
                "Discover new artists, share your favorite songs and connect with people who love music.",

            members: "76K",
            posts: "5.8K",
            online: "2.7K",

            created: "October 2025",

            icon: <FaMusic />,
            iconClass: "music"
        },

        5: {
            name: "Book Lovers",
            category: "Books",

            description:
                "Discuss books, authors and stories while discovering your next favorite book.",

            members: "64K",
            posts: "4.5K",
            online: "1.8K",

            created: "September 2025",

            icon: <FaBook />,
            iconClass: "books"
        },

        6: {
            name: "Travel Explorers",
            category: "Travel",

            description:
                "Share travel experiences, discover beautiful destinations and connect with fellow travelers.",

            members: "59K",
            posts: "3.9K",
            online: "1.6K",

            created: "August 2025",

            icon: <FaPlane />,
            iconClass: "travel"
        }

    };


    // =========================================
    // GET CURRENT COMMUNITY
    // =========================================

    const community =
        communities[id] || communities[1];


    // =========================================
    // POSTS
    // =========================================

    const posts = [

        {
            id: 1,

            name: "Ananya Sharma",

            username: "@ananyasharma",

            time: "2 hours ago",

            avatar: "AS",

            title:
                "What are you building with AI?",

            content:
                "I have started working on a healthcare recommendation system using machine learning. What AI projects are you currently building?",

            likes: 248
        },

        {
            id: 2,

            name: "Rahul Kumar",

            username: "@rahulkumar",

            time: "5 hours ago",

            avatar: "RK",

            title:
                "Best resources to learn Machine Learning",

            content:
                "I am looking for beginner-friendly resources to learn Machine Learning. Please share your favorite courses, books or YouTube channels.",

            likes: 156
        },

        {
            id: 3,

            name: "Priya Reddy",

            username: "@priyareddy",

            time: "Yesterday",

            avatar: "PR",

            title:
                "Python or Java for AI?",

            content:
                "Which programming language do you prefer for AI and Machine Learning projects? I would love to hear your experiences.",

            likes: 94
        }

    ];


    // =========================================
    // JOIN COMMUNITY
    // =========================================

    const handleJoin = () => {

        setJoined((previous) => !previous);

    };


    // =========================================
    // LIKE POST
    // =========================================

    const handleLike = (postId) => {

        setLikedPosts((previous) => {

            if (previous.includes(postId)) {

                return previous.filter(
                    (id) => id !== postId
                );

            }

            return [
                ...previous,
                postId
            ];

        });

    };


    // =========================================
    // COMMENT INPUT CHANGE
    // =========================================

    const handleCommentChange = (
        postId,
        value
    ) => {

        setCommentInputs((previous) => ({
            ...previous,
            [postId]: value
        }));

    };


    // =========================================
    // ADD COMMENT
    // =========================================

    const handleComment = (postId) => {

        const text =
            commentInputs[postId]?.trim();

        if (!text) {
            return;
        }


        setComments((previous) => ({

            ...previous,

            [postId]: [
                ...(previous[postId] || []),
                text
            ]

        }));


        setCommentInputs((previous) => ({

            ...previous,

            [postId]: ""

        }));

    };


    // =========================================
    // SHARE COMMUNITY
    // =========================================

    const handleShare = async () => {

        const shareUrl =
            window.location.href;


        try {

            if (
                navigator.share
            ) {

                await navigator.share({

                    title:
                        community.name,

                    text:
                        `Join ${community.name} community!`,

                    url:
                        shareUrl

                });

            } else {

                await navigator.clipboard.writeText(
                    shareUrl
                );

                alert(
                    "Community link copied!"
                );

            }

        } catch (error) {

            console.log(
                "Share cancelled"
            );

        }

    };


    // =========================================
    // SHARE POST
    // =========================================

    const handleSharePost = async (post) => {

        const shareText =
            `${post.title} - ${community.name}`;


        try {

            if (
                navigator.share
            ) {

                await navigator.share({

                    title:
                        post.title,

                    text:
                        shareText,

                    url:
                        window.location.href

                });

            } else {

                await navigator.clipboard.writeText(
                    `${shareText}\n${window.location.href}`
                );

                alert(
                    "Post link copied!"
                );

            }

        } catch (error) {

            console.log(
                "Share cancelled"
            );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <main className="community-details-page">


            {/* =====================================
                BACK
            ===================================== */}

            <div className="community-back-container">

                <Link
                    to="/community"
                    className="community-back"
                >

                    <FaArrowLeft />

                    Back to Communities

                </Link>

            </div>


            {/* =====================================
                HERO
            ===================================== */}

            <section className="community-details-hero">


                <div
                    className={`community-details-icon ${community.iconClass}`}
                >
                    {community.icon}
                </div>


                <div className="community-details-main">


                    <div className="community-details-category">

                        <FaFire />

                        Trending Community

                    </div>


                    <h1>
                        {community.name}
                    </h1>


                    <p className="community-details-description">

                        {community.description}

                    </p>


                    <div className="community-details-meta">


                        <span>

                            <FaUsers />

                            {community.members}
                            {" "}members

                        </span>


                        <span>

                            <FaGlobe />

                            Public Community

                        </span>


                        <span>

                            <FaCalendarAlt />

                            Created {community.created}

                        </span>


                    </div>

                </div>


                <div className="community-hero-actions">


                    <button
                        type="button"
                        className={`details-join-button ${
                            joined ? "joined" : ""
                        }`}
                        onClick={handleJoin}
                    >

                        {joined ? (

                            <>
                                <FaCheck />
                                Joined
                            </>

                        ) : (

                            <>
                                <FaUserPlus />
                                Join Community
                            </>

                        )}

                    </button>


                    <button
                        type="button"
                        className="details-share-button"
                        onClick={handleShare}
                    >

                        <FaShare />

                        Share

                    </button>

                </div>

            </section>


            {/* =====================================
                STATS
            ===================================== */}

            <section className="community-stats">


                <div className="community-stat-card">

                    <div className="stat-icon">
                        <FaUsers />
                    </div>

                    <div>

                        <strong>
                            {community.members}
                        </strong>

                        <span>
                            Members
                        </span>

                    </div>

                </div>


                <div className="community-stat-card">

                    <div className="stat-icon">
                        <FaGlobe />
                    </div>

                    <div>

                        <strong>
                            {community.online}
                        </strong>

                        <span>
                            Online Now
                        </span>

                    </div>

                </div>


                <div className="community-stat-card">

                    <div className="stat-icon">
                        <FaComment />
                    </div>

                    <div>

                        <strong>
                            {community.posts}
                        </strong>

                        <span>
                            Discussions
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================
                MAIN LAYOUT
            ===================================== */}

            <div className="community-details-layout">


                {/* =================================
                    FEED
                ================================= */}

                <section className="community-feed">


                    <div className="feed-header">

                        <div>

                            <span>
                                COMMUNITY DISCUSSION
                            </span>

                            <h2>
                                Recent Posts
                            </h2>

                        </div>


                        <button
                            type="button"
                            className="sort-button"
                        >

                            Latest

                            <FaEllipsisH />

                        </button>

                    </div>


                    {/* =================================
                        POSTS
                    ================================= */}

                    {posts.map((post) => {


                        const isLiked =
                            likedPosts.includes(
                                post.id
                            );


                        const postComments =
                            comments[post.id] || [];


                        return (

                            <article
                                className="community-post"
                                key={post.id}
                            >


                                {/* POST HEADER */}

                                <div className="post-header">


                                    <div className="post-user">


                                        <div className="post-avatar">
                                            {post.avatar}
                                        </div>


                                        <div>

                                            <h3>
                                                {post.name}
                                            </h3>

                                            <p>

                                                {post.username}

                                                <span>
                                                    •
                                                </span>

                                                {post.time}

                                            </p>

                                        </div>

                                    </div>


                                    <button
                                        type="button"
                                        className="post-menu"
                                    >

                                        <FaEllipsisH />

                                    </button>

                                </div>


                                {/* POST CONTENT */}

                                <div className="post-content">

                                    <h4>
                                        {post.title}
                                    </h4>

                                    <p>
                                        {post.content}
                                    </p>

                                </div>


                                {/* POST ACTIONS */}

                                <div className="post-actions">


                                    <button
                                        type="button"
                                        className={
                                            isLiked
                                                ? "liked"
                                                : ""
                                        }
                                        onClick={() =>
                                            handleLike(
                                                post.id
                                            )
                                        }
                                    >

                                        {isLiked ? (
                                            <FaHeart />
                                        ) : (
                                            <FaRegHeart />
                                        )}

                                        <span>

                                            {post.likes +
                                                (
                                                    isLiked
                                                        ? 1
                                                        : 0
                                                )}

                                        </span>

                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    `comment-${post.id}`
                                                )
                                                ?.focus()
                                        }
                                    >

                                        <FaComment />

                                        <span>
                                            {postComments.length}
                                        </span>

                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSharePost(
                                                post
                                            )
                                        }
                                    >

                                        <FaShare />

                                        <span>
                                            Share
                                        </span>

                                    </button>

                                </div>


                                {/* COMMENTS */}

                                {postComments.length > 0 && (

                                    <div className="comments-list">

                                        {postComments.map(
                                            (
                                                comment,
                                                index
                                            ) => (

                                                <div
                                                    className="comment-item"
                                                    key={index}
                                                >

                                                    <div className="comment-avatar">
                                                        U
                                                    </div>

                                                    <div className="comment-content">

                                                        <strong>
                                                            You
                                                        </strong>

                                                        <p>
                                                            {comment}
                                                        </p>

                                                    </div>

                                                </div>

                                            )
                                        )}

                                    </div>

                                )}


                                {/* COMMENT INPUT */}

                                <div className="comment-box">


                                    <div className="comment-avatar">
                                        You
                                    </div>


                                    <input
                                        id={`comment-${post.id}`}
                                        type="text"
                                        placeholder="Write a comment..."
                                        value={
                                            commentInputs[
                                                post.id
                                            ] || ""
                                        }
                                        onChange={(e) =>
                                            handleCommentChange(
                                                post.id,
                                                e.target.value
                                            )
                                        }
                                        onKeyDown={(e) => {

                                            if (
                                                e.key === "Enter"
                                            ) {

                                                handleComment(
                                                    post.id
                                                );

                                            }

                                        }}
                                    />


                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleComment(
                                                post.id
                                            )
                                        }
                                    >

                                        <FaPaperPlane />

                                    </button>

                                </div>

                            </article>

                        );

                    })}

                </section>


                {/* =================================
                    SIDEBAR
                ================================= */}

                <aside className="community-sidebar">


                    {/* ABOUT */}

                    <div className="sidebar-card">


                        <div className="sidebar-title">

                            <h3>
                                About Community
                            </h3>

                        </div>


                        <p className="sidebar-description">

                            {community.description}

                        </p>


                        <div className="sidebar-info">


                            <div>

                                <FaUsers />

                                <span>

                                    {community.members}

                                    <small>
                                        Members
                                    </small>

                                </span>

                            </div>


                            <div>

                                <FaGlobe />

                                <span>

                                    Public

                                    <small>
                                        Community
                                    </small>

                                </span>

                            </div>


                            <div>

                                <FaCalendarAlt />

                                <span>

                                    {community.created}

                                    <small>
                                        Created
                                    </small>

                                </span>

                            </div>

                        </div>

                    </div>


                    {/* GUIDELINES */}

                    <div className="sidebar-card">


                        <div className="sidebar-title">

                            <h3>
                                Community Guidelines
                            </h3>

                        </div>


                        <ul className="guidelines">


                            <li>

                                <span>
                                    01
                                </span>

                                Be respectful to everyone.

                            </li>


                            <li>

                                <span>
                                    02
                                </span>

                                Share useful information.

                            </li>


                            <li>

                                <span>
                                    03
                                </span>

                                Avoid spam and promotion.

                            </li>


                            <li>

                                <span>
                                    04
                                </span>

                                Keep discussions constructive.

                            </li>

                        </ul>

                    </div>


                    {/* ACTIVE MEMBERS */}

                    <div className="sidebar-card">


                        <div className="sidebar-title">

                            <h3>
                                Active Members
                            </h3>

                            <span>
                                {community.online} online
                            </span>

                        </div>


                        <div className="active-members">


                            <div className="member-avatar">
                                AS
                                <i></i>
                            </div>


                            <div className="member-avatar">
                                RK
                                <i></i>
                            </div>


                            <div className="member-avatar">
                                PR
                                <i></i>
                            </div>


                            <div className="member-avatar">
                                VK
                                <i></i>
                            </div>


                            <div className="member-more">
                                +12
                            </div>

                        </div>

                    </div>


                    {/* SHARE COMMUNITY */}

                    <div className="sidebar-card sidebar-share-card">


                        <div className="sidebar-share-icon">
                            <FaRocket />
                        </div>


                        <h3>
                            Invite your friends
                        </h3>


                        <p>
                            Help this community grow by
                            inviting people who share the
                            same interests.
                        </p>


                        <button
                            type="button"
                            onClick={handleShare}
                        >

                            <FaLink />

                            Copy Community Link

                        </button>

                    </div>

                </aside>

            </div>

        </main>
    );
}


export default CommunityDetails;
