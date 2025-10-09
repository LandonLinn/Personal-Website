import "./Hero.css";

// Import Images
import headshot from "../../assets/headshot-colored.png"

// Components
import ResumeDown from "../../components/resumeButton/ResumeDown";
import SocialButts from "../../components/socialButtons/SocialButts";

const Hero = () => {
    return(
        <section className="hero-container">
            <div className="hero-section">
                <div className="hero-img">
                    <img src={headshot} alt="Headshot picture of Landon; He is wearing a black shirt, arms crossed, and smiling." />
                    <hr className="divider" />
                </div>
                <div className="hero-description">
                    <div className="description-title">
                        <h2 className="subtitle">Hello,</h2>
                        <h1 className="title">I'M LANDON LINN</h1>
                        <h3><em>SOFTWARE DEVELOPER</em></h3>
                    </div>
                    
                    <p> I build user-first web experiences utilizing different strategies. With a
                        foundation in User Experience Design (UXD) and a passion for intuitive software development, I
                        strive to solve real-world business challenges.
                    </p>
                    <div className="hero-buttons-container">
                        <ResumeDown />

                        {/* Work With Me Button */}
                        <div class="hero-button">
                            <a href="https://linniumtechnologies.com/" target="_blank" rel="noopener noreferrer">Work With Me</a>
                        </div>
                    </div>
                    

                    <SocialButts />
                </div>
            </div>
        </section>
    );
};

export default Hero;