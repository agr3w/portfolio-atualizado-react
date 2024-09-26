import AboutMe from 'components/Home/AboutMe';
import Contact from 'components/Home/Contact';
import Projects from 'components/Home/Projects';
import Skills from 'components/Home/Skills';
import React from 'react';

const Home = () => {
    return (
        <>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
