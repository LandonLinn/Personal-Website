import React from "react";
import "./Hero.css";

// Import Images
import headshot from "../../assets/Headshot-colored.png"

// Components
import ResumeDown from "../../components/resumeButton/ResumeDown";
import SocialButts from "../../components/socialButtons/SocialButts";

const Hero = () => {
    return(
        <section class="hero-container">
            <div class="hero-section">
                <div class="hero-img">
                    <img src={headshot} alt="Landon's Headshot" />
                    <hr className="divider" />
                </div>
                <div class="hero-description">
                    <h1>Hey, I'm <span>Landon Linn</span></h1>
                    <h3>Software Developer</h3>
                    <p>I'm a passionate software developer with a strong foundation in UX design, focused on creating intuitive, user-centered software solutions. With experience in HTML, CSS, JavaScript, and Python, I build scalable websites that not only function well—but feel great to use. I’m always eager to grow through coding, design, and solving real-world tech challenges. Let’s connect and build something amazing!</p>
                    <ResumeDown />
                    <SocialButts />
                </div>
            </div>
        </section>
    );
};

export default Hero;