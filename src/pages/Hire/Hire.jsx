import React from "react";
import "./Hire.css";
import { Link } from "react-router";
import { toTop } from '../../utils/helpers';

const Hire = () => {
    return(
        <section class="consult-container">
        <div class="content-wrapper">
            <h1>🚧Consulting Services Coming Soon!🚧</h1>
            <Link to="/" onClick={ toTop }><button className="returnButt">Return Home</button></Link>
        </div>
     </section>
    );
}

export default Hire;