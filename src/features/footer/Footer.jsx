import React from "react";
import "./Footer.css";

// Import Images
import personalLogo from "../../assets/personal-logo-transparent.png"

// Components
import ResumeDown from "../../components/resumeButton/ResumeDown";
import SocialButts from "../../components/socialButtons/SocialButts";
import Nav from "../../components/Nav/Nav";

const Footer = () => {

    // Year
    let year = new Date().getFullYear();

    return(
        <footer>
            <div class="content-wrapper">
                <div class="footer-container">
                    <div class="logo-container">
                        <div class="name-info">
                            <img src={personalLogo} alt="Personal Logo" class="logo" />
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
                            <Nav />
                        </div>
                    </div>
                    
                </div>
                <p class="copyright">&#169; {year} Landon Linn</p>
            </div>
        </footer>
    );
}

export default Footer;