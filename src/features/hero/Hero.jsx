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
                <div class="hero-description">
                    <h1>Hello, I'm <span>Landon Linn</span></h1>
                    <h3>Software Developer</h3>
                    <p>I build clean, scalable, and user-first web experiences with HTML, CSS, JavaScript, 
                        and Python. With a foundation in UX design and a passion for intuitive software, 
                        I love solving real-world problems through code. I’m currently open to full-time roles, 
                        freelance work, and creative collaborations. Let’s build something impactful together!
</p>
                    <ResumeDown />
                    <SocialButts />
                </div>
            </div>
        </section>
    );
};

export default Hero;