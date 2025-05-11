import React from "react";
import "./Contact.css";
import "../../App.css"
import emailjs from "@emailjs/browser";

import { useState } from "react";

// Import images
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png"
import locationIcon from "../../assets/icons/location.png";

const Contact = () => {

    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");
    
        emailjs
        .sendForm(
                "service_egihr2a",
                "default_template",
                e.target,
                "8hYkyWFqPa0ly9QD0"
            )
            .then(() => {
                setStatus("Message sent! Thank you for reaching out.");
                e.target.reset();
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setStatus("Failed to send message. Please try again later.");
            });
    };

    return (
        <main className="app-container">
            <div className="contactPage">
                <div className="contactPage-container">
                    <h1 className="title">Contact</h1>

                    {/* Contact Cards */}
                    <div className="contactCard-container">
                        <div className="contactCard">
                            <img src={phoneIcon} alt="Phone Icon" className="contactCard-icon" />
                            <a href="tel:678-772-3174" className="contactLink">678-772-3174</a>
                        </div>
                        <div className="contactCard">
                            <img src={mailIcon} alt="Mail Icon" className="contactCard-icon" />
                            <a href="mailto:landonlinn1@gmail.com" className="contactLink">landonlinn1@gmail.com</a>
                        </div>
                        <div className="contactCard">
                            <img src={locationIcon} alt="Location Icon" className="contactCard-icon" />
                            <a href="https://www.google.com/search?q=alpharetta+ga&oq=Alpharetta&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDINCAYQLhivARjHARiABDIGCAcQRRg90gEIMjM2NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" className="contactLink">Alpharetta, GA</a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contactFormContainer">
                        <form onSubmit={handleSubmit} className="contactForm">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="from_name" name="from_name" required />

                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="from_email" name="from_email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>

                            <button type="submit">Send</button>
                        </form>
                        <p className={"status " + (status.includes("failed") ? "error" : "success")}>
                            {status}
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Contact;