import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import Components
import Portcard from "../../components/portfolioCard/Portcard";
import Modal from "../../components/modal/Modal";

const Portfolio = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
          id: "1",
          coverImg: "../src/assets/Portfolio Images/IBCTraffic Website.png",
          title: "IBC Traffic Website",
          tag: "Front-End",
          desc: "During my internship at IBC Traffic, I was tasked with redesigning the company’s old website using Squarespace. My primary goal was to enhance the user experience by creating a more intuitive, visually appealing, and mobile-responsive design. I focused on simplifying navigation, optimizing page layouts, and improving overall usability. By leveraging Squarespace’s built-in tools and custom code, I successfully updated the website to better meet the needs of both the company and its clients. I also ensured that the design aligned with the company's brand, making the site more engaging and easier to use. This project allowed me to refine my design skills while learning to work within a website-building platform and collaborating with the team to meet business objectives.",
          role: "Web Developer Intern",
          demoLink: "https://www.ibctraffic.com/",
          tools: ["HTML", "CSS", "JavaScript", "Figma", "Squarespace"],
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
                            <a href={activeProject.demoLink} target="blank">Demo Link</a> <br />

                            <hr />

                            {/* Overview / Problem Statement */}
                            <h3>Project Overview:</h3>


                            <br />
                            {/* Tools & Technologies */}
                            <h3>Tools & Technologies:</h3>
                                <ul>
                                    {activeProject.tools.map((tool, index) => 
                                        <li key={index}>{tool}</li>
                                    )}
                                </ul>
                                
                            <br />
                            {/* Key Features or Technical Challenges */}
                            <h3>Key Features:</h3>

                            <br />
                            {/* UX Focus */}
                            <h3>UX Focus:</h3>

                            <br />
                            {/* Screenshots or Preview */}
                            <h3>Project Images:</h3>

                            <br />
                            {/* Results / What You Learned */}
                            <h3>Results & Lessons Learned:</h3>
                            
                            
                        </div>
                    )}
                </Modal>
            </div>

            <div className="viewAll-container">
                <Link to="/Portfolio">
                    <button className="viewAllButt">View All</button>
                </Link>
            </div>

        </section>
        
    );
};

export default Portfolio;