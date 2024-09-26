import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import style from "./HomeComponentsStyles/Skills.module.css"

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(data.skills);
    }, []);

    return (
        <section id={style.habilidades}>
            <div className={style.habilidades_container}>
                <h2 className={style.titulo_habilidade}>Minhas habilidades</h2>
                <ul className={style.habilidades_lista}>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <span className={`habilidade_nome ${skill.name.toLowerCase()}`}>{skill.name}</span>
                            <div className={style.habilidade_estrelas}>
                                {[...Array(skill.stars)].map((_, i) => (
                                    <div className={style.estrela} key={i}></div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;