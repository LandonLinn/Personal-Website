import React from "react";
import "./NameLogo.css";
import { Link } from "react-router";

// Import asset Images
import personalLogo from "../../assets/personal-logo-transparent.png"

// Import React elements
import { useLocation, useNavigate } from "react-router-dom";

const NameLogo = () => {

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

    return (
        <div className="name-title">
            <Link to="/" onClick={handleHomeClick}>
                <div className="name-info">
                    <img src={personalLogo} alt="Personal Logo" className="logo" />
                    <div className="name-occ">
                        <h2>Landon Linn</h2>
                        <p>Software Developer</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NameLogo;