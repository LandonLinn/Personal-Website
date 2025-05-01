import React from "react";
import "./Portcard.css"


const Portcard = ({img, title, tag, desc, demoLink, onDetailsClick}) => {
    return(
        <div className="card-container">

            <img className="portCard-img" src={img} alt={title} />
            
            <div className="portCard-content">
                <p className="cardTag">{tag}</p>
                <h2>{title}</h2>
                <p className="projDesc">{desc}</p>
            </div>

            <div className="portCard-Links">
                <div className="cardLinks">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="card-link">
                    Live Demo
                    <img src='../../src/assets/icons/external-link-icon.svg' className="external-link" alt="arrow" />
                </a>
                </div>

                <button className="detailsButt" onClick={onDetailsClick}>Details</button>
            </div>
            
        </div>
    );
}

export default Portcard;