import React from 'react';
import style from './HomeComponentsStyles/Contact.module.css';

const Contact = () => {
    return (
        <section id="contato" className={style.contact_section}>
            <h2 className={style.contact_title}>Contate-me</h2>
            <p className={style.contact_text}>Entre em contato comigo para saber mais informações sobre meus serviços.</p>
            <a href="/contate-me/contato.html" className={style.contact_link}>
                <button className={style.contact_button}>Contato</button>
            </a>
        </section>
    );
};

export default Contact;
