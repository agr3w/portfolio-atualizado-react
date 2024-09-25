import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeComponentsStyles/Nav.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
