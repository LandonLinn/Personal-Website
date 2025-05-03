import React from "react";
import "./Header.css";

// Import NAV Component
import Nav from "../../components/Nav/Nav";
import NameLogo from "../../components/namelogo/NameLogo";

// Import SideMenu Component
import SideMenu from "../../components/sideMenu/SideMenu";

const Header = () => {

    const handleHamMenu = () => {

    };

    return(
        <header>
            <div className="content-wrapper">
                <div className="header-container">
                    {/* Hamburger Menu */}
                    <div className="hamburger-menu" >
                        <div className="hamLine"></div>
                        <div className="hamLine"></div>
                        <div className="hamLine"></div>
                    </div>

                    {/* Side Menu */}
                    <SideMenu></SideMenu>

                    {/* Logo, Name, Occupation */}
                    <div className="name-title">
                        <NameLogo></NameLogo>
                    </div>

                    {/* Nav Bar */}
                    <div className="nav-bar">
                        <Nav></Nav> 
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
