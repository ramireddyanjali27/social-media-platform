import { useState, useRef } from "react";

import {
    FaMapMarkerAlt,
    FaGlobe,
    FaEdit,
    FaHeart,
    FaComment,
    FaCamera,
    FaTimes,
    FaSave,
    FaShareAlt,
    FaCheckCircle,
    FaBookmark,
    FaRegBookmark,
    FaLink,
    FaUserFriends,
    FaUsers,
    FaImage,
} from "react-icons/fa";

import "./Profile.css";

function Profile() {

    // =========================
    // PROFILE DATA
    // =========================

    const [profile, setProfile] = useState({
        name: "Anjali Devi",
        username: "@anjalidevi",
        bio: "Software Developer | Technology Enthusiast | Building meaningful digital experiences and connecting with amazing people.",
        location: "Andhra Pradesh, India",
        website: "www.socialconnect.com",
        profession: "Software Developer",
        interests: "Technology, Coding, Design",
        image: "",
    });

    // =========================
    // EDIT PROFILE
    // =========================

    const [isEditing, setIsEditing] = useState(false);
    const [editProfile, setEditProfile] = useState(profile);

    // =========================
    // PROFILE IMAGE
    // =========================

    const fileInputRef = useRef(null);

    // =========================
    // ACTIVE TAB
    // =========================

    const [activeTab, setActiveTab] = useState("Posts");

    // =========================
    // FOLLOWERS
    // =========================

    const [followers, setFollowers] = useState(2400);
    const [following, setFollowing] = useState(386);

    // =========================
    // POSTS
    // =========================

    const [posts, setPosts] = useState([
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
            likes: 124,
            comments: 18,
            liked: false,
            saved: false,
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
            likes: 98,
            comments: 12,
            liked: false,
            saved: false,
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
            likes: 156,
            comments: 24,
            liked: false,
            saved: false,
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
            likes: 87,
            comments: 9,
            liked: false,
            saved: false,
        },
        {
            id: 5,
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
            likes: 143,
            comments: 21,
            liked: false,
            saved: false,
        },
        {
            id: 6,
            image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
            likes: 112,
            comments: 15,
            liked: false,
            saved: false,
        },
    ]);

    // =========================
    // IMAGE CHANGE
    // =========================

    const handleCameraClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Image size must be less than 5 MB.");
            return;
        }

        const imageURL = URL.createObjectURL(file);

        setProfile((previousProfile) => ({
            ...previousProfile,
            image: imageURL,
        }));

        e.target.value = "";
    };

    // =========================
    // EDIT PROFILE
    // =========================

    const openManageProfile = () => {
        setEditProfile(profile);
        setIsEditing(true);
    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setEditProfile((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const saveProfile = () => {

        setProfile(editProfile);
        setIsEditing(false);
    };

    const cancelEdit = () => {

        setEditProfile(profile);
        setIsEditing(false);
    };

    // =========================
    // LIKE POST
    // =========================

    const toggleLike = (postId) => {

        setPosts((previousPosts) =>
            previousPosts.map((post) => {

                if (post.id !== postId) {
                    return post;
                }

                return {
                    ...post,
                    liked: !post.liked,
                    likes: post.liked
                        ? post.likes - 1
                        : post.likes + 1,
                };
            })
        );
    };

    // =========================
    // SAVE POST
    // =========================

    const toggleSave = (postId) => {

        setPosts((previousPosts) =>
            previousPosts.map((post) => {

                if (post.id !== postId) {
                    return post;
                }

                return {
                    ...post,
                    saved: !post.saved,
                };
            })
        );
    };

    // =========================
    // FOLLOW / UNFOLLOW
    // =========================

    const toggleFollow = () => {

        if (followers === 2400) {
            setFollowers(2401);
        } else {
            setFollowers(2400);
        }
    };

    // =========================
    // SHARE PROFILE
    // =========================

    const shareProfile = async () => {

        const profileURL =
            window.location.origin + "/profile";

        try {

            if (navigator.share) {

                await navigator.share({
                    title: profile.name,
                    text: `Check out ${profile.name} on SocialConnect`,
                    url: profileURL,
                });

            } else {

                await navigator.clipboard.writeText(profileURL);

                alert("Profile link copied!");

            }

        } catch (error) {
            console.log("Share cancelled");
        }
    };

    // =========================
    // PROFILE COMPLETION
    // =========================

    const completionFields = [
        profile.name,
        profile.username,
        profile.bio,
        profile.location,
        profile.website,
        profile.profession,
        profile.interests,
        profile.image,
    ];

    const completedFields =
        completionFields.filter(Boolean).length;

    const completionPercentage =
        Math.round(
            (completedFields /
                completionFields.length) *
            100
        );

    // =========================
    // FILTER POSTS
    // =========================

    const displayedPosts = posts.filter((post) => {

        if (activeTab === "Liked") {
            return post.liked;
        }

        if (activeTab === "Saved") {
            return post.saved;
        }

        return true;
    });

    // =========================
    // FORMAT FOLLOWERS
    // =========================

    const formatFollowers = (number) => {

        if (number >= 1000) {
            return `${(number / 1000).toFixed(1)}K`;
        }

        return number;
    };

    return (

        <div className="profile-page">

            {/* =========================
                PROFILE HEADER
            ========================= */}

            <section className="profile-header">

                <div className="profile-cover">

                    <div className="cover-content">
                        <span>
                            SOCIALCONNECT
                        </span>
                    </div>

                </div>

                <div className="profile-main">

                    {/* AVATAR */}

                    <div className="profile-avatar-container">

                        {profile.image ? (

                            <img
                                src={profile.image}
                                alt="Profile"
                                className="profile-avatar profile-avatar-image"
                            />

                        ) : (

                            <div className="profile-avatar">
                                AD
                            </div>

                        )}

                        <button
                            className="camera-button"
                            type="button"
                            onClick={handleCameraClick}
                            title="Change profile picture"
                        >
                            <FaCamera />
                        </button>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />

                    </div>

                    {/* PROFILE INFORMATION */}

                    <div className="profile-info">

                        <div className="profile-name-row">

                            <div>

                                <div className="profile-name">

                                    <h1>
                                        {profile.name}
                                    </h1>

                                    <FaCheckCircle
                                        className="verified-icon"
                                        title="Verified profile"
                                    />

                                </div>

                                <p>
                                    {profile.username}
                                </p>

                            </div>

                            <div className="profile-actions">

                                <button
                                    className="share-profile-button"
                                    onClick={shareProfile}
                                    type="button"
                                >
                                    <FaShareAlt />
                                    Share
                                </button>

                                <button
                                    className="manage-profile-button"
                                    onClick={openManageProfile}
                                    type="button"
                                >
                                    <FaEdit />
                                    Edit Profile
                                </button>

                            </div>

                        </div>

                        <p className="profile-bio">
                            {profile.bio}
                        </p>

                        <div className="profile-details">

                            <span>
                                <FaMapMarkerAlt />
                                {profile.location}
                            </span>

                            <span>
                                <FaGlobe />
                                {profile.website}
                            </span>

                            <span>
                                <FaLink />
                                {profile.profession}
                            </span>

                        </div>

                    </div>

                </div>

                {/* PROFILE STATS */}

                <div className="profile-stats">

                    <button
                        className="stat"
                        onClick={() =>
                            alert(`${posts.length} posts`)
                        }
                    >
                        <strong>
                            {posts.length}
                        </strong>

                        <span>
                            Posts
                        </span>
                    </button>

                    <button
                        className="stat"
                        onClick={() =>
                            alert(
                                `${formatFollowers(followers)} followers`
                            )
                        }
                    >
                        <strong>
                            {formatFollowers(followers)}
                        </strong>

                        <span>
                            Followers
                        </span>
                    </button>

                    <button
                        className="stat"
                        onClick={() =>
                            alert(`${following} following`)
                        }
                    >
                        <strong>
                            {following}
                        </strong>

                        <span>
                            Following
                        </span>
                    </button>

                    <button
                        className="stat"
                        onClick={toggleFollow}
                    >
                        <strong>
                            {followers === 2400
                                ? "Follow"
                                : "Following"}
                        </strong>

                        <span>
                            Network
                        </span>
                    </button>

                </div>

            </section>

            {/* =========================
                PROFILE CONTENT
            ========================= */}

            <section className="profile-content">

                {/* =========================
                    LEFT COLUMN
                ========================= */}

                <div className="profile-left-column">

                    {/* ABOUT */}

                    <div className="about-card">

                        <div className="card-heading">

                            <h2>
                                About
                            </h2>

                            <span>
                                {completionPercentage}%
                            </span>

                        </div>

                        <div className="completion-bar">

                            <div
                                style={{
                                    width: `${completionPercentage}%`,
                                }}
                            />

                        </div>

                        <p>
                            Passionate about software development,
                            modern technologies and creating
                            innovative solutions. Always learning,
                            sharing knowledge and connecting with
                            the developer community.
                        </p>

                        <div className="about-items">

                            <div>
                                <strong>
                                    Profession
                                </strong>

                                <span>
                                    {profile.profession}
                                </span>
                            </div>

                            <div>
                                <strong>
                                    Interests
                                </strong>

                                <span>
                                    {profile.interests}
                                </span>
                            </div>

                            <div>
                                <strong>
                                    Member Since
                                </strong>

                                <span>
                                    2026
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* PROFILE NETWORK */}

                    <div className="network-card">

                        <h2>
                            Your Network
                        </h2>

                        <div className="network-items">

                            <div>
                                <FaUsers />
                                <span>
                                    {formatFollowers(followers)}
                                </span>
                                <small>
                                    Followers
                                </small>
                            </div>

                            <div>
                                <FaUserFriends />
                                <span>
                                    {following}
                                </span>
                                <small>
                                    Following
                                </small>
                            </div>

                        </div>

                    </div>

                </div>

                {/* =========================
                    POSTS
                ========================= */}

                <div className="posts-card">

                    <div className="posts-header">

                        <div>

                            <h2>
                                My Activity
                            </h2>

                            <span>
                                Manage your content
                            </span>

                        </div>

                        <FaImage
                            className="posts-header-icon"
                        />

                    </div>

                    {/* TABS */}

                    <div className="profile-tabs">

                        <button
                            className={
                                activeTab === "Posts"
                                    ? "profile-tab active"
                                    : "profile-tab"
                            }
                            onClick={() =>
                                setActiveTab("Posts")
                            }
                        >
                            Posts
                        </button>

                        <button
                            className={
                                activeTab === "Liked"
                                    ? "profile-tab active"
                                    : "profile-tab"
                            }
                            onClick={() =>
                                setActiveTab("Liked")
                            }
                        >
                            <FaHeart />
                            Liked
                        </button>

                        <button
                            className={
                                activeTab === "Saved"
                                    ? "profile-tab active"
                                    : "profile-tab"
                            }
                            onClick={() =>
                                setActiveTab("Saved")
                            }
                        >
                            <FaBookmark />
                            Saved
                        </button>

                    </div>

                    {/* POSTS */}

                    {displayedPosts.length > 0 ? (

                        <div className="posts-grid">

                            {displayedPosts.map((post) => (

                                <div
                                    className="profile-post"
                                    key={post.id}
                                >

                                    <img
                                        src={post.image}
                                        alt="Social post"
                                    />

                                    <div className="post-overlay">

                                        <button
                                            type="button"
                                            className={
                                                post.liked
                                                    ? "post-action liked"
                                                    : "post-action"
                                            }
                                            onClick={() =>
                                                toggleLike(
                                                    post.id
                                                )
                                            }
                                        >
                                            <FaHeart />
                                            {post.likes}
                                        </button>

                                        <span>
                                            <FaComment />
                                            {post.comments}
                                        </span>

                                        <button
                                            type="button"
                                            className="post-save-button"
                                            onClick={() =>
                                                toggleSave(
                                                    post.id
                                                )
                                            }
                                        >
                                            {post.saved ? (
                                                <FaBookmark />
                                            ) : (
                                                <FaRegBookmark />
                                            )}
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="empty-posts">

                            <FaImage />

                            <h3>
                                No {activeTab.toLowerCase()} posts
                            </h3>

                            <p>
                                Your {activeTab.toLowerCase()}
                                content will appear here.
                            </p>

                        </div>

                    )}

                </div>

            </section>

            {/* =========================
                MANAGE PROFILE MODAL
            ========================= */}

            {isEditing && (

                <div className="profile-modal-overlay">

                    <div className="profile-modal">

                        <div className="profile-modal-header">

                            <div>

                                <h2>
                                    Manage Profile
                                </h2>

                                <p>
                                    Update your profile information
                                </p>

                            </div>

                            <button
                                className="modal-close-button"
                                onClick={cancelEdit}
                                type="button"
                            >
                                <FaTimes />
                            </button>

                        </div>

                        <div className="profile-form">

                            <div className="form-group">

                                <label>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={editProfile.name}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Username
                                </label>

                                <input
                                    type="text"
                                    name="username"
                                    value={editProfile.username}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Bio
                                </label>

                                <textarea
                                    name="bio"
                                    value={editProfile.bio}
                                    onChange={handleChange}
                                    rows="4"
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    value={editProfile.location}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Website
                                </label>

                                <input
                                    type="text"
                                    name="website"
                                    value={editProfile.website}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Profession
                                </label>

                                <input
                                    type="text"
                                    name="profession"
                                    value={editProfile.profession}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Interests
                                </label>

                                <input
                                    type="text"
                                    name="interests"
                                    value={editProfile.interests}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="profile-form-actions">

                                <button
                                    className="cancel-profile-button"
                                    onClick={cancelEdit}
                                    type="button"
                                >
                                    Cancel
                                </button>

                                <button
                                    className="save-profile-button"
                                    onClick={saveProfile}
                                    type="button"
                                >
                                    <FaSave />
                                    Save Changes
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Profile;