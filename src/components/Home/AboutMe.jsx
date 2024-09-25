import React, { useEffect, useState } from 'react';
import data from '../../data.json';

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
        setAboutMe(data.aboutMe);
    }, []);

    return (
        <section className="quem-sou">
            <div className="quem-sou-container">
                <div className="foto">
                    <img src={aboutMe.profileImage} alt="Imagem de perfil" className="quem-sou-image" />
                </div>
                <div className="quem-sou-texto">
                    <h2>Quem sou eu</h2>
                    <p>{aboutMe.description}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
