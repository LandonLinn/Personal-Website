import { useEffect, useState } from "react";
import "./About.css";
import { Link } from "react-router";
import {toTop } from "../../utils/helpers"

// import Data
import { certifications } from "../../utils/certificationData";

// Import Images
import extLinkIcon from "../../assets/icons/external-link-icon.svg"

const About = () => {

  return (
    <section id="about-section" className="about-container">
      <div className="content-wrapper">
        <h1 className="title">ABOUT ME</h1>

        {/* About & Services Section */}
        <div className="about-and-services"> 
          {/* Certification Section */}
          <div className="cert-section">
            <h2>PROFESSIONAL CERTIFICATIONS</h2>
            <div className="cert-card-container">
              {certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                  <img 
                      src={cert.img} 
                      alt={cert.name}   
                    />                  
                    <div className="cert-card-content">
                        {/* <img 
                          className="cert-badge"
                          src={cert.icon} 
                          alt={`${cert.name} Icon`} 
                        /> */}
                        <h3>{cert.name.toUpperCase()}</h3>
                        <p>{cert.completion}</p>
                      <div className="cardLinks">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="card-link">
                              View Cert
                              <img src={extLinkIcon} className="link-icon" alt="arrow" />
                          </a>
                      </div>
                    </div>
                </div> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
