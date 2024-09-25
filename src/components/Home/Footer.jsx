import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="redes">
                <a href="https://cursos.alura.com.br/vitrinedev/suzanakampa-sk"><img src="/imgs/Alura.jpg" alt="Alura" className="img-footer" /></a>
                <a href="https://github.com/agr3w"><img src="/imgs/GitHub-Mark.png" alt="GitHub" className="img-footer" /></a>
                <a href="https://www.instagram.com/weslley_kampa/"><img src="/imgs/instagram.png" alt="Instagram" className="img-footer" /></a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'black' }}>
                <p style={{ backgroundColor: 'black', color: 'azure', padding: '10px 0' }}>&copy; 2024 Weslley Luiz Kampa</p>
                <p style={{ backgroundColor: 'black', color: 'azure', padding: '10px 0' }}>📧: kampaweslley@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
