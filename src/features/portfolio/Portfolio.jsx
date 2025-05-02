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
          img: "../src/assets/Portfolio Images/IBCTraffic Website.png",
          title: "IBC Traffic Website",
          tag: "Front-End",
          desc: "During my internship at IBC Traffic, I was tasked with redesigning the company’s old website using Squarespace. My primary goal was to enhance the user experience by creating a more intuitive, visually appealing, and mobile-responsive design. I focused on simplifying navigation, optimizing page layouts, and improving overall usability. By leveraging Squarespace’s built-in tools and custom code, I successfully updated the website to better meet the needs of both the company and its clients. I also ensured that the design aligned with the company's brand, making the site more engaging and easier to use. This project allowed me to refine my design skills while learning to work within a website-building platform and collaborating with the team to meet business objectives.",
          demoLink: "https://www.ibctraffic.com/",
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
                        img={project.img}
                        title={project.title}
                        tag={project.tag}
                        desc={project.desc}
                        demoLink={project.demoLink}
                        onDetailsClick={() => handleOpenModal(project)}
                    />
                ))}

                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {activeProject && (
                    <>
                        <h2>{activeProject.title}</h2>
                        <p>{activeProject.tag}</p>
                    </>
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