
import { useState } from "react";

import {
    FaSearch,
    FaHeart,
    FaComment,
    FaUserPlus,
    FaUserCheck,
    FaFire,
    FaCode,
    FaMusic,
    FaCamera,
    FaGamepad,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../styles/Explore.css";

function Explore() {

    // =========================
    // NAVIGATION
    // =========================

    const navigate = useNavigate();


    // =========================
    // SEARCH
    // =========================

    const [search, setSearch] = useState("");


    // =========================
    // ACTIVE CATEGORY
    // =========================

    const [activeCategory, setActiveCategory] =
        useState("Trending");


    // =========================
    // FOLLOWING USERS
    // =========================

    const [followingUsers, setFollowingUsers] =
        useState([]);


    // =========================
    // CATEGORIES
    // =========================

    const categories = [
        {
            name: "Trending",
            icon: <FaFire />,
        },
        {
            name: "Technology",
            icon: <FaCode />,
        },
        {
            name: "Music",
            icon: <FaMusic />,
        },
        {
            name: "Photography",
            icon: <FaCamera />,
        },
        {
            name: "Gaming",
            icon: <FaGamepad />,
        },
    ];


    // =========================
    // TRENDING POSTS
    // =========================

    const posts = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            title: "The Future of Technology",
            description:
                "Exploring the latest innovations shaping our digital world.",
            likes: 245,
            comments: 32,
            category: "Technology",
            author: "Rahul Kumar",
            username: "@rahulkumar",
        },

        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
            title: "Music & Creative Expression",
            description:
                "Discover how music connects creativity and emotions.",
            likes: 189,
            comments: 21,
            category: "Music",
            author: "Priya Sharma",
            username: "@priyasharma",
        },

        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
            title: "Photography Inspiration",
            description:
                "Creative photography ideas from talented creators.",
            likes: 312,
            comments: 45,
            category: "Photography",
            author: "Arjun Reddy",
            username: "@arjunreddy",
        },

        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
            title: "Gaming Community",
            description:
                "Connect with gamers and discover new experiences.",
            likes: 276,
            comments: 38,
            category: "Gaming",
            author: "Sneha Rao",
            username: "@sneharao",
        },

        {
            id: 5,
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
            title: "Building Better Workspaces",
            description:
                "Modern workspace ideas for productivity and creativity.",
            likes: 156,
            comments: 17,
            category: "Technology",
            author: "Rahul Kumar",
            username: "@rahulkumar",
        },

        {
            id: 6,
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
            title: "Teamwork & Collaboration",
            description:
                "Great ideas happen when people work together.",
            likes: 203,
            comments: 28,
            category: "Trending",
            author: "Priya Sharma",
            username: "@priyasharma",
        },
    ];


    // =========================
    // USERS
    // =========================

    const users = [
        {
            id: 1,
            name: "Rahul Kumar",
            username: "@rahulkumar",
            avatar: "RK",
            profession: "Software Developer",
            followers: "2.8K",
        },

        {
            id: 2,
            name: "Priya Sharma",
            username: "@priyasharma",
            avatar: "PS",
            profession: "UI/UX Designer",
            followers: "3.4K",
        },

        {
            id: 3,
            name: "Arjun Reddy",
            username: "@arjunreddy",
            avatar: "AR",
            profession: "Photographer",
            followers: "1.9K",
        },

        {
            id: 4,
            name: "Sneha Rao",
            username: "@sneharao",
            avatar: "SR",
            profession: "Content Creator",
            followers: "4.1K",
        },
    ];


    // =========================
    // CATEGORY CHANGE
    // =========================

    const handleCategoryChange = (category) => {

        setActiveCategory(category);
        setSearch("");
    };


    // =========================
    // FOLLOW / UNFOLLOW
    // =========================

    const handleFollow = (userId) => {

        setFollowingUsers((previous) => {

            if (previous.includes(userId)) {

                return previous.filter(
                    (id) => id !== userId
                );

            }

            return [
                ...previous,
                userId,
            ];
        });
    };


    // =========================
    // OPEN POST DETAILS
    // =========================

    const handleViewPost = (postId) => {

        navigate(`/explore/post/${postId}`);
    };


    // =========================
    // FILTER POSTS
    // =========================

    const filteredPosts = posts.filter((post) => {

        const searchText =
            search.toLowerCase().trim();

        const matchesSearch =
            post.title
                .toLowerCase()
                .includes(searchText) ||

            post.description
                .toLowerCase()
                .includes(searchText) ||

            post.category
                .toLowerCase()
                .includes(searchText) ||

            post.author
                .toLowerCase()
                .includes(searchText);

        const matchesCategory =
            activeCategory === "Trending"
                ? true
                : post.category === activeCategory;

        return matchesSearch && matchesCategory;
    });


    // =========================
    // FILTER USERS
    // =========================

    const filteredUsers = users.filter((user) => {

        const searchText =
            search.toLowerCase().trim();

        return (
            user.name
                .toLowerCase()
                .includes(searchText) ||

            user.username
                .toLowerCase()
                .includes(searchText) ||

            user.profession
                .toLowerCase()
                .includes(searchText)
        );
    });


    // =========================
    // RENDER
    // =========================

    return (

        <div className="explore-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="explore-header">

                <div>

                    <p className="explore-small-title">
                        DISCOVER • CONNECT • INSPIRE
                    </p>

                    <h1>
                        Explore
                        <span> SocialConnect</span>
                    </h1>

                    <p className="explore-description">
                        Discover trending content,
                        connect with inspiring people,
                        and explore communities that
                        match your interests.
                    </p>

                </div>


                {/* SEARCH */}

                <div className="explore-search">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search people, posts or interests..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>


            {/* =========================
                CATEGORIES
            ========================= */}

            <section className="explore-section">

                <div className="section-title">

                    <div>

                        <FaFire />

                        <h2>
                            Explore Categories
                        </h2>

                    </div>

                    <span>
                        Find your interests
                    </span>

                </div>


                <div className="explore-categories">

                    {categories.map((category) => (

                        <button
                            key={category.name}
                            type="button"
                            className={`category-button ${
                                activeCategory === category.name
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                handleCategoryChange(
                                    category.name
                                )
                            }
                        >

                            {category.icon}

                            {category.name}

                        </button>

                    ))}

                </div>

            </section>


            {/* =========================
                TRENDING POSTS
            ========================= */}

            <section className="explore-section">

                <div className="section-title">

                    <div>

                        <FaFire />

                        <h2>
                            Trending Posts
                        </h2>

                    </div>

                    <span>
                        {filteredPosts.length}{" "}
                        {filteredPosts.length === 1
                            ? "post"
                            : "posts"}
                    </span>

                </div>


                {filteredPosts.length > 0 ? (

                    <div className="explore-posts-grid">

                        {filteredPosts.map((post) => (

                            <article
                                className="explore-post-card"
                                key={post.id}
                                onClick={() =>
                                    handleViewPost(post.id)
                                }
                                role="button"
                                tabIndex="0"
                                onKeyDown={(e) => {

                                    if (
                                        e.key === "Enter" ||
                                        e.key === " "
                                    ) {
                                        handleViewPost(post.id);
                                    }

                                }}
                            >

                                {/* IMAGE */}

                                <div className="explore-post-image">

                                    <img
                                        src={post.image}
                                        alt={post.title}
                                    />

                                    <span className="post-category">
                                        {post.category}
                                    </span>

                                </div>


                                {/* CONTENT */}

                                <div className="explore-post-content">

                                    <div className="post-author">

                                        <div className="post-author-avatar">
                                            {post.author
                                                .split(" ")
                                                .map(
                                                    (name) =>
                                                        name[0]
                                                )
                                                .join("")}
                                        </div>

                                        <div>

                                            <strong>
                                                {post.author}
                                            </strong>

                                            <small>
                                                {post.username}
                                            </small>

                                        </div>

                                    </div>


                                    <h3>
                                        {post.title}
                                    </h3>

                                    <p>
                                        {post.description}
                                    </p>


                                    <div className="post-footer">

                                        <div className="post-stats">

                                            <span>
                                                <FaHeart />
                                                {post.likes}
                                            </span>

                                            <span>
                                                <FaComment />
                                                {post.comments}
                                            </span>

                                        </div>


                                        <button
                                            className="post-view-button"
                                            type="button"
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                handleViewPost(
                                                    post.id
                                                );

                                            }}
                                        >
                                            View
                                            <FaArrowRight />
                                        </button>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                ) : (

                    <div className="no-results">

                        <h3>
                            No posts found
                        </h3>

                        <p>
                            Try searching for another
                            topic or category.
                        </p>

                    </div>

                )}

            </section>


            {/* =========================
                PEOPLE YOU MAY KNOW
            ========================= */}

            <section className="explore-section">

                <div className="section-title">

                    <div>

                        <FaUserPlus />

                        <h2>
                            People You May Know
                        </h2>

                    </div>

                    <span>
                        {filteredUsers.length}{" "}
                        {filteredUsers.length === 1
                            ? "person"
                            : "people"}
                    </span>

                </div>


                {filteredUsers.length > 0 ? (

                    <div className="users-grid">

                        {filteredUsers.map((user) => {

                            const isFollowing =
                                followingUsers.includes(
                                    user.id
                                );

                            return (

                                <article
                                    className="user-card"
                                    key={user.id}
                                >

                                    <div className="user-avatar">
                                        {user.avatar}
                                    </div>


                                    <div className="user-info">

                                        <div className="user-name">

                                            <h3>
                                                {user.name}
                                            </h3>

                                            <FaCheckCircle />

                                        </div>

                                        <p>
                                            {user.username}
                                        </p>

                                        <span>
                                            {user.profession}
                                        </span>

                                        <small>
                                            {user.followers} followers
                                        </small>

                                    </div>


                                    <button
                                        className={`follow-button ${
                                            isFollowing
                                                ? "following"
                                                : ""
                                        }`}
                                        type="button"
                                        onClick={() =>
                                            handleFollow(
                                                user.id
                                            )
                                        }
                                    >

                                        {isFollowing ? (
                                            <>
                                                <FaUserCheck />
                                                Following
                                            </>
                                        ) : (
                                            <>
                                                <FaUserPlus />
                                                Follow
                                            </>
                                        )}

                                    </button>

                                </article>

                            );

                        })}

                    </div>

                ) : (

                    <div className="no-results">

                        <h3>
                            No people found
                        </h3>

                        <p>
                            Try searching for another
                            person or profession.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
}

export default Explore;
