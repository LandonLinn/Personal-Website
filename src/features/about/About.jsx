import React, { useState } from "react";
import "./About.css"; // Optional, if you’re using a CSS file for styling

// Import Images
import ibmBadge from "../../assets/icons/IBM-fullstack-badge.png";
import googleBadge from "../../assets/icons/Google-UX-Badge.png";
import metaBadge from "../../assets/icons/Meta-Front-End-Badge.png";

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <section id="about-section" className="about-container">
      <div className="content-wrapper">
        <h1 className="title">ABOUT ME</h1>

        {/* PERSONAL INFO */}
        <h2 className="dropdown-title" onClick={() => toggleSection("personal")}>
          PERSONAL INFO
        </h2>
        {expandedSection === "personal" && (
          <div className="dropdown-content">
            <p><span>Name:</span> Landon Linn</p>
            <p><span>Age:</span> 22</p>
            <p><span>College:</span> The University of Tennessee</p>
            <p><span>Major:</span> Information Science</p>
            <p><span>Concentration:</span> User Experience Design</p>
            <p><span>Major GPA:</span> 3.56/4.00</p>
            <p><span>Graduation Year:</span> 2025</p>
            <p><span>Location:</span> Alpharetta, GA</p>
          </div>
        )}
        <hr />

        {/* EXPERIENCE */}
        <h2 className="dropdown-title" onClick={() => toggleSection("experience")}>
          RELEVANT EXPERIENCE
        </h2>
        {expandedSection === "experience" && (
          <div className="dropdown-content">
            <h3>Web Developer with IBC Traffic, Remote,  May 2024 - August 2024</h3>
                <em>Summer Internship</em>
                <ul>
                    <li>Collaborated with senior management to capture business requirements for the redesign of the corporate website,
                    leading to improved user experience and a measurable increase in traffic and conversions.
                    </li>
                    <li>Designed and deployed dynamic website features using Figma for prototyping, Squarespace for hosting, and custom
                    HTML, CSS, and JavaScript, improving site functionality and aesthetics.</li>
                    <li>Conducted iterative user testing and feedback sessions, refining the site based on insights, resulting in a more
                    intuitive and satisfying user experience.</li>
                    <li>Improved the corporate website by adding features including ability to submit online job applications and resume
                    uploads, contact messaging, email integration, quote requests, and social media integration with Facebook, LinkedIn,
                    and Instagram. </li>
                    <li>Facilitate consultative and programmatic website updates periodically as required by the management team.</li>
                </ul>
          </div>
        )}
        <hr />

        {/* COURSEWORK */}
        <h2 className="dropdown-title" onClick={() => toggleSection("coursework")}>
          RELEVANT COURSEWORK
        </h2>
        {expandedSection === "coursework" && (
          <div className="dropdown-content">
            <h3>Database Design - UTK Course</h3>
                <ul>
                    <li>Studied procedures and techniques in database design and development, including conceptual data modeling,
                    logical database design, and the physical database design process.</li>
                    <li>Gained proficiency in Structured Query Language (SQL) for querying and managing relational databases.</li>
                </ul>
                    <h3>Programming for Information Applications - UTK Course</h3>
                <ul>
                    <li>Focused on programming languages with an emphasis on data structures, built-in functions, user-defined variables,
                    and syntax control structures for processing and visualizing datasets.</li>
                </ul>
                <h3>User Experience Design - UTK Courses & Google UXD Certification</h3>
                <ul>
                    <li>Developed user-centered design skills, including user research, persona creation, wireframing, and prototyping.</li>
                    <li>Acquired expertise in usability testing and iterative design to enhance product functionality and user satisfaction.</li>
                    <li>Proficient in design tools such as Figma and Adobe XD for creating high-fidelity prototypes.</li>
                    <li>Applied accessibility principles to ensure inclusive and user-friendly designs for diverse users.</li>
                </ul>
                <h3>Interfaces and Interaction Design - UTK Course</h3>
                <ul>
                    <li>Explored human-computer interaction (HCI) principles to design intuitive and effective user interfaces</li>
                </ul>
                <h3>The Life of Data - UTK Course</h3>
                <ul>
                    <li>Studied lifecycle stages—creation, selection, storage, sharing, reuse, and preservation—alongside foundational
                    principles of effective data management.</li>
                    <li>Examined ethical concerns such as privacy, governance, bias, and accountability in the creation and use of data.</li>
                    <li>Explored data classification, labor, and governance frameworks to ensure fairness, security, and responsible data
                    practices.</li>
                </ul>
          </div>
        )}
        <hr />

        {/* CERTIFICATIONS */}
        <h2 className="dropdown-title" onClick={() => toggleSection("certs")}>
          PROFESSIONAL CERTIFICATIONS
        </h2>
        {expandedSection === "certs" && (
          <div className="dropdown-content">
            <div className="certTitle">
              <img src={ibmBadge} alt="IBM Full Stack Badge" />
              <h3>IBM Full Stack Software Developer (Expected April 2025)</h3>
            </div>
            <ul>
                <li><span>Front-End Development Fundamentals:</span> Gained a solid understanding of HTML, CSS, and JavaScript for building responsive and interactive web applications.</li>
                <li><span>Advanced JavaScript Skills:</span> Learned ES6+ syntax, DOM manipulation, event handling, and asynchronous programming for creating dynamic user experiences.</li>
                <li><span>React & Modern Front-End Frameworks:</span> Built reusable components, managed state with hooks, and developed single-page applications (SPAs) using React.js.</li>
                <li><span>Version Control & Collaboration:</span> Used Git and GitHub for collaborative development, version tracking, and deployment workflows.</li>
                <li><span>Web Accessibility & Responsive Design:</span> Ensured designs adhere to accessibility standards and implemented CSS frameworks like Bootstrap, Flexbox, and Grid for mobile-friendly interfaces.</li>
                <li><span>Back-End Development & API Integration:</span> Developed server-side applications with Node.js, Express.js, and Django. Built and consumed RESTful APIs to fetch, send, and process data dynamically.</li>
                <li><span>Database Management:</span> Designed and managed relational (SQL) and NoSQL databases. Utilized Django ORM for efficient database interactions.</li>
                <li><span>Cloud Computing & Deployment:</span> Deployed applications on cloud platforms using Docker containers, Kubernetes, and OpenShift for scalable and efficient hosting.</li>
                <li><span>DevOps & CI/CD Pipelines:</span> Implemented DevOps best practices, automated testing, and CI/CD pipelines for seamless integration and deployment.</li>
                <li><span>Microservices & Serverless Architecture:</span> Designed applications using microservices for modularity and leveraged serverless functions for scalable backend operations.</li>
                <li><span>AI-Powered Applications:</span> Integrated IBM Watson AI services to develop AI-driven applications using Python and Flask.</li>
                <li><span>Testing & Debugging:</span> Applied debugging techniques, wrote unit tests, and utilized Jest for ensuring application quality and reliability.</li>
                <li><span>Capstone & Portfolio Projects:</span> Developed and deployed a full-stack cloud-native application, integrating front-end and back-end technologies. Created multiple hands-on projects showcasing full-stack development skills.</li>
                <li><span>Career Preparation:</span> Gained industry-ready expertise, including interview strategies, resume optimization, and job application best practices for full-stack roles.</li>
            </ul>

            <div className="certTitle">
              <img src={googleBadge} alt="Google UX Badge" />
              <h3>Google UX Design Certification (Completed Sept 2024)</h3>
            </div>
            <a
                href="https://www.coursera.org/account/accomplishments/specialization/CERTHS5C9268"
                target="_blank"
                rel="noopener noreferrer"
                className="certLink"
              >
                View Certificate
              </a>
            <ul>
                <li><span>UX Design Fundamentals:</span> Mastered the principles of user-centered design, accessibility, and usability.</li>
                <li><span>Design Thinking Process:</span> Applied the stages of design thinking: empathize, define, ideate, prototype, and test.</li>
                <li><span>Wireframing & Prototyping:</span> Created low- and high-fidelity wireframes and interactive prototypes using tools including Figma and Adobe XD.</li>
                <li><span>User Research Skills:</span> Conducted user interviews, surveys, and usability testing to gather and analyze insights.</li>
                <li><span>Visual Design Principles:</span> Learned typography, color theory, and layout strategies for effective design communication.</li>
                <li><span>Responsive Design:</span> Designed interfaces optimized for mobile, tablet, and desktop devices.</li>
                <li><span>Project Management:</span> Organized and iterated on UX projects using Agile methodologies and collaboration tools.</li>
                <li><span>Portfolio Projects:</span> Completed three end-to-end UX design projects, showcasing skills in user research, prototyping, and testing.</li>
                <li><span>Real-World Problem Solving:</span> Developed solutions for user pain points through iterative design and user feedback.</li>
                <li><span>Career-Ready Skills:</span> Gained industry knowledge and best practices for applying UX skills in professional settings.</li>
            </ul>

            <div className="certTitle">
              <img src={metaBadge} alt="Meta Front-End Badge" />
              <h3>Meta Front-End Developer (Completed Jan 2025)</h3>
            </div>
            <a
                href="https://www.coursera.org/account/accomplishments/specialization/GJ9BBAGBZQJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="certLink"
              >
                View Certificate
              </a>
            <ul>
                <li><span>Front-End Development Fundamentals:</span> Gained a solid understanding of HTML, CSS, and JavaScript for building responsive and interactive web applications.</li>
                <li><span>Advanced JavaScript Skills:</span> Learned ES6+ syntax, DOM manipulation, and event handling to create dynamic user experiences.</li>
                <li><span>React Expertise:</span> Built reusable components, managed state with hooks, and developed single-page applications (SPAs) using React.</li>
                <li><span>Version Control:</span> Used Git and GitHub for collaborative development, version tracking, and deployment workflows.</li>
                <li><span>Web Accessibility:</span> Ensured designs adhere to accessibility standards for inclusive user experiences.</li>
                <li><span>Responsive Design:</span> Mastered CSS frameworks including Bootstrap and Flexbox/Grid layouts for mobile-friendly interfaces.</li>
                <li><span>API Integration:</span> Worked with RESTful APIs to fetch, send, and display data dynamically in applications.</li>
                <li><span>Testing & Debugging:</span> Applied debugging techniques and used tools including Jest to ensure application quality and reliability.</li>
                <li><span>Portfolio Projects:</span> Completed hands-on projects, including fully functional websites and web apps, to demonstrate front-end skills.</li>
                <li><span>Career Preparation:</span>Developed industry-ready expertise, including interviewing tips and job application strategies for front-end roles.</li>
            </ul>
          </div>
        )}
        <hr />

        {/* AFFILIATIONS */}
        <h2 className="dropdown-title" onClick={() => toggleSection("affiliations")}>
          PROFESSIONAL AFFILIATIONS
        </h2>
        {expandedSection === "affiliations" && (
          <div className="dropdown-content">
            <ul>
              <li>US Research Software Engineer Association (US-RSE)</li>
              <li>Association for Computing Machinery (ACM)</li>
              <li>International Institute of Business Analysis (IIBA)</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
