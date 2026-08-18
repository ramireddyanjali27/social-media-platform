import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaTwitter,
    FaPinterestP,
    FaTiktok,
    FaWhatsapp,
    FaTelegramPlane,
    FaRedditAlien,
    FaSnapchatGhost,
    FaGithub
} from "react-icons/fa";

import "./LandingPage.css";

function LandingPage() {
    return (
        <main className="landing-page">

            {/* =================================
                HERO SECTION
            ================================= */}

            <section className="hero-section">

                {/* HERO CONTENT */}

                <div className="hero-content">

                    <p className="hero-small-text">
                        WELCOME TO THE FUTURE OF SOCIAL CONNECTION
                    </p>

                    <h1 className="hero-title">
                        Connect.
                        <span> Share.</span>
                        <strong> Inspire.</strong>
                    </h1>

                    <p className="hero-description">
                        Discover a new way to connect with people,
                        share your moments and build meaningful
                        communities around the world.
                    </p>

                    <div className="hero-buttons">

                        <button className="hero-primary-button">
                            Join Our Community
                        </button>

                        <button className="hero-secondary-button">
                            Explore Network
                        </button>

                    </div>

                </div>


                {/* =================================
                    SOCIAL NETWORK
                ================================= */}

                <div className="social-network">

                    {/* CENTRAL SPHERE */}

                    <div className="network-center">

                        <div className="center-glow"></div>

                        <div className="center-content">
                            SC
                        </div>

                    </div>


                    {/* =================================
                        GLOWING CONNECTION LINES
                    ================================= */}

                    <div className="network-line line-one"></div>
                    <div className="network-line line-two"></div>
                    <div className="network-line line-three"></div>
                    <div className="network-line line-four"></div>
                    <div className="network-line line-five"></div>
                    <div className="network-line line-six"></div>
                    <div className="network-line line-seven"></div>
                    <div className="network-line line-eight"></div>


                    {/* =================================
                        SOCIAL ICONS
                    ================================= */}

                    <div className="social-icon icon-facebook">
                        <FaFacebookF />
                    </div>

                    <div className="social-icon icon-instagram">
                        <FaInstagram />
                    </div>

                    <div className="social-icon icon-youtube">
                        <FaYoutube />
                    </div>

                    <div className="social-icon icon-twitter">
                        <FaTwitter />
                    </div>

                    <div className="social-icon icon-linkedin">
                        <FaLinkedinIn />
                    </div>

                    <div className="social-icon icon-pinterest">
                        <FaPinterestP />
                    </div>

                    <div className="social-icon icon-tiktok">
                        <FaTiktok />
                    </div>

                    <div className="social-icon icon-whatsapp">
                        <FaWhatsapp />
                    </div>

                    <div className="social-icon icon-telegram">
                        <FaTelegramPlane />
                    </div>

                    <div className="social-icon icon-reddit">
                        <FaRedditAlien />
                    </div>

                    <div className="social-icon icon-snapchat">
                        <FaSnapchatGhost />
                    </div>

                    <div className="social-icon icon-github">
                        <FaGithub />
                    </div>


                    {/* =================================
                        CYAN NETWORK NODES
                    ================================= */}

                    <span className="network-node node-one"></span>
                    <span className="network-node node-two"></span>
                    <span className="network-node node-three"></span>
                    <span className="network-node node-four"></span>
                    <span className="network-node node-five"></span>
                    <span className="network-node node-six"></span>
                    <span className="network-node node-seven"></span>
                    <span className="network-node node-eight"></span>
                    <span className="network-node node-nine"></span>
                    <span className="network-node node-ten"></span>


                    {/* =================================
                        ANIMATED PARTICLES
                    ================================= */}

                    <span className="network-particle particle-one"></span>
                    <span className="network-particle particle-two"></span>
                    <span className="network-particle particle-three"></span>
                    <span className="network-particle particle-four"></span>
                    <span className="network-particle particle-five"></span>
                    <span className="network-particle particle-six"></span>
                    <span className="network-particle particle-seven"></span>
                    <span className="network-particle particle-eight"></span>


                    {/* =================================
                        ORANGE ACCENT NODES
                    ================================= */}

                    <span className="orange-node orange-node-one"></span>
                    <span className="orange-node orange-node-two"></span>
                    <span className="orange-node orange-node-three"></span>
                    <span className="orange-node orange-node-four"></span>
                    <span className="orange-node orange-node-five"></span>

                </div>

            </section>


            {/* =================================
                FEATURES
            ================================= */}

            <section className="features-section">

                <div className="feature-card">

                    <div className="feature-icon">
                        <FaFacebookF />
                    </div>

                    <h3>Connect</h3>

                    <p>
                        Meet people and build meaningful
                        connections around the world.
                    </p>

                </div>


                <div className="feature-card">

                    <div className="feature-icon">
                        <FaInstagram />
                    </div>

                    <h3>Share</h3>

                    <p>
                        Share your stories, moments and
                        experiences with your community.
                    </p>

                </div>


                <div className="feature-card">

                    <div className="feature-icon">
                        <FaWhatsapp />
                    </div>

                    <h3>Communicate</h3>

                    <p>
                        Stay connected through conversations
                        and communities.
                    </p>

                </div>

            </section>

        </main>
    );
}

export default LandingPage;