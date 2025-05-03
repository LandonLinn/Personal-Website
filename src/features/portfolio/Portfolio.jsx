import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toTop } from '../../utils/helpers';

// Import Components
import Portcard from "../../components/portfolioCard/Portcard";
import Modal from "../../components/modal/Modal";

const Portfolio = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
          id: "1",
          coverImg: "../src/assets/Portfolio Images/IBC/IBCTraffic Website.png",
          title: "IBC Traffic Website",
          tag: "Front-End",
          desc: "During my internship at IBC Traffic, I was tasked with redesigning the company’s old website using Squarespace. My primary goal was to enhance the user experience by creating a more intuitive, visually appealing, and mobile-responsive design. I focused on simplifying navigation, optimizing page layouts, and improving overall usability. By leveraging Squarespace’s built-in tools and custom code, I successfully updated the website to better meet the needs of both the company and its clients. I also ensured that the design aligned with the company's brand, making the site more engaging and easier to use. This project allowed me to refine my design skills while learning to work within a website-building platform and collaborating with the team to meet business objectives.",
          role: "Web Developer Intern",
          demoLink: "https://www.ibctraffic.com/",
          behanceLink: "",
          githubLink: "",        
          overview: "IBC Traffic needed a modern, mobile-friendly website to better showcase their services and improve lead generation",
          tools: ["HTML", "CSS", "JavaScript", "Figma", "Squarespace"],
          features: ["Responsive design", "Custom code blocks in Squarespace", "Usability testing"],
          results: [
            "Improved responsive design skills by implementing mobile-first layouts using HTML, CSS media queries, and flexible grid systems.",
            "Built and customized website components using raw HTML, CSS, and JavaScript to enhance user experience beyond platform templates.",
            "Strengthened front-end development proficiency through hands-on coding of dynamic elements, interactive features, and custom styling.",
            "Earned a consulting role with the company post-project based on strong performance, communication, and delivery of client-focused solutions.",
          ],
          beforeImg: [
            {
                src: "../src/assets/Portfolio Images/IBC/Before/ibctraffic.com_.png",
                alt: "Before - Homepage",
                size: "tall",
            },
            {
                src: "../src/assets/Portfolio Images/IBC/Before/ibctraffic.com_overview.png",
                alt: "Before - Overview",
                size: "tall",
            },
            {
                src: "../src/assets/Portfolio Images/IBC/Before/ibctraffic.com_contact-us.png",
                alt: "Before - Contact Page",
                size: "wide",
            },
          ],
          afterImg: [
            {
                src: "../src/assets/Portfolio Images/IBC/After/www.ibctraffic.com_.png",
                alt: "After - Homepage",
                size: "tall",
            },
            {
                src: "../src/assets/Portfolio Images/IBC/After/www.ibctraffic.com_about.png",
                alt: "After - About Page",
                size: "tall",
            },
            {
                src: "../src/assets/Portfolio Images/IBC/After/www.ibctraffic.com_contact.png",
                alt: "After - Contact Page",
                size: "tall",
            },
            {
                src: "../src/assets/Portfolio Images/IBC/After/www.ibctraffic.com_insights-news.png",
                alt: "After - Insights & News Page",
                size: "tall",
            },
          ],
          afterVid: "../src/assets/Portfolio Images/IBC/After/IBCVid.mp4",
        },
    ];

    const handleOpenModal = (project) => {
        setActiveProject(project);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setActiveProject(null);
        setModalOpen(false);
    };

    return(
        <section id="portfolio-section" className="portfolio-container">
            <h1 className="title">PORTFOLIO</h1>

            <div className="portCard-container">
                {projects.map((project) => (
                    <Portcard 
                        coverImg={project.coverImg}
                        title={project.title}
                        tag={project.tag}
                        desc={project.desc}
                        demoLink={project.demoLink}
                        onDetailsClick={() => handleOpenModal(project)}
                    />
                ))}

                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {activeProject && (
                        <div className="modalContent">

                            {/* Title & Tag Line */}
                            <div className="modalTitle">
                                <h2>{activeProject.title}</h2>
                                <p className="cardTag">{activeProject.tag}</p>
                            </div>
                            <p className="tagLine">Redesigning a Corporate Site for Modern UI/UX</p>

                            <hr />

                            {/* Role & Project Links */}
                            <h3>Description:</h3>
                            <p>{activeProject.desc}</p>
                            <br />
                            <h3>Role:</h3>
                            <p>{activeProject.role}</p>
                            <br />
                            <h3>Links to Project:</h3>
                            <p>Live Demo: <a href={activeProject.demoLink} target="blank">Preview</a></p>
                            {activeProject.behanceLink !== "" && (
                                <p>Project Images: <a href={activeProject.behanceLink} target="blank">Preview</a></p>
                            )}
                            {activeProject.githubLink !== "" && (
                                <p>Project Files: <a href={activeProject.githubLink} target="blank">Preview</a></p>
                            )}

                            <hr />

                            {/* Overview / Problem Statement */}
                            <h2>Project Overview:</h2>
                            <p>{activeProject.overview}</p>


                            {/* Tools & Technologies */}
                            <h2>Tools & Technologies:</h2>
                            <ul>
                                {activeProject.tools.map((tool, index) => 
                                    <li key={index}>{tool}</li>
                                )}
                            </ul>
                                
                            {/* Key Features or Technical Challenges */}
                            <h2>Key Features:</h2>
                            <ul>
                                {activeProject.features.map((feature, index) => 
                                    <li key={index}>{feature}</li>
                                )}
                            </ul>
                            
                            {/* Screenshots or Preview */}
                            <h2>Project Images:</h2>
                            {activeProject.title === "IBC Traffic Website" && (
                                <>
                                    <h3>Before:</h3>
                                    <div className="beforeImg-container">
                                        {activeProject.beforeImg.map((before, index) => 
                                            <img 
                                                key={index} 
                                                src={before.src} 
                                                alt={before.alt} 
                                                className={`screenshot ${before.size}`}
                                            />
                                        )}
                                    </div>
                                </>
                            )}

                            {activeProject.title === "IBC Traffic Website" && (
                                <>
                                    <h3>After:</h3>
                                    <div className="afterImg-container">
                                        {activeProject.afterImg.map((after, index) => 
                                            <img 
                                                key={index} 
                                                src={after.src} 
                                                alt={after.alt} 
                                                className={`screenshot ${after.size}`}
                                            />
                                        )}
                                        
                                        {/* Video */}
                                        <video 
                                            src={activeProject.afterVid}
                                            className="video"
                                            autoPlay
                                            muted
                                            loop
                                        />
                                    </div>
                                </>
                            )}

                            {/* Results / What You Learned */}
                            <h2>Results & Lessons Learned:</h2>
                            <ul>
                                {activeProject.results.map((result, index) => 
                                    <li key={index}>{result}</li>
                                )}
                            </ul>
                            
                        </div>
                    )}
                </Modal>
            </div>

            <div className="viewAll-container">
                <Link to="/Portfolio" onClick={toTop}>
                    <button className="viewAllButt">View All</button>
                </Link>
            </div>

        </section>
        
    );
};

export default Portfolio;