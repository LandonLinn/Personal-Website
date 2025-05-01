import React from "react";
import "./Header.css";
import { toTop } from '../../utils/helpers';

// Import React elements
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
    const location = useLocation(); // Store useLocation as const variable
    const navigate = useNavigate(); // Store useNavigate as const variable

    // If location is on home, scroll to top of Home, else navigate to homepage
    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({top: "0", behavior: "smooth"});
        }
        else{
            navigate("/");
            window.scrollTo({top: "0"});
        }
    };

    const handleAboutClick = () => {
        navigate("/", {state: { scrollTo: "about-section" } });
    };

    const handlePortClick = () => {
        navigate("/", {state: { scrollTo: "portfolio-section" } });
    };

    const handleSkillsClick = () => {
        navigate("/", {state: { scrollTo: "skills-section" } });
    };

    return(
        <header>
            <div className="content-wrapper">
                <div className="header-container">
                    <div className="name-title">
                        <Link to="/" onClick={handleHomeClick}>
                            <div className="name-info">
                                <img src="\src\assets\Personal Logo - Transparent.png" alt="Personal Logo" className="logo" />
                                <div className="name-occ">
                                    <h2>Landon Linn</h2>
                                    <p>Software Developer</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-bar">
                        <Link to="/" onClick={handleHomeClick}>Home</Link>

                        <ScrollLink
                            to="about-container"
                            onClick={handleAboutClick}
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            About
                        </ScrollLink>

                        <ScrollLink
                            to="portfolio-container"
                            onClick={handlePortClick}
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            Portfolio
                        </ScrollLink>

                        <ScrollLink
                            to="skills-container"
                            onClick={handleSkillsClick}
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            Skills
                        </ScrollLink>
                        <Link 
                            to="/hire"
                            onClick={toTop}
                        >
                            <a href="hire.html">
                                <button className="small-butt glow">
                                    Hire
                                </button>
                            </a>
                        </Link>
                        {/* <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/contact">Contact</Link> */}
                        {/* <a href="">Blog</a> */}
                        

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
