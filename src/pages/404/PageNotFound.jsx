import React from "react";
import { Link } from "react-router";
import "./PageNotFound.css";
import { toTop } from '../../utils/helpers';

const PageNotFound = () => {

    return(
        <main className="pNF-container">
            <div className="pNF-content">
                <h1 className="four-o-four">404</h1>
                <h2>Nothing creative to see here!</h2>
                <p>The page you're looking for cannot be located. Just in case, please check the URL.</p>
                <Link to="/" onClick={ toTop }><button className="returnButt">Return Home</button></Link>
            </div>
        </main>
    );

}

export default PageNotFound;