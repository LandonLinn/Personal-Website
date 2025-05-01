import React from "react";
// Import React elements
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router";

const Nav = () => {

    const location = useLocation(); // Store useLocation as const variable
    const navigate = useNavigate(); // Store useNavigate as const variable

    // If location is on home, scroll to top of Home, else navigate to homepage
        const handleHomeClick = () => {
            if (location.pathname === "/") {
                window.scrollTo({top: "0", behavior: "smooth"});
            }
            else{
                navigate("/");
            }
        };

    return(
        <nav>
            
            <div className="nav-bar">
                <Link to="/" onClick={handleHomeClick}>Home</Link>
                <ScrollLink
                    to="about-container"
                    smooth={true}
                    duration={500}
                    offset={100}
                >
                    About
                </ScrollLink>
                {/* <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link> */}
                {/* <a href="">Blog</a> */}
                <a href="hire.html"><button className="small-butt glow">Hire</button></a>

            </div>
        </nav>
    );
}

export default Nav;