import React from "react";
import "./Footer.css";

// Components
import ResumeDown from "../../components/resumeButton/ResumeDown";
import SocialButts from "../../components/socialButtons/SocialButts";

const Footer = () => {
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
                            
                        </div>
                        <div class="footer-nav">
                            <h3>Connect</h3>
                            
                        </div>
                    </div>
                    
                </div>
                <p class="copyright">&#169; 2025 Landon Linn</p>
            </div>
        </footer>
    );
}

export default Footer;