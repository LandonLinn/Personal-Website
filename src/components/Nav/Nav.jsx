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

    // Handle Section Clicks & Close menu
    const handleNavClick = (section) => {
        navigate("/", {state: { scrollTo: section } });
        onLinkClick();
    }

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
                onClick={() => handleNavClick("about-container")}
                smooth={true}
                duration={500}
                offset={-80}
            >
                About
            </ScrollLink>

            <ScrollLink
                to="portfolio-container"
                onClick={() => handleNavClick("portfolio-container")}
                smooth={true}
                duration={500}
                offset={-80}
            >
                Portfolio
            </ScrollLink>

            <ScrollLink
                to="skills-container"
                onClick={() => handleNavClick("skills-container")}
                smooth={true}
                duration={500}
                offset={-80}
            >
                Skills
            </ScrollLink>

            <Link 
                to="/contact" 
                onClick={() => {
                    toTop();
                    onLinkClick();            
                }}
            >
                Contact
            </Link>

            <Link 
                to="/Hire"
                onClick={() => {
                    toTop();
                    onLinkClick();            
                }}
            >
                Hire
                
            </Link>                     

        </nav>
    );
}

export default Nav;