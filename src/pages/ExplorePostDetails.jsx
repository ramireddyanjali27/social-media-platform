import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
    FaArrowLeft,
    FaHeart,
    FaRegHeart,
    FaComment,
    FaShare,
    FaPaperPlane,
    FaCheckCircle,
    FaFire
} from "react-icons/fa";

import "../styles/ExplorePostDetails.css";

function ExplorePostDetails() {

    const { id } = useParams();

    // =========================
    // LIKE
    // =========================

    const [liked, setLiked] = useState(false);

    // =========================
    // COMMENT
    // =========================

    const [commentText, setCommentText] = useState("");

    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Priya Sharma",
            username: "@priyasharma",
            avatar: "PS",
            text: "This is really interesting! Thanks for sharing."
        },
        {
            id: 2,
            name: "Rahul Kumar",
            username: "@rahulkumar",
            avatar: "RK",
            text: "Great post. I completely agree with this."
        }
    ]);

    // =========================
    // POSTS DATA
    // =========================

    const posts = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
            title: "The Future of Technology",
            description:
                "Exploring the latest innovations shaping our digital world.",
            content:
                "Technology is changing the way we live, work and communicate. Artificial intelligence, cloud computing, robotics and other emerging technologies are creating new opportunities for businesses and individuals.",
            likes: 245,
            comments: 32,
            category: "Technology",
            author: "Rahul Kumar",
            username: "@rahulkumar",
            avatar: "RK"
        },

        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
            title: "Music & Creative Expression",
            description:
                "Discover how music connects creativity and emotions.",
            content:
                "Music is one of the most powerful forms of creative expression. It connects people, creates memories and allows us to communicate emotions without words.",
            likes: 189,
            comments: 21,
            category: "Music",
            author: "Priya Sharma",
            username: "@priyasharma",
            avatar: "PS"
        },

        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
            title: "Photography Inspiration",
            description:
                "Creative photography ideas from talented creators.",
            content:
                "Photography allows us to capture moments and tell stories through images. Experimenting with lighting, composition and perspective can make your photographs more powerful.",
            likes: 312,
            comments: 45,
            category: "Photography",
            author: "Arjun Reddy",
            username: "@arjunreddy",
            avatar: "AR"
        },

        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
            title: "Gaming Community",
            description:
                "Connect with gamers and discover new experiences.",
            content:
                "Gaming communities bring players together to share experiences, strategies and exciting moments. Discover new games and connect with people who share your passion.",
            likes: 276,
            comments: 38,
            category: "Gaming",
            author: "Sneha Rao",
            username: "@sneharao",
            avatar: "SR"
        },

        {
            id: 5,
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
            title: "Building Better Workspaces",
            description:
                "Modern workspace ideas for productivity and creativity.",
            content:
                "A good workspace can improve productivity and creativity. Modern workspace design focuses on comfort, collaboration, natural lighting and technology.",
            likes: 156,
            comments: 17,
            category: "Technology",
            author: "Rahul Kumar",
            username: "@rahulkumar",
            avatar: "RK"
        },

        {
            id: 6,
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
            title: "Teamwork & Collaboration",
            description:
                "Great ideas happen when people work together.",
            content:
                "Successful teams are built through communication, trust and collaboration. When people share their knowledge and ideas, they can create better results together.",
            likes: 203,
            comments: 28,
            category: "Trending",
            author: "Arjun Reddy",
            username: "@arjunreddy",
            avatar: "AR"
        }
    ];

    // =========================
    // FIND SELECTED POST
    // =========================

    const post =
        posts.find(
            (item) => item.id === Number(id)
        ) || posts[0];

    // =========================
    // LIKE POST
    // =========================

    const handleLike = () => {
        setLiked(!liked);
    };

    // =========================
    // ADD COMMENT
    // =========================

    const handleComment = () => {

        if (!commentText.trim()) {
            return;
        }

        const newComment = {
            id: Date.now(),
            name: "You",
            username: "@you",
            avatar: "YO",
            text: commentText.trim()
        };

        setComments([
            ...comments,
            newComment
        ]);

        setCommentText("");
    };

    // =========================
    // SHARE POST
    // =========================

    const handleShare = async () => {

        const shareData = {
            title: post.title,
            text: post.description,
            url: window.location.href
        };

        try {

            if (navigator.share) {

                await navigator.share(
                    shareData
                );

            } else {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                alert(
                    "Post link copied to clipboard!"
                );
            }

        } catch (error) {

            console.log(
                "Share cancelled"
            );
        }
    };

    return (

        <main className="explore-post-details-page">

            {/* =========================
                BACK BUTTON
            ========================= */}

            <div className="explore-details-top">

                <Link
                    to="/explore"
                    className="explore-back-button"
                >
                    <FaArrowLeft />
                    Back to Explore
                </Link>

            </div>


            {/* =========================
                POST DETAILS
            ========================= */}

            <section className="explore-post-details-card">

                {/* =========================
                    IMAGE
                ========================= */}

                <div className="details-image-container">

                    <img
                        src={post.image}
                        alt={post.title}
                    />

                    <span className="details-category">
                        <FaFire />
                        {post.category}
                    </span>

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div className="details-content">

                    {/* AUTHOR */}

                    <div className="details-author">

                        <div className="details-author-avatar">
                            {post.avatar}
                        </div>

                        <div>

                            <div className="author-name">

                                <h3>
                                    {post.author}
                                </h3>

                                <FaCheckCircle />

                            </div>

                            <p>
                                {post.username}
                                <span> • </span>
                                2 hours ago
                            </p>

                        </div>

                    </div>


                    {/* TITLE */}

                    <h1>
                        {post.title}
                    </h1>


                    {/* DESCRIPTION */}

                    <p className="details-description">
                        {post.description}
                    </p>


                    {/* FULL CONTENT */}

                    <p className="details-full-content">
                        {post.content}
                    </p>


                    {/* =========================
                        ACTIONS
                    ========================= */}

                    <div className="details-actions">

                        <button
                            type="button"
                            className={
                                liked
                                    ? "detail-action liked"
                                    : "detail-action"
                            }
                            onClick={handleLike}
                        >

                            {liked ? (
                                <FaHeart />
                            ) : (
                                <FaRegHeart />
                            )}

                            <span>
                                {post.likes +
                                    (liked ? 1 : 0)}
                            </span>

                            <small>
                                Likes
                            </small>

                        </button>


                        <button
                            type="button"
                            className="detail-action"
                            onClick={() =>
                                document
                                    .getElementById(
                                        "comment-input"
                                    )
                                    ?.focus()
                            }
                        >

                            <FaComment />

                            <span>
                                {post.comments +
                                    comments.length}
                            </span>

                            <small>
                                Comments
                            </small>

                        </button>


                        <button
                            type="button"
                            className="detail-action"
                            onClick={handleShare}
                        >

                            <FaShare />

                            <span>
                                Share
                            </span>

                            <small>
                                Post
                            </small>

                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                COMMENTS SECTION
            ========================= */}

            <section className="explore-comments-section">

                <div className="comments-heading">

                    <div>

                        <FaComment />

                        <h2>
                            Comments
                        </h2>

                    </div>

                    <span>
                        {comments.length} comments
                    </span>

                </div>


                {/* =========================
                    COMMENT INPUT
                ========================= */}

                <div className="comment-input-container">

                    <div className="your-comment-avatar">
                        YO
                    </div>

                    <input
                        id="comment-input"
                        type="text"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e) =>
                            setCommentText(
                                e.target.value
                            )
                        }
                        onKeyDown={(e) => {

                            if (
                                e.key === "Enter"
                            ) {
                                handleComment();
                            }

                        }}
                    />

                    <button
                        type="button"
                        onClick={handleComment}
                    >
                        <FaPaperPlane />
                    </button>

                </div>


                {/* =========================
                    COMMENTS
                ========================= */}

                <div className="comments-list">

                    {comments.map(
                        (comment) => (

                            <article
                                className="comment-card"
                                key={comment.id}
                            >

                                <div className="comment-user-avatar">
                                    {comment.avatar}
                                </div>

                                <div className="comment-body">

                                    <div className="comment-user-info">

                                        <h3>
                                            {comment.name}
                                        </h3>

                                        <span>
                                            {comment.username}
                                        </span>

                                    </div>

                                    <p>
                                        {comment.text}
                                    </p>

                                </div>

                            </article>

                        )
                    )}

                </div>

            </section>

        </main>
    );
}

export default ExplorePostDetails;