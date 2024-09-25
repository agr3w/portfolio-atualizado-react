import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar';
import AboutMe from 'components/AboutMe';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
