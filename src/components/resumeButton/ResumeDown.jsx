import './ResumeDown.css';

const ResumeDown = () => {

    const resume = "/Landon_Linn_Resume_October_2025.pdf"

    return(
        <div class="resume-butt">
            <a href={resume} download>Download Resume</a>
        </div>
    );
};

export default ResumeDown;