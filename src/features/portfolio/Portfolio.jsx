import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toTop } from '../../utils/helpers';
import { projects } from "../../utils/projectsData";

// Import Components
import Portcard from "../../components/portfolioCard/Portcard";
import Modal from "../../components/modal/Modal";

const Portfolio = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

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
                            <p className="tagLine">{activeProject.tagline}</p>

                            <hr />

                            {/* Role & Project Links */}
                            <h3>Summary:</h3>
                            <p>{activeProject.desc}</p>
                            <br />
                            <h3>Role:</h3>
                            <p>{activeProject.role}</p>
                            <br />
                            <h3>Links to Project:</h3>
                            <p>Live Demo: <a href={activeProject.demoLink} className="projectLinks" target="_blank">Preview</a></p>
                            {activeProject.behanceLink !== "" && (
                                <p>Project Images: <a href={activeProject.behanceLink} className="projectLinks" target="_blank">Preview</a></p>
                            )}
                            {activeProject.githubLink !== "" && (
                                <p>Project Files: <a href={activeProject.githubLink} className="projectLinks" target="_blank">Preview</a></p>
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

                            {activeProject.projImg && (
                                <div className="projImg-container">
                                    {activeProject.projImg.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img.src}
                                        alt={img.alt}
                                        className={`screenshot ${img.size}`}
                                    />
                                    ))}
                                    {activeProject.projVid && (
                                    <video
                                        className="video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline 
                                        webkit-playsinline
                                    >
                                        <source src={activeProject.projVid} type="video/mp4"/>
                                        Your browser does not support he video tag.
                                    </video>
                                    )}
                                </div>
                                )}

                            {activeProject.title === "IBC Traffic Website" && (
                                <>
                                    <h3>Before:</h3>
                                    <div className="projImg-container">
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
                                    <div className="projImg-container">
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
                                            className="video"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline 
                                            webkit-playsinline
                                        >
                                            <source src={activeProject.afterVid} type="video/mp4"/>
                                            Your browser does not support he video tag.
                                        </video>
                                    </div>
                                </>
                            )}

                            {/* Results / What You Learned */}
                            <h2>Key Outcomes:</h2>
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
                <Link to="/portfolio" onClick={toTop}>
                    <button className="viewAllButt">View All</button>
                </Link>
            </div>

        </section>
        
    );
};

export default Portfolio;
