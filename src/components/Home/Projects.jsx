import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import style from "./HomeComponentsStyles/Projects.module.css"

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.projects);
    }, []);

    return (
        <section id="projetos">
            <h1 className={style.titulo_div_projetos}>Projetos</h1>
            <div className={style.projetos_container}>
                {projects.map((project, index) => (
                    <div className={style.card} key={index}>
                        <h2 className={style.titulo_projetos}>{project.title}</h2>
                        <img src={project.image} alt={`Projeto ${index + 1}`} className={style.card_img} />
                        <p className={style.card_descricao}>{project.description}</p>
                        <div className={style.barra_progresso}>
                            <span className={style.barra_html} style={{ width: `${project.progress.html}%` }}>HTML {project.progress.html}%</span>
                            <span className={style.barra_css} style={{ width: `${project.progress.css}%` }}>CSS {project.progress.css}%</span>
                            <span className={style.barra_js} style={{ width: `${project.progress.js}%` }}>JS {project.progress.js}%</span>
                        </div>
                        <button className={style.botao_ver}><a href={project.link}>Ver projeto</a></button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
