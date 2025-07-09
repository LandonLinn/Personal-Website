import { useEffect, useState } from "react";
import "./About.css"; // Optional, if you’re using a CSS file for styling
import { Link } from "react-router";
import {toTop } from "../../utils/helpers"

// import Data
import { techStack } from "../../utils/stackData";
import { services } from "../../utils/servicesData";
import { certifications } from "../../utils/certificationData";

// Import Images
import extLinkIcon from "../../assets/icons/external-link-icon.svg"



const About = () => {

  const [serviceIndex, setServiceIndex] = useState(0);
  const [cardsPerView, setcardsPerView] = useState(2);

  useEffect(() => {
    const updateCardsPerView = () => {
      let screenWidth = window.innerWidth;
        if (screenWidth > 620) {
          setcardsPerView(2);
        } else{
          setcardsPerView(1);
        }
    };

    updateCardsPerView(); // Call it

    window.addEventListener("resize", updateCardsPerView); // Add event listener for resize

    return () => window.removeEventListener("resize", updateCardsPerView); // Cleanup
  }, [])

  useEffect(() => {
    if (serviceIndex + cardsPerView > services.length) {
      setServiceIndex(Math.max(0, services.length - cardsPerView));
    }
  }, [cardsPerView]);


  return (
    <section id="about-section" className="about-container">
      <div className="content-wrapper">
        <h1 className="title">ABOUT ME</h1>

        {/* About & Services Section */}
        <div className="about-and-services"> 
          {/* Experience Section */}
          <div className="experience-section"> 
            <h2>What I do</h2>
            <p> Aspiring Full-Stack Developer with a solid foundation in front-end development, UX design, and
                cloud-native technologies. Experienced in building responsive web-based applications using modern
                development frameworks and technologies. Actively seeking software development opportunities in
                front-end, back-end, full stack, and UI/UX-focused development roles.</p>

              <h2>My Stack</h2>
              <div className="stack-card-container">
                {techStack.map((stack, index) => (
                  <div className="stack-card" key={index}>
                    <img 
                      src={stack.img} 
                      alt={stack.alt}
                      title={stack.name}
                      className="stack-img" 
                    />
                  </div>
                ))}
              </div>
          </div>
            
            <hr />

          {/* Service Section */}
          <div className="service-section">

            {/* Controls */}
            <div className="service-section-controls">
              <div className="title-control">
                <h2>My Capabilities</h2>
                <Link 
                    to="/hire"
                    onClick={toTop}
                  >
                    View All
                  </Link>
              </div>
              <div className="card-control">
                <button 
                  className={"control-button"}
                  onClick={() =>
                    setServiceIndex(prev => Math.max(0, prev - 1))
                  }
                  disabled={serviceIndex === 0}
                >
                  &lt;
                </button>
                <button 
                  className={"control-button"}
                  onClick={() =>
                    setServiceIndex(prev =>
                      Math.min(prev + 1, services.length - cardsPerView)
                    )
                  }
                  disabled={serviceIndex >= services.length - cardsPerView}
                >
                  &gt;
                </button>
              </div>
              
            </div>

              {/* Cards */}
              <div className="service-card-container">
                {services.slice(serviceIndex, serviceIndex + cardsPerView) // Service index starts at 0 and slices to the index defined by cardsPerView
                  .map((service, serviceIndex) => (
                  <div className="service-card" key={serviceIndex}>
                    <div className="service-card-img-container">
                      <img 
                        src={service.img} 
                        alt={service.name}
                        className="service-card-img" 
                      />
                    </div>
                    <h3 className="card-title">{service.name}</h3>
                    <ul>
                      <li>{service.one}</li>
                      <li>{service.two}</li>
                      <li>{service.three}</li>
                      <li>{service.four}</li>
                      <li title="More">{service.five}</li>
                    </ul>
                    <Link 
                      to={service.link}
                      onClick={toTop}
                    >
                      <button className="service-button">{service.link === "/contact" ? "Contact Me" : "See More"}</button>
                    </Link>
                  </div>
                ))}
              </div>
          </div> 
        </div>

        {/* Certification Section */}
        <div className="cert-section">
          <h2>Certifications</h2>
          <div className="cert-card-container">
            {certifications.map((cert, index) => (
              <div className="cert-card" key={index}>
                <img 
                    src={cert.img} 
                    alt={cert.name}   
                  />                  
                  <div className="cert-card-content">
                      <img 
                        className="cert-badge"
                        src={cert.icon} 
                        alt={`${cert.name} Icon`} 
                      />
                      <h3>{cert.name}</h3>
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
    </section>
  );
};

export default About;
