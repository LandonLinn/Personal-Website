import React from "react";
import "./Hero.css";

// Components
import ResumeDown from "../../components/resumeButton/ResumeDown";
import SocialButts from "../../components/socialButtons/SocialButts";

const Hero = () => {
    return(
        <section class="hero-container">
            <div class="hero-section">
                <div class="hero-img">
                    <img src="../src/assets/Headshot-colored.png" alt="Landon's Headshot" />
                </div>
                <div class="hero-description">
                    <h1>Hey, I'm <span>Landon Linn</span></h1>
                    <h3>Software Developer</h3>
                    <p>I'm a passionate web developer and UX designer with a strong focus on building engaging, user-friendly experiences. With expertise in HTML, CSS, JavaScript, and Python, I create intuitive and scalable websites. I’m always eager to learn and grow, whether it’s through coding, design, or new tech challenges. Let’s connect and create something amazing!</p>
                    <ResumeDown />
                    <SocialButts />
                </div>
            </div>
            {/* <div class="wave-divider">
                <img src="assets/wave-divider.svg" alt="">
            </div> */}
        </section>
    );
};

export default Hero;