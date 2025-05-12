import React from "react";
import "./Hire.css";
import { Link } from "react-router";
import { toTop } from '../../utils/helpers';

const Hire = () => {
    return(
        <main className="app-container">
            <div className="hire-page">
                <div className="hire-container">
                    <h1>🚀 Freelance & Consulting Services<span className="badge">Coming Soon</span></h1>

                    <p>
                        I'm currently preparing a page full of my service offerings in web development,
                        UI/UX design, and consulting. In the mean time, whether you're a startup looking to build from scratch,
                        a business ready to redesign your digital presence, or someone who just needs expert
                        guidance — I’d love to collaborate.
                    </p>

                    <h2>Freelance Design & Development</h2>
                    <ul className="coming-list">
                        <li>Custom websites and landing pages (React, Vite, HTML/CSS/JS)</li>
                        <li>UI/UX design with performance & accessibility in mind</li>
                        <li>Brand-aligned UI kits and reusable design systems</li>
                        <li>Logo, icon, and brand identity design</li>
                        <li>Flyers, brochures, business cards, and print packages</li>
                        <li>Product packaging and presentation designs</li>
                        <li>Custom WordPress or e-commerce (basic) development</li>
                        <li>Photo editing, video editing, and graphics for social media</li>
                        <li>Bug fixes, website updates, and performance optimization</li>
                    </ul>

                    <h2>Consulting & Strategy Services</h2>
                    <ul className="coming-list">
                        <li>Website audits (UX, performance, accessibility, SEO)</li>
                        <li>Tech stack selection and deployment strategy</li>
                        <li>Landing page conversion consulting</li>
                        <li>Custom CRM, app, and CMS recommendations</li>
                        <li>API integration & database structure advising</li>
                        <li>Marketing campaign and content strategy</li>
                        <li>Social media ad campaigns, email & blogging strategies</li>
                    </ul>

                    <p>
                        In the mean time, if you have a project or idea in mind,{" "}
                        <Link to="/contact" onClick={toTop} className="contact-link">
                            reach out here
                        </Link>{" "}
                        — let’s make it happen.
                    </p>

                    <Link to="/" onClick={toTop}>
                        <button className="returnButt">Return Home</button>
                    </Link>
                </div>
            </div>
        </main>

    );
}

export default Hire;