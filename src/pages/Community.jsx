import { useState } from "react";

import {
    FaUsers,
    FaSearch,
    FaPlus,
    FaFire,
    FaCode,
    FaCamera,
    FaGamepad,
    FaMusic,
    FaBook,
    FaPlane,
    FaTimes,
    FaCheck,
    FaCompass
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../styles/Community.css";


function Community() {

    // =========================================
    // SEARCH
    // =========================================

    const [search, setSearch] = useState("");


    // =========================================
    // ACTIVE CATEGORY
    // =========================================

    const [activeCategory, setActiveCategory] = useState("All");


    // =========================================
    // JOINED COMMUNITIES
    // =========================================

    const [joinedCommunities, setJoinedCommunities] =
        useState([]);


    // =========================================
    // CREATE MODAL
    // =========================================

    const [showModal, setShowModal] = useState(false);


    // =========================================
    // FORM DATA
    // =========================================

    const [formData, setFormData] = useState({
        name: "",
        category: "Technology",
        description: ""
    });


    // =========================================
    // COMMUNITIES
    // =========================================

    const [communities, setCommunities] = useState([

        {
            id: 1,

            name: "Tech Innovators",

            category: "Technology",

            description:
                "Explore technology, programming, AI and the latest innovations.",

            members: "125K",

            activeMembers: "8.4K",

            posts: "24K",

            icon: <FaCode />,

            iconClass: "technology",

            trending: true
        },


        {
            id: 2,

            name: "Photography Lovers",

            category: "Photography",

            description:
                "Share photography, editing techniques and discover amazing shots.",

            members: "98K",

            activeMembers: "6.2K",

            posts: "18K",

            icon: <FaCamera />,

            iconClass: "photography",

            trending: true
        },


        {
            id: 3,

            name: "Gaming Arena",

            category: "Gaming",

            description:
                "Connect with gamers and discuss your favorite games.",

            members: "87K",

            activeMembers: "7.1K",

            posts: "31K",

            icon: <FaGamepad />,

            iconClass: "gaming",

            trending: true
        },


        {
            id: 4,

            name: "Music World",

            category: "Music",

            description:
                "Discover artists, songs and share your favorite music.",

            members: "76K",

            activeMembers: "4.8K",

            posts: "15K",

            icon: <FaMusic />,

            iconClass: "music",

            trending: true
        },


        {
            id: 5,

            name: "Book Lovers",

            category: "Books",

            description:
                "Discuss books, authors and your favorite stories.",

            members: "64K",

            activeMembers: "3.5K",

            posts: "12K",

            icon: <FaBook />,

            iconClass: "books",

            trending: false
        },


        {
            id: 6,

            name: "Travel Explorers",

            category: "Travel",

            description:
                "Share travel experiences and discover new destinations.",

            members: "59K",

            activeMembers: "4.1K",

            posts: "10K",

            icon: <FaPlane />,

            iconClass: "travel",

            trending: false
        },


        // =====================================
        // AI COMMUNITY
        // =====================================

        {
            id: 7,

            name: "AI & Machine Learning Hub",

            category: "Technology",

            description:
                "Learn artificial intelligence, machine learning, Python, deep learning and the latest AI technologies.",

            members: "12.8K",

            activeMembers: "1.2K",

            posts: "2.4K",

            icon: <FaCode />,

            iconClass: "technology",

            trending: true
        }

    ]);


    // =========================================
    // CATEGORIES
    // =========================================

    const categories = [
        "All",
        "Technology",
        "Photography",
        "Gaming",
        "Music",
        "Books",
        "Travel"
    ];


    // =========================================
    // GET CATEGORY ICON
    // =========================================

    const getCategoryIcon = (category) => {

        switch (category) {

            case "Technology":
                return <FaCode />;

            case "Photography":
                return <FaCamera />;

            case "Gaming":
                return <FaGamepad />;

            case "Music":
                return <FaMusic />;

            case "Books":
                return <FaBook />;

            case "Travel":
                return <FaPlane />;

            default:
                return <FaUsers />;
        }
    };


    // =========================================
    // GET CATEGORY CLASS
    // =========================================

    const getCategoryClass = (category) => {

        switch (category) {

            case "Technology":
                return "technology";

            case "Photography":
                return "photography";

            case "Gaming":
                return "gaming";

            case "Music":
                return "music";

            case "Books":
                return "books";

            case "Travel":
                return "travel";

            default:
                return "technology";
        }
    };


    // =========================================
    // CATEGORY CHANGE
    // =========================================

    const handleCategoryChange = (category) => {

        setActiveCategory(category);

    };


    // =========================================
    // JOIN / LEAVE COMMUNITY
    // =========================================

    const handleJoin = (communityId) => {

        setJoinedCommunities((previous) => {

            if (previous.includes(communityId)) {

                return previous.filter(
                    (id) => id !== communityId
                );

            }

            return [
                ...previous,
                communityId
            ];

        });

    };


    // =========================================
    // FORM INPUT CHANGE
    // =========================================

    const handleInputChange = (e) => {

        const {
            name,
            value
        } = e.target;


        setFormData((previous) => ({

            ...previous,

            [name]: value

        }));

    };


    // =========================================
    // OPEN CREATE MODAL
    // =========================================

    const openCreateModal = () => {

        setFormData({
            name: "",
            category: "Technology",
            description: ""
        });

        setShowModal(true);

    };


    // =========================================
    // CLOSE CREATE MODAL
    // =========================================

    const closeCreateModal = () => {

        setShowModal(false);

        setFormData({
            name: "",
            category: "Technology",
            description: ""
        });

    };


    // =========================================
    // CREATE COMMUNITY
    // =========================================

    const handleCreateCommunity = (e) => {

        e.preventDefault();


        const communityName =
            formData.name.trim();


        const communityDescription =
            formData.description.trim();


        // Validation

        if (
            !communityName ||
            !communityDescription
        ) {

            return;

        }


        // Unique ID

        const newCommunityId =
            Date.now();


        // New community

        const newCommunity = {

            id: newCommunityId,

            name: communityName,

            category: formData.category,

            description:
                communityDescription,

            members: "1",

            activeMembers: "1",

            posts: "0",

            icon: getCategoryIcon(
                formData.category
            ),

            iconClass: getCategoryClass(
                formData.category
            ),

            trending: false

        };


        // Add community

        setCommunities((previous) => [

            ...previous,

            newCommunity

        ]);


        // Automatically join creator

        setJoinedCommunities((previous) => [

            ...previous,

            newCommunityId

        ]);


        // Close modal

        closeCreateModal();


        // Reset filters

        setActiveCategory("All");

        setSearch("");

    };


    // =========================================
    // FILTER COMMUNITIES
    // =========================================

    const filteredCommunities =
        communities.filter((community) => {

            const searchText =
                search
                    .toLowerCase()
                    .trim();


            const matchesSearch =

                community.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                community.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                community.description
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =

                activeCategory === "All"

                ||

                community.category ===
                    activeCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    // =========================================
    // RENDER
    // =========================================

    return (

        <main className="community-page">


            {/* =====================================
                HEADER
            ===================================== */}

            <section className="community-header">

                <div className="community-heading">

                    <p className="community-small-title">
                        FIND YOUR PEOPLE
                    </p>


                    <h1>
                        Join a <span>Community</span>
                    </h1>


                    <p className="community-description">
                        Connect with people who share
                        your interests, passions and ideas.
                    </p>

                </div>


                {/* SEARCH */}

                <div className="community-search">

                    <FaSearch />


                    <input
                        type="text"
                        placeholder="Search communities..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                </div>

            </section>


            {/* =====================================
                CATEGORIES
            ===================================== */}

            <section className="community-categories">

                {categories.map((category) => (

                    <button
                        key={category}
                        type="button"
                        className={`community-category ${
                            activeCategory === category
                                ? "active"
                                : ""
                        }`}
                        onClick={() =>
                            handleCategoryChange(
                                category
                            )
                        }
                    >
                        {category}
                    </button>

                ))}

            </section>


            {/* =====================================
                COMMUNITY SECTION
            ===================================== */}

            <section className="community-section">


                {/* SECTION TITLE */}

                <div className="community-section-title">

                    <div>

                        <FaFire />

                        <h2>
                            Trending Communities
                        </h2>

                    </div>


                    <span>
                        {filteredCommunities.length}{" "}
                        communities
                    </span>

                </div>


                {/* =================================
                    COMMUNITY GRID
                ================================= */}

                {filteredCommunities.length > 0 ? (

                    <div className="community-grid">

                        {filteredCommunities.map(
                            (community) => {

                                const isJoined =
                                    joinedCommunities.includes(
                                        community.id
                                    );


                                return (

                                    <article
                                        className="community-card"
                                        key={community.id}
                                    >


                                        {/* =================================
                                            CLICKABLE COMMUNITY ICON
                                        ================================= */}

                                        <Link
                                            to={`/community/${community.id}`}
                                            className={`community-icon-link ${community.iconClass}`}
                                            aria-label={`Open ${community.name}`}
                                        >

                                            <div className="community-icon">

                                                {community.icon}

                                            </div>

                                        </Link>


                                        {/* =================================
                                            CARD CONTENT
                                        ================================= */}

                                        <div className="community-card-content">


                                            {/* TITLE */}

                                            <div className="community-title-row">

                                                <div className="community-title-wrapper">

                                                    {/* CLICKABLE COMMUNITY NAME */}

                                                    <Link
                                                        to={`/community/${community.id}`}
                                                        className="community-name-link"
                                                    >

                                                        <h3>
                                                            {community.name}
                                                        </h3>

                                                    </Link>


                                                    <span className="community-category-name">

                                                        {community.category}

                                                    </span>

                                                </div>


                                                {/* TRENDING */}

                                                {community.trending && (

                                                    <span className="trending-badge">

                                                        <FaFire />

                                                        Trending

                                                    </span>

                                                )}

                                            </div>


                                            {/* DESCRIPTION */}

                                            <p>
                                                {community.description}
                                            </p>


                                            {/* COMMUNITY INFO */}

                                            <div className="community-info">

                                                <span>

                                                    <FaUsers />

                                                    {community.members}
                                                    {" "}members

                                                </span>


                                                <span>

                                                    🟢{" "}

                                                    {community.activeMembers}

                                                    {" "}active

                                                </span>


                                                <span>

                                                    📝{" "}

                                                    {community.posts}

                                                    {" "}posts

                                                </span>

                                            </div>


                                            {/* =================================
                                                CARD ACTIONS
                                            ================================= */}

                                            <div className="community-card-actions">


                                                {/* VIEW COMMUNITY */}

                                                <Link
                                                    to={`/community/${community.id}`}
                                                    className="view-community-button"
                                                >

                                                    View Community

                                                </Link>


                                                {/* JOIN */}

                                                <button
                                                    type="button"
                                                    className={`join-community ${
                                                        isJoined
                                                            ? "joined"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleJoin(
                                                            community.id
                                                        )
                                                    }
                                                >

                                                    {isJoined ? (

                                                        <>
                                                            <FaCheck />
                                                            Joined
                                                        </>

                                                    ) : (

                                                        <>
                                                            <FaPlus />
                                                            Join
                                                        </>

                                                    )}

                                                </button>

                                            </div>

                                        </div>

                                    </article>

                                );

                            }
                        )}

                    </div>

                ) : (

                    /* =================================
                       NO RESULTS
                    ================================= */

                    <div className="no-community-results">

                        <FaCompass />

                        <h3>
                            No communities found
                        </h3>

                        <p>
                            Try another search or
                            select a different category.
                        </p>

                    </div>

                )}

            </section>


            {/* =====================================
                CREATE COMMUNITY
            ===================================== */}

            <section className="create-community">


                <div className="create-icon">

                    <FaUsers />

                </div>


                <div className="create-content">

                    <h2>
                        Can't find your community?
                    </h2>


                    <p>
                        Create your own community and
                        bring people together around
                        your interests.
                    </p>

                </div>


                <button
                    type="button"
                    className="create-community-button"
                    onClick={openCreateModal}
                >

                    <FaPlus />

                    Create Community

                </button>

            </section>


            {/* =====================================
                CREATE COMMUNITY MODAL
            ===================================== */}

            {showModal && (

                <div
                    className="community-modal-overlay"
                    onClick={closeCreateModal}
                >


                    <div
                        className="community-modal"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >


                        {/* MODAL HEADER */}

                        <div className="community-modal-header">

                            <div>

                                <p>
                                    BUILD YOUR COMMUNITY
                                </p>


                                <h2>
                                    Create Community
                                </h2>

                            </div>


                            <button
                                type="button"
                                className="modal-close"
                                onClick={
                                    closeCreateModal
                                }
                                aria-label="Close"
                            >

                                <FaTimes />

                            </button>

                        </div>


                        {/* FORM */}

                        <form
                            onSubmit={
                                handleCreateCommunity
                            }
                        >


                            {/* COMMUNITY NAME */}

                            <div className="form-group">

                                <label>
                                    Community Name
                                </label>


                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter community name"
                                    value={
                                        formData.name
                                    }
                                    onChange={
                                        handleInputChange
                                    }
                                    maxLength={50}
                                    required
                                />

                            </div>


                            {/* CATEGORY */}

                            <div className="form-group">

                                <label>
                                    Category
                                </label>


                                <select
                                    name="category"
                                    value={
                                        formData.category
                                    }
                                    onChange={
                                        handleInputChange
                                    }
                                >

                                    <option value="Technology">
                                        Technology
                                    </option>

                                    <option value="Photography">
                                        Photography
                                    </option>

                                    <option value="Gaming">
                                        Gaming
                                    </option>

                                    <option value="Music">
                                        Music
                                    </option>

                                    <option value="Books">
                                        Books
                                    </option>

                                    <option value="Travel">
                                        Travel
                                    </option>

                                </select>

                            </div>


                            {/* DESCRIPTION */}

                            <div className="form-group">

                                <label>
                                    Description
                                </label>


                                <textarea
                                    name="description"
                                    placeholder="Describe your community..."
                                    value={
                                        formData.description
                                    }
                                    onChange={
                                        handleInputChange
                                    }
                                    maxLength={250}
                                    required
                                />

                            </div>


                            {/* ACTION BUTTONS */}

                            <div className="modal-actions">


                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={
                                        closeCreateModal
                                    }
                                >

                                    Cancel

                                </button>


                                <button
                                    type="submit"
                                    className="create-button"
                                >

                                    <FaPlus />

                                    Create Community

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </main>

    );

}


export default Community;