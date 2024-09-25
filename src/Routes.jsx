import Footer from 'components/Home/Footer';
import Navbar from 'components/Home/Navbar';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projetos" element={<Projects />} /> */}
                {/* <Route path="/contato" element={<Contact />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
