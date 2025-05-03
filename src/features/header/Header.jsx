import React from "react";
import "./Header.css";

// Import NAV Component
import Nav from "../../components/Nav/Nav";
import NameLogo from "../../components/namelogo/NameLogo";

const Header = () => {
    

    return(
        <header>
            <div className="content-wrapper">
                <div className="header-container">
                    <div className="name-title">
                        <NameLogo></NameLogo>
                    </div>
                    <div className="nav-bar">
                        <Nav></Nav>                     
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
