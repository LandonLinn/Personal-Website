import React, { useState } from "react";
import "./Header.css";

// Import NAV Component
import Nav from "../../components/Nav/Nav";
import NameLogo from "../../components/namelogo/NameLogo";

// Import SideMenu Component
import SideMenu from "../../components/sideMenu/SideMenu";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handleHamMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <header>
            <div className="content-wrapper">
                <div className="header-container">
                    {/* Hamburger Menu */}
                    <div className="hamburger-menu" onClick={handleHamMenu}>
                        <div className="hamLine"></div>
                        <div className="hamLine"></div>
                        <div className="hamLine"></div>
                    </div>

                    {/* Side Menu */}
                    <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

                    {/* Logo, Name, Occupation */}
                    <div className="name-title">
                        <NameLogo />
                    </div>

                    {/* Nav Bar */}
                    <div className="nav-bar">
                        <Nav onLinkClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
