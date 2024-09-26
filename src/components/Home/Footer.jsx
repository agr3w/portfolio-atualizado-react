import React from 'react';
import style from './HomeComponentsStyles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_container}>
                <p className={style.footer_text}>
                    &copy; {new Date().getFullYear()} Weslley Luiz Kampa. Todos os direitos reservados.
                </p>
                <div className={style.social_links}>
                    <a href="https://github.com/seu-github" className={style.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/seu-linkedin" className={style.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:seuemail@email.com" className={style.link}>Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
