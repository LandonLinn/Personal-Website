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
                    <p> I build user-first web experiences utilizing HTML, CSS, JavaScript, SQL, and Python. With a
                        foundation in User Experience Design (UXD) and a passion for intuitive software development, I
                        strive to solve real-world business challenges through effective coding. In addition to a Bachelor of
                        Science degree in Information Technology, I have obtained Technical Software Certifications from
                        IBM, Meta, Google, and Amazon Web Services to further extend my full-stack software development
                        proficiencies. As a Software Developer, I am currently open to full-time employment and consultative
                        engagements.
                    </p>
                    <ResumeDown />
                    <SocialButts />
                </div>
            </div>
        </section>
    );
};

export default Hero;