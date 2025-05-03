import React from "react";
import "./Skills.css";

// Import UseState
import { useState } from "react";

const Skills = () => {

    // Store Year
    let year = new Date().getFullYear();
    
    // Use State for Selecting Categories
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Array for Categories
    const categories = [
        {
            name: "All Skills",
            value: "all",
        }, 
        {
            name: "Artificial Intelligence",
            value: "ai",
        }, 
        {
            name: "Development Languages",
            value: "devlang",
        },
        {
            name: "Frameworks/Libraries",
            value: "framelibs",
        }, 
        {
            name: "Databases",
            value: "db",
        }, 
        {
            name: "Tools",
            value: "tools",
        }, 
        {
            name: "Cloud & DevOps",
            value: "cloudops",
        }, 
        {
            name: "Personal Skills",
            value: "pers",
        },
    ];

    // Array for Skills
    const skills = [

        // Artificial Intelligence
        {
            id: "1",
            icon: "../src/assets/icons/Skills/Watson AI.png",
            name: "IBM Watson AI",
            experience: year - 2024,
            category: "ai",
        },
        {
            id: "2",
            icon: "../src/assets/icons/Skills/generative AI.png",
            name: "Generative AI",
            experience: year - 2022,
            category: "ai",
        },

        // Development Languages
        {
            id: "3",
            icon: "../src/assets/icons/Skills/HTML.png",
            name: "HTML",
            experience: year - 2022,
            category: "devlang",
        },
        {
            id: "4",
            icon: "../src/assets/icons/Skills/CSS.png",
            name: "CSS",
            experience: year - 2022,
            category: "devlang",
        },
        {
            id: "5",
            icon: "../src/assets/icons/Skills/JavaScript.png",
            name: "JavaScript",
            experience: year - 2022,
            category: "devlang",
        },
        {
            id: "6",
            icon: "../src/assets/icons/Skills/python.png",
            name: "Python",
            experience: year - 2023,
            category: "devlang",
        },
        {
            id: "7",
            icon: "../src/assets/icons/Skills/SQL.png",
            name: "SQL",
            experience: year - 2023,
            category: "devlang",
        },
        {
            id: "8",
            icon: "../src/assets/icons/Skills/Git.png",
            name: "Git",
            experience: year - 2022,
            category: "devlang",
        },
        {
            id: "9",
            icon: "../src/assets/icons/Skills/YAML.png",
            name: "YAML",
            experience: year - 2022,
            category: "devlang",
        },

        // Frameworks/Libraries
        {
            id: "10",
            icon: "../src/assets/icons/Skills/bootstrap.png",
            name: "Bootstrap",
            experience: year - 2022,
            category: "framelibs",
        },
        {
            id: "11",
            icon: "../src/assets/icons/Skills/React.png",
            name: "React",
            experience: year - 2023,
            category: "framelibs",
        },
        {
            id: "12",
            icon: "../src/assets/icons/Skills/flask.png",
            name: "Flask",
            experience: year - 2024,
            category: "framelibs",
        },
        {
            id: "13",
            icon: "../src/assets/icons/Skills/node.png",
            name: "Node",
            experience: year - 2023,
            category: "framelibs",
        },
        {
            id: "14",
            icon: "../src/assets/icons/Skills/express.png",
            name: "Express",
            experience: year - 2024,
            category: "framelibs",
        },
        {
            id: "15",
            icon: "../src/assets/icons/Skills/django.png",
            name: "Django",
            experience: year - 2024,
            category: "framelibs",
        },
        {
            id: "16",
            icon: "../src/assets/icons/Skills/pandas.png",
            name: "Pandas",
            experience: year - 2024,
            category: "framelibs",
        },
        {
            id: "17",
            icon: "../src/assets/icons/Skills/Matplotlib.png",
            name: "Matplotlib",
            experience: year - 2024,
            category: "framelibs",
        },
        {
            id: "18",
            icon: "../src/assets/icons/Skills/redux.png",
            name: "Redux",
            experience: year - 2024,
            category: "framelibs",
        },

        // Databases
        {
            id: "19",
            icon: "../src/assets/icons/Skills/sql.png",
            name: "SQL",
            experience: year - 2023,
            category: "db",
        },
        {
            id: "20",
            icon: "../src/assets/icons/Skills/MSAccess.png",
            name: "Microsoft Access",
            experience: year - 2023,
            category: "db",
        },
        {
            id: "21",
            icon: "../src/assets/icons/Skills/DatabaseDesign.png",
            name: "Database Design",
            experience: year - 2024,
            category: "db",
        },
        {
            id: "22",
            icon: "../src/assets/icons/Skills/django ORM.png",
            name: "Django ORM",
            experience: year - 2024,
            category: "db",
        },

        // Tools
        {
            id: "23",
            icon: "../src/assets/icons/Skills/Git.png",
            name: "Git",
            experience: year - 2023,
            category: "tools",
        },
        {
            id: "24",
            icon: "../src/assets/icons/Skills/github-icon-colored.png",
            name: "Github",
            experience: year - 2023,
            category: "tools",
        },
        {
            id: "25",
            icon: "../src/assets/icons/Skills/figma.png",
            name: "Figma",
            experience: year - 2023,
            category: "tools",
        },
        {
            id: "26",
            icon: "../src/assets/icons/Skills/MSoffice.png",
            name: "Microsoft Office",
            experience: year - 2023,
            category: "tools",
        },
        {
            id: "27",
            icon: "../src/assets/icons/Skills/photoshop.png",
            name: "Adobe Photoshop",
            experience: year - 2019,
            category: "tools",
        },
        {
            id: "28",
            icon: "../src/assets/icons/Skills/Illustrator.png",
            name: "Adobe Illustrator",
            experience: year - 2024,
            category: "tools",
        },
        {
            id: "29",
            icon: "../src/assets/icons/Skills/docker.png",
            name: "Docker",
            experience: year - 2024,
            category: "tools",
        },
        {
            id: "30",
            icon: "../src/assets/icons/Skills/kubernetes.png",
            name: "Kubernetes",
            experience: year - 2024,
            category: "tools",
        },
        {
            id: "31",
            icon: "../src/assets/icons/Skills/openshift.png",
            name: "OpenShift",
            experience: year - 2024,
            category: "tools",
        },

        // Cloud & DevOps
        {
            id: "32",
            icon: "../src/assets/icons/Skills/aws.png",
            name: "AWS",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "33",
            icon: "../src/assets/icons/Skills/azure.png",
            name: "Microsoft Azure",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "34",
            icon: "../src/assets/icons/Skills/google cloud.png",
            name: "Google Cloud",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "35",
            icon: "../src/assets/icons/Skills/IBM Cloud.png",
            name: "IBM Cloud",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "36",
            icon: "../src/assets/icons/Skills/Dev Ops.png",
            name: "DevOps (CI/CD Pipelines)",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "37",
            icon: "../src/assets/icons/Skills/serverless.png",
            name: "Serverless Technologies",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "38",
            icon: "../src/assets/icons/Skills/microservices.png",
            name: "Microservices",
            experience: year - 2024,
            category: "cloudops",
        },
        {
            id: "39",
            icon: "../src/assets/icons/Skills/cloud native.png",
            name: "Cloud-Native Development",
            experience: year - 2024,
            category: "cloudops",
        },

        // Personal
        {
            id: "40",
            icon: "../src/assets/icons/Skills/tech aptitude.png",
            name: "Solid Technical Aptitude",
            experience: "",
            category: "pers",
        },
        {
            id: "41",
            icon: "../src/assets/icons/Skills/group leader.png",
            name: "Group Leadership",
            experience: "",
            category: "pers",
        },
        {
            id: "42",
            icon: "../src/assets/icons/Skills/group leader.png",
            name: "Group Leadership",
            experience: "",
            category: "pers",
        },
        {
            id: "43",
            icon: "../src/assets/icons/Skills/agile.png",
            name: "Agile Methodologies",
            experience: "",
            category: "pers",
        },
        {
            id: "44",
            icon: "../src/assets/icons/Skills/software arch.png",
            name: "Software Architecture Principles",
            experience: "",
            category: "pers",
        },

    ];

    return(
        <section className="skills-container" id="skills-section">
            <h1 className="title">SKILLS</h1>

            {/* Dropdown Label */}
            <label htmlFor="skill-filters">Categories:</label>

            {/* Dropdown Selection */}
            <div className="skillFilters-container">
                <select 
                name="skill-filters" 
                id="skill-filters"
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
            </div>

            {/* Skill Cards */}
            <div className="skillCard-container">
                {selectedCategory === "all" ? (
                // Grouped view when 'All' is selected
                Object.entries(
                    skills.reduce((acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                    }, {})
                ).map(([category, groupedSkills]) => (
                    <div key={category} className="skill-category-group">
                    <h2 className="category-header">
                    { 
                        categories.find((cat) => cat.value === category)?.name || category
                    }
                    </h2>
                    <div className="skill-category-grid">
                        {groupedSkills.map((skill) => (
                        <div className="skillCard" key={skill.name}>
                            <div className="skillCard-content">
                            <img src={skill.icon} alt={skill.name} />
                            <h3>{skill.name}</h3>
                            {skill.experience !== "" && (
                                <p>{skill.experience} Years of Experience</p>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                ))
                ) : (
                    // Filtered view for selected category
                    <div className="skill-category-grid individual">
                    {skills
                        .filter((skill) => skill.category === selectedCategory)
                        .map((skill) => (
                        <div className="skillCard" key={skill.name}>
                            <div className="skillCard-content">
                            <img src={skill.icon} alt={skill.name} />
                            <h3>{skill.name}</h3>
                            {skill.experience !== "" && (
                                <p>{skill.experience} Years of Experience</p>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </section>

    );
}

export default Skills;