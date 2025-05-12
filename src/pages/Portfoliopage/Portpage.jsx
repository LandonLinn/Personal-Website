import React from "react";
import "./Portpage.css";
import { useState } from "react";

// Import Components
import Portcard from "../../components/portfolioCard/Portcard";
import Modal from "../../components/modal/Modal";

// Import project Array
import { projects } from "../../utils/projectsData";

const Portpage = () => {

    // Use States
    const [isModalOpen, setModalOpen] = useState(false); // Open / Close Modals
    const [activeProject, setActiveProject] = useState(null); // Active Projects
    const [selectedCategory, setSelectedCategory] = useState("all"); // Project Filtering

    // Array for Categories
    const categories = [
        {
            name: "All Projects",
            value: "all",
            tagline: "A collection of all the projects I have worked on, showcasing practices, tests, and full projects.",
        }, 
        {
            name: "Front-End",
            value: "front",
            tagline: "A collection of front-end projects focusing on user interface design, responsiveness, and interactivity.",
        }, 
        {
            name: "Back-End",
            value: "back",
            tagline: "A collection of back-end projects highlighting server-side logic, database management, and API integration.",
        },
        {
            name: "Full-Stack",
            value: "full",
            tagline: "A collection of full-stack projects combining both front-end and back-end technologies to deliver complete solutions.",
        }, 
        {
            name: "Graphic Design",
            value: "graphic",
            tagline: "A collection of graphic design work consisting of UI/UX Designs, Logos, and more.",
        },
    ];

    //Array for Categories


    // Open Modal
    const handleOpenModal = (project) => {
        setActiveProject(project);
        setModalOpen(true);
    };

    // Close Modal
    const handleCloseModal = () => {
        setActiveProject(null);
        setModalOpen(false);
    };

    const selectedCategoryObj = categories.find(
        (cat) => cat.value === selectedCategory
      );


    return(
        <main className="app-container">
            <div className="portPage">
                <div className="portPage-container">
                    <h1 className="title">Portfolio</h1>

                    {/* Dropdown Label */}
                    <label htmlFor="project-filters">Categories:</label>

                    {/* Dropdown Selection */}
                    <div className="projectFilters-container">
                        <select 
                        name="project-filters" 
                        id="project-filters"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                        {categories.map((categoryName) => (
                            <option 
                            key={categoryName.value}
                            value={categoryName.value}
                            >
                            {categoryName.name}
                            </option>          
                        ))}
                        </select> 

                        {/* Tagline */}
                        {selectedCategoryObj?.tagline && (
                            <p className="category-tagline">{selectedCategoryObj.tagline}</p>
                        )}
                    </div>

                    <div>
                        {selectedCategory === "all" ? (
                            // Grouped view by category
                            Object.entries(
                            projects.reduce((acc, project) => {
                                if (!acc[project.category]) acc[project.category] = [];
                                acc[project.category].push(project);
                                return acc;
                            }, {})
                            ).map(([category, groupedProjects]) => {
                            const categoryInfo = categories.find(cat => cat.value === category);

                            return (
                                <div key={category} className="project-category-group">
                                <h2 className="category-header">{categoryInfo?.name || category}</h2>

                                {groupedProjects.length > 0 ? (
                                    <div className="project-category-grid">
                                    {groupedProjects.map(project => (
                                        <Portcard
                                        key={project.title}
                                        coverImg={project.coverImg}
                                        title={project.title}
                                        tag={project.tag}
                                        desc={project.desc}
                                        demoLink={project.demoLink}
                                        onDetailsClick={() => handleOpenModal(project)}
                                        />
                                    ))}
                                    </div>
                                ) : (
                                    <p className="no-projects-message">No projects in this category yet.</p>
                                )}
                                </div>
                            );
                            })
                        ) : (
                            // Filtered flat view
                            (() => {
                            const filteredProjects = projects.filter(
                                project => project.category === selectedCategory
                            );

                            return filteredProjects.length > 0 ? (
                                <div className="project-category-grid">
                                {filteredProjects.map(project => (
                                    <Portcard
                                    key={project.title}
                                    coverImg={project.coverImg}
                                    title={project.title}
                                    tag={project.tag}
                                    desc={project.desc}
                                    demoLink={project.demoLink}
                                    onDetailsClick={() => handleOpenModal(project)}
                                    />
                                ))}
                                </div>
                            ) : (
                                <p className="no-projects-message">No project to show yet.</p>
                            );
                            })()
                        )}

                        {/* Project Modal */}
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                            {activeProject && (
                            <div className="modalContent">
                                <div className="modalTitle">
                                <h2>{activeProject.title}</h2>
                                <p className="cardTag">{activeProject.tag}</p>
                                </div>
                                <p className="tagLine">Redesigning a Corporate Site for Modern UI/UX</p>

                                <hr />

                                <h3>Description:</h3>
                                <p>{activeProject.desc}</p>
                                <br />
                                <h3>Role:</h3>
                                <p>{activeProject.role}</p>
                                <br />
                                <h3>Links to Project:</h3>
                                <p>
                                Live Demo: <a href={activeProject.demoLink} className="projectLinks" target="_blank">Preview</a>
                                </p>
                                {activeProject.behanceLink && (
                                <p>
                                    Project Images: <a href={activeProject.behanceLink} className="projectLinks" target="_blank">Preview</a>
                                </p>
                                )}
                                {activeProject.githubLink && (
                                <p>
                                    Project Files: <a href={activeProject.githubLink} className="projectLinks" target="_blank">Preview</a>
                                </p>
                                )}

                                <hr />

                                <h2>Project Overview:</h2>
                                <p>{activeProject.overview}</p>

                                <h2>Tools & Technologies:</h2>
                                <ul>
                                {activeProject.tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                                </ul>

                                <h2>Key Features:</h2>
                                <ul>
                                {activeProject.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
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

                                <h2>Results & Lessons Learned:</h2>
                                <ul>
                                {activeProject.results.map((result, index) => (
                                    <li key={index}>{result}</li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </Modal>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Portpage;