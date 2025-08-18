// Import Images
// -- IBC Website Project
import ibcCoverImg from "../assets/Portfolio Images/IBC/After/ibc-cover-after.png";
import beforeIbcHome from "../assets/Portfolio Images/IBC/Before/ibc-before.png";
import beforeIbcOverview from "../assets/Portfolio Images/IBC/Before/ibc-overview-before.png";
import beforeIbcContact from "../assets/Portfolio Images/IBC/Before/ibc-contact-before.png";
import afterIbcHome from "../assets/Portfolio Images/IBC/After/ibc-home-after.png";
import afterIbcAbout from "../assets/Portfolio Images/IBC/After/ibc-about-after.png";
import afterIbcContact from "../assets/Portfolio Images/IBC/After/ibc-contact-after.png";
import afterIbcInsights from "../assets/Portfolio Images/IBC/After/ibc-insights-after.png";
import afterIbcDemoVid from "../assets/Portfolio Images/IBC/After/ibc-vid.mp4";

// -- Personal Website Project
import persWebCoverImg from "../assets/Portfolio Images/Personal_Website/persweb-cover.png";
import persWebHomepage from "../assets/Portfolio Images/Personal_Website/persweb-cover.png";
import persWebPortfolio from "../assets/Portfolio Images/Personal_Website/persweb-portfolio.png";
import persWebContact from "../assets/Portfolio Images/Personal_Website/persweb-contact.png";
import persWebDemoVid from "../assets/Portfolio Images/Personal_Website/persweb-vid.mp4";

export const projects = [
    // IBC Traffic
    {
        id: "1",
        coverImg: ibcCoverImg,
        title: "IBC Traffic Website",
        tag: "Front-End",
        category: "front",
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
        category: "front",
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
    // To-Do App
    {
        id: "3",
        coverImg: "project_images/ToDo_Cover.png",
        title: "To-Do List App",
        tag: "Front-End",
        category: "front",
        tagline: "A clean and interactive to-do list app built with HTML, CSS, and JavaScript.",
        desc: "A lightweight to-do list application showcasing core web development skills—users can seamlessly add, edit, delete, and complete tasks, with dynamic task rendering and a minimalist design.",
        role: "Software Developer",
        demoLink: "https://landonlinn.github.io/TodoApp/",
        behanceLink: "",
        githubLink: "https://github.com/LandonLinn/TodoApp",
        overview: "Created to strengthen foundational skills in HTML, CSS, and JavaScript, this project highlights DOM manipulation, responsive design, and usability principles through a fully functional to-do list interface.",
        tools: ["HTML", "CSS (Flexbox & Grid)", "JavaScript (ES6+)"],
        features: [
            "Dynamic task management: add, edit, delete, and mark tasks as complete.",
            "Minimalist, mobile-first design with a focus on usability.",
            "Interactive task rendering using DOM manipulation.",
            "Local storage integration to persist tasks between sessions."
        ],
        results: [
            "Strengthened core web development foundations (HTML, CSS, JS).",
            "Improved proficiency in DOM manipulation and event handling.",
            "Enhanced understanding of clean UI/UX design for productivity apps."
        ],
        projImg: [
            {
                src: "project_images/ToDo_Cover.png",
                alt: "To-Do List App",
                size: "tall",
            },
        ],
    },
];