import React from "react";
import "./SideMenu.css";

// Import Components
import Nav from "../Nav/Nav";
import NameLogo from "../namelogo/NameLogo";
import SocialButts from "../socialButtons/SocialButts";
import ResumeDown from "../resumeButton/ResumeDown";

const SideMenu = () => {
    return(
        <div className="sidemenu-container">
            <div className="sidemenu">
                {/* Close Button */}
                <div className="closeButt">✕</div>
                
                {/* Card Content */}
                <div className="sidemenu-content">
                    <div className="headshot">
                        <img src="../../src/assets/Headshot-colored.png" className="sidemenu-headshot" alt="My Headshot on Side Menu" />
                        <hr className="divider" />
                    </div>
                    

                    <div className="sidemenu-components">
                        <div className="sidemenu-info">
                            <NameLogo></NameLogo>
                            <SocialButts></SocialButts>
                        </div>
                        
                        <hr className="divider" />

                        <div className="sidemenu-links">
                            <Nav />
                        </div>

                        <hr className="divider" />
                        
                        <ResumeDown></ResumeDown>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideMenu;