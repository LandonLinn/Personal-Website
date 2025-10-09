import { useEffect, useState } from "react";
import "./About.css";
import { Link } from "react-router";
import {toTop } from "../../utils/helpers"

// import Data
import { certifications } from "../../utils/certificationData";

// Import Images
import extLinkIcon from "../../assets/icons/external-link-icon.svg"

const About = () => {
  const len = certifications.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((i) => (i + 1) % len) 
  const prev = () => setCurrentIndex((i) => (i - 1 + len) % len) 
  const at = (offset) => certifications[(currentIndex + offset + len) % len];

  return (
    <section id="about-section" className="about-container">
      <div className="content-wrapper">
        <h1 className="title">ABOUT ME</h1>

        {/* About & Services Section */}
        <div className="about-and-services"> 

          {/* Certification Section */}
           <div className="cert-section">
      <div className="title-controls">
        <h2>PROFESSIONAL CERTIFICATIONS</h2>

        <div className="cert-controls">
          <button type="button" onClick={prev} aria-label="Previous">
            &lt;
          </button>
          <button type="button" onClick={next} aria-label="Next">
            &gt;
          </button>
        </div>

      </div>

        <div className="cert-card-container">
          {[0, 1, 2].map((offset) => {
            const cert = at(offset);
            return (
              <div className="cert-card" key={cert.id}>
                <img src={cert.img} alt={cert.name} />
                <div className="cert-card-content">
                  <div className="cert-card-title">
                    <img
                      className="cert-badge"
                      src={cert.icon}
                      alt={`${cert.name} Icon`}
                    />
                    <h3>{cert.name.toUpperCase()}</h3>
                  </div>
                  <p>{cert.completion}</p>
                  <div className="cardLinks">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      View Cert
                      <img src={extLinkIcon} className="link-icon" alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>  
            {/* Page Tracker */}
              <div className="cert-index-tracker-container">
                {certifications.map((c, i) => (
                  <div 
                    className={`cert-index-tracker ${i === currentIndex ? "tracker-active" : ""}`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setCurrentIndex(i)}
                  />       
                ))}
              </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default About;
