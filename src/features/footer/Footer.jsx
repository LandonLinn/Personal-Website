import React from "react";
import "./Footer.css";
import { toTop } from '../../utils/helpers';

// Components
import ResumeDown from "../../components/resumeButton/ResumeDown";
import SocialButts from "../../components/socialButtons/SocialButts";
import Nav from "../../components/Nav/Nav";

// Import React elements
import { useLocation, useNavigate } from "react-router";

const Footer = () => {

    // Year
    let year = new Date().getFullYear();

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
        <footer>
            <div class="content-wrapper">
                <div class="footer-container">
                    <div class="logo-container">
                        <div class="name-info">
                            <img src="../src/assets/Personal Logo - Transparent.png" alt="Personal Logo" class="logo" />
                            <div class="name-occ">
                                <h2>Landon Linn</h2>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div class="footer-butts">
                            <ResumeDown />
                            <SocialButts />
                        </div>
                    </div>
                    <div class="footer-nav-container">
                        <div class="footer-nav">
                            <h3>Explore</h3>
                            <Nav></Nav>
                        </div>
                    </div>
                    
                </div>
                <p class="copyright">&#169; {year} Landon Linn</p>
            </div>
        </footer>
    );
}

export default Footer;