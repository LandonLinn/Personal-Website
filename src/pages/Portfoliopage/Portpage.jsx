import React from "react";
import "./Portpage.css";
import { useState } from "react";

// Import Images
// -- IBC Website Project
import ibcCoverImg from "../../assets/Portfolio Images/IBC/IBCTraffic Website.png";
import beforeIbcHome from "../../assets/Portfolio Images/IBC/Before/ibctraffic.com_.png";
import beforeIbcOverview from "../../assets/Portfolio Images/IBC/Before/ibctraffic.com_overview.png";
import beforeIbcContact from "../../assets/Portfolio Images/IBC/Before/ibctraffic.com_contact-us.png";
import afterIbcHome from "../../assets/Portfolio Images/IBC/After/www.ibctraffic.com_.png";
import afterIbcAbout from "../../assets/Portfolio Images/IBC/After/www.ibctraffic.com_about.png";
import afterIbcContact from "../../assets/Portfolio Images/IBC/After/www.ibctraffic.com_contact.png";
import afterIbcInsights from "../../assets/Portfolio Images/IBC/After/www.ibctraffic.com_insights-news.png";
import afterIbcDemoVid from "../../assets/Portfolio Images/IBC/After/IBCVid.mp4";

// -- Personal Website Project
import persWebCoverImg from "../../assets/Portfolio Images/Personal_Website/PersWeb_Cover.png";
import persWebHomepage from "../../assets/Portfolio Images/Personal_Website/PersWeb_Cover.png";
import persWebPortfolio from "../../assets/Portfolio Images/Personal_Website/PersWeb_Portfolio.png";
import persWebContact from "../../assets/Portfolio Images/Personal_Website/PersWeb_Contact.png";
import persWebDemoVid from "../../assets/Portfolio Images/Personal_Website/PerWebVid.mp4";

// Import Components
import Portcard from "../../components/portfolioCard/Portcard";
import Modal from "../../components/modal/Modal";


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
    const projects = [
            // IBC Traffic
            {
              id: "1",
              coverImg: ibcCoverImg,
              title: "IBC Traffic Website",
              tag: "Front-End",
              category: "Front-End",
              tagline: "Redesigning a Corporate Site for Modern UI/UX",
              desc: "During my internship at IBC Traffic, I was tasked with redesigning the company’s former website using Squarespace. My primary goal was to enhance the user experience by creating a more intuitive, visually appealing, and mobile-responsive design. I focused on simplifying navigation, optimizing page layouts, and improving overall usability. By leveraging Squarespace’s built-in tools and custom code, I successfully updated the website to better meet the needs of both the company and its clients. I also ensured that the design aligned with the company's brand, making the site more engaging and easier to use. This project allowed me to refine my design skills while learning to work within a website-building platform and collaborating with the team to meet business objectives.",
              role: "Web Developer Intern",
              overview: "IBC Traffic needed a modern, mobile-friendly website to better showcase their services and improve lead generation.",
              demoLink: "https://www.ibctraffic.com/",
              behanceLink: "",
              githubLink: "",        
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
                    src: beforeIbcHome,
                    alt: "Before - Homepage",
                    size: "tall",
                },
                {
                    src: beforeIbcOverview,
                    alt: "Before - Overview",
                    size: "tall",
                },
                {
                    src: beforeIbcContact,
                    alt: "Before - Contact Page",
                    size: "wide",
                },
              ],
              afterImg: [
                {
                    src: afterIbcHome,
                    alt: "After - Homepage",
                    size: "tall",
                },
                {
                    src: afterIbcAbout,
                    alt: "After - About Page",
                    size: "tall",
                },
                {
                    src: afterIbcContact,
                    alt: "After - Contact Page",
                    size: "tall",
                },
                {
                    src: afterIbcInsights,
                    alt: "After - Insights & News Page",
                    size: "tall",
                },
              ],
              afterVid: afterIbcDemoVid,
            },
            // Personal Website
            {
                id: "2",
                coverImg: persWebCoverImg,
                title: "Personal Website",
                tag: "Front-End",
                category: "Front-End",
                tagline: "Modern React & Vite portfolio - fast, responsive, and built to showcase my projects.",
                desc: "A modern portfolio site built from scratch with React and Vite to showcase my projects, blog, and contact form in a fast, accessible, and engaging UI.",
                role: "Software Developer",
                demoLink: "https://landonlinn.com/",
                behanceLink: "",
                githubLink: "https://github.com/LandonLinn/Personal-Website",      
                overview: "Designed and developed my personal portfolio to reflect my development and UX skills—with mobile-first responsive layouts, SEO-friendly structure, and smooth animations for enhanced user engagement.",  
                tools: ["HTML", "CSS (Flexbox & Grid)", "JavaScript (ES6+)", "React", "Vite.js", "Email.js"],
                features: [
                    "Responsive design across 320px–4K.",
                    "SEO-optimized meta tags.",
                ],
                results: [
                    "Ensured WCAG AA accessibility compliance for all major sections.",
                    "Deepened React expertise by mastering useState, client-side routing with React Router, and smooth in-page scrolling via react-scroll.",
                    "Streamlined component architecture with prop-driven design patterns, eliminating duplication and boosting maintainability.",
                ],
                projImg: [
                {
                    src: persWebHomepage,
                    alt: "Landon's Personal Website - Homepage",
                    size: "tall",
                },
                {
                    src: persWebPortfolio,
                    alt: "Landon's Personal Website - Portfolio Page",
                    size: "tall",
                },            
                {
                    src: persWebContact,
                    alt: "Landon's Personal Website - Contact Page",
                    size: "tall",
                },
                
                ],
                projVid: persWebDemoVid,
            },
    ];

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
        <div className="app-container">
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

                    <div className="">
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
                                        src={activeProject.projVid}
                                        className="video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline 
                                        webkit-playsinline
                                    />
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
                                            src={activeProject.afterVid}
                                            className="video"
                                            autoPlay
                                            muted
                                            loop
                                        />
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
        </div>
    );
}

export default Portpage;