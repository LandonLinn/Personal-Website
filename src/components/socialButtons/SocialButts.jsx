import React from "react";
import "./SocialButts.css"

// Import Links
import linkedin from "../../assets/icons/linkedin-icon.png";
import github   from "../../assets/icons/github-icon.png";
import behance  from "../../assets/icons/behance-icon.png";

const SocialButts = () => (
  <div aria-label="Social Media Links" className="social-butts">
    <a
      href="https://www.linkedin.com/in/landon-linn/"
      className="socialLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedin} alt="LinkedIn" />
    </a>
    <a
      href="https://github.com/LandonLinn"
      className="socialLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={github} alt="GitHub" />
    </a>
    <a
      href="https://www.behance.net/landonlinn1"
      className="socialLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={behance} alt="Behance" />
    </a>
  </div>
);

export default SocialButts;