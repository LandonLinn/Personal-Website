import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router"
import { scroller } from "react-scroll";

// Section Import
import Hero from "../../features/hero/hero";
import About from "../../features/about/About";
import Portfolio from "../../features/Portfolio/Portfolio";
import Skills from "../../features/skills/Skills";

const Home = () => {

    const location = useLocation();

    
    useEffect(() => {
        if (location.state?.scrollTo) {
        scroller.scrollTo(location.state.scrollTo, {
            smooth: true,
            offset: -80,
            duration: 500,
        });
        }
    }, [location]);

    return(
        <div className='app-container'>
            <Hero />
            <About />
            <Portfolio />
            <Skills />
        </div>
    );
}

export default Home;