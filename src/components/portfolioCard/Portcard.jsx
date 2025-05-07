import React from "react";
import "./Portcard.css"

// Import Images
import extLinkIcon from "../../assets/icons/external-link-icon.svg"


const Portcard = ({coverImg, title, tag, desc, demoLink, onDetailsClick}) => {
    return(
        <div className="card-container">

            <img className="portCard-img" src={coverImg} alt={title} />
            
            <div className="portCard-content">
                <p className="cardTag">{tag}</p>
                <h2>{title}</h2>
                <p className="projDesc">{desc}</p>
            </div>

            <div className="portCard-Links">
                <div className="cardLinks">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="card-link">
                        Live Demo
                        <img src={extLinkIcon} className="external-link" alt="arrow" />
                    </a>
                </div>

                <button className="detailsButt" onClick={onDetailsClick}>Details</button>
            </div>
            
        </div>
    );
}

export default Portcard;