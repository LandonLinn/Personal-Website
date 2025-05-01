import React from "react";
import "./Skills.css";

const Skills = () => {

    let year = new Date().getFullYear();

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
        {
            id: "3",
            icon: "../src/assets/icons/Skills/HTML.png",
            name: "HTML",
            experience: year - 2022,
            category: "ai",
        },

        // Development Languages
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
            category: "tools",
        },

        // Tools
        {
            id: "23",
            icon: "../src/assets/icons/Skills/.png",
            name: "",
            experience: year - 2024,
            category: "db",
        },

    ];

    return(
        <section className="skills-container" id="skills-section">
            <h1 className="title">Skills</h1>

            {/* Loop for Each Category Button for Filtering */}

            {/* Dropdown Label */}
            <label htmlFor="skill-filters">Categories:</label>

            {/* Dropdown Selection */}
            <div className="skillFilters-container">
                <select name="skill-filters" id="skill-filters">
                
                    {categories.map((categoryName) => 
                        <option value={categoryName.value}>{categoryName.name}</option>          
                    )}
                </select> 
            </div>

            {/* Skill Cards */}
            <div className="skillCard-container">
                    {skills.map((skill) =>
                        <div className="skillCard">
                            <div className="skillCard-content">
                                <img src={skill.icon} alt={skill.name} />
                                <h3>{skill.name}</h3>
                                <p>{skill.experience} Years of Experience</p>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    );
}

export default Skills;