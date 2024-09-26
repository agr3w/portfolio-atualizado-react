import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import style from "./HomeComponentsStyles/AboutMe.module.css";
import styles from "../hooks/Animations.module.css"
import useScrollAnimation from 'components/hooks/useScrollAnimation ';


const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
        setAboutMe(data.aboutMe);
    }, []);

    const [aboutRef, aboutAnimation] = useScrollAnimation(styles.initial, styles.slideUp);


    return (
        <section id="aboutMe" className={aboutAnimation} ref={aboutRef}>
            <section className={style.quem_sou}>
                <div className={style.quem_sou_container}>
                    <div className="foto">
                        <img src={aboutMe.profileImage} alt="Imagem de perfil" className={style.quem_sou_image} />
                    </div>
                    <div className={style.quem_sou_texto}>
                        <h2>Quem sou eu</h2>
                        <p>{aboutMe.description}</p>
                    </div>
                </div>
            </section>
         </section>
    );
};

export default AboutMe;
