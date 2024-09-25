import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'HTML', stars: 5 },
        { name: 'CSS', stars: 5 },
        { name: 'JavaScript', stars: 5 },
        { name: 'React', stars: 5 },
    ];

    return (
        <section id="habilidades">
            <div className="habilidades-container">
                <h2 className="titulo-habilidade">Minhas habilidades</h2>
                <ul className="habilidades-lista">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <span className={`habilidade-nome ${skill.name.toLowerCase()}`}>{skill.name}</span>
                            <div className="habilidade-estrelas">
                                {[...Array(skill.stars)].map((_, i) => (
                                    <div className="estrela" key={i}></div>
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
