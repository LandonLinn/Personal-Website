import React from "react";
import "./Nav.css"
import { toTop } from '../../utils/helpers';

// Import React elements
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router";;

const Nav = ({ onLinkClick }) => {

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
        onLinkClick(); // Close sidemenu if open
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
        <nav className="nav-bar-links">
            <Link 
                to="/"
                onClick={handleHomeClick}
            >
                Home
            </Link>

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
                to="/Contact" 
                onClick={() => {
                    toTop();
                    onLinkClick();            
                }}
            >
                Contact
            </Link>

            {/* <Link 
                to="/Hire"
                onClick={toTop}
            >
                <a href="hire.html">
                    <button className="small-butt glow">
                        Hire
                    </button>
                </a>
            </Link> */}                       

        </nav>
    );
}

export default Nav;